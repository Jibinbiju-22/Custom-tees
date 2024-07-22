import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-reqconfirm',
  templateUrl: './reqconfirm.component.html',
  styleUrls: ['./reqconfirm.component.scss']
})
export class ReqconfirmComponent implements OnInit{
  
  selectedFiles?: FileList;
  message = '';
  currentFile?: any;
  reqconfirmformgroup!:FormGroup;
  totalquantity:any;
  money: any;
  reqid: any;
  public reqdata:any[]=[];
  public quantitydata:any[]=[];
  public productdata:any[]=[];
  constructor(private router:Router,private route:ActivatedRoute,private dbService:DbserviceService,private fb:FormBuilder){
    this.route.paramMap.subscribe((params:ParamMap)=>{
    this.reqid=params.get('id')
    // console.log(this.reqid)
    })}
    validationstatus=null;
  ngOnInit(): void {
    const id=this.reqid;
    this.dbService.reqapprove({reqid:this.reqid}).then((data: any) => {
      this.reqdata = data;
      localStorage.setItem("loginid",this.reqdata[0].loginid);
      localStorage.setItem("email",this.reqdata[0].email);
      // console.log(this.reqdata[0].loginid);
      // console.log(this.reqdata);
      // console.log(id);
    })



    this.reqconfirmformgroup=this.fb.group({
      loginid:[this.login],
      requestid:[this.reqid],
      email:[this.email],
      // productid:[this.product],
      // colorid:[''],
      admindesign:['',[Validators.required]],
      admindescription:['',[Validators.required]],
      money:[''],
      totalquantity:[''],
      customizationprice:[''],
      
      // requireddate:[''],
      // price:[''],
      // totalamount:[''],
    
      })
      

    this.dbService.quantitysum({reqid:this.reqid}).then((data: any) => {
      this.quantitydata = data[0].totalquantity;
      // console.log(data[0].totalquantity);
      console.log(data[0].totalquantity)

      this.totalquantity= data[0].totalquantity;
//       console.log(this.totalamount)
      this.reqconfirmformgroup.get("totalquantity")?.setValue(this.totalquantity)

      // this.reqconfirmformgroup.setValue({
      //   totalquantity:data[0].totalquantity,
      //   loginid:[this.login],
      // requestid:[this.reqid],
      // email:[this.email],
      // // productid:[this.product],
      // // colorid:[''],
      // admindesign:[''],
      // admindescription:[''],
      // money:[''],
      
      // customizationprice:[''],
      // })

    })

    this.dbService.totalprice({reqid:this.reqid}).then((data: any) => {
      this.productdata = data;
      console.log(data[0].price);

      this.money= data[0].price * this.reqconfirmformgroup.value.totalquantity;
      //       console.log(this.totalamount)
            this.reqconfirmformgroup.get("money")?.setValue(this.money)

      // this.reqconfirmformgroup.setValue({
      //   totalquantity:[this.quantitydata],
      //   loginid:[this.login],
      // requestid:[this.reqid],
      // email:[this.email],
      // // productid:[this.product],
      // // colorid:[''], 
      // admindesign:[''],
      // admindescription:[''],
      // money:[data[0].price * this.reqconfirmformgroup.value.totalquantity],
      
      // customizationprice:[''],
      // })

    })

   

    

   
    
  }

  onChange($event:any) {
    this.dbService.totalprice({reqid:this.reqid}).then((data: any) => {
    // this.reqconfirmformgroup.setValue({
    //   totalquantity:[this.quantitydata],
    //   loginid:[this.login],
    // requestid:[this.reqid],
    // email:[this.email],
    // // productid:[this.product],s
    // // colorid:[''], 
    // admindesign:[''],
    // admindescription:[''],
    // money:[data[0].price * this.reqconfirmformgroup.value.totalquantity + this.reqconfirmformgroup.value.customizationprice],
    
    // customizationprice:[this.reqconfirmformgroup.value.customizationprice],
    // })
          // const totalquantity=this.reqconfirmformgroup.value.totalquantity;
          // console.log(totalquantity)
          this.money=data[0].price * this.reqconfirmformgroup.value.totalquantity + this.reqconfirmformgroup.value.customizationprice;
          console.log(this.money)
          this.reqconfirmformgroup.get("money")?.setValue(this.money)

    })

  }

  
  public login=localStorage.getItem('loginid')
  public email=localStorage.getItem('email')
  selectFile(event: any): void {
    this.selectedFiles= event.target.files;
    }
  OnSubmit(requestid:string){
    {
      this.dbService.updatereq({requestid}).then((confirmation:any)=>{
        if(confirmation.messege==="Success")
          alert('Sucessfully updated')
          // this.router.navigate(['/admin/adminmaster/categoryview'])
        
      })
    }
    if (this.selectedFiles ) {
      // console.log(this.selectedFiles);
      const file: File | null = this.selectedFiles.item(0);
     
      if (file) {
      this.currentFile = file;
      
      this.dbService.catimg(this.currentFile).subscribe(
      (event: any) => {
      this.message = event.body.message; }) ;
     
      }
      this.reqconfirmformgroup.value.admindesign=this.currentFile.name;
     }
    console.log(this.reqconfirmformgroup.value);
    this.dbService.sendproduct(this.reqconfirmformgroup.value).then((confirmation: any) => {
      // console.log(this.productdata);
    if (confirmation.message == "Success") {
    alert(' Details inserted')
    // this.routor.navigate(['/customermaster/quantity'])
    }
    else {
    alert('Data not inserted,please check your data')
    }
    }
    )}
}
