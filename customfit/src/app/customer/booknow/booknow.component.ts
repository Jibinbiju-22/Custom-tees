import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbserviceService } from 'src/app/dbservice.service';


@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.scss']
})
export class BooknowComponent implements OnInit{
  // totalamount:any;
  // quantity!: any;
  // customerid:any;
  
 public loginid=localStorage.getItem('loginid')

productid:any;
public productdata:any[]=[];
public colordetails:any[]=[];
booknowformgroup!:FormGroup;
selectedFiles?: FileList;


currentFile?: any;
message = '';
fileInfos?: Observable<any>;
totalamount:any;
// booknowformgroup!:FormGroup

constructor(private fb:FormBuilder,private dbservice:DbserviceService,private routor:Router,private route:ActivatedRoute){ 
  route.paramMap.subscribe((params:ParamMap)=>{this.productid=params.get('id')
  })}
  validationstatus=null;
 public product=localStorage.getItem('productid')
  
    
ngOnInit(): void {
  
 this.booknowformgroup=this.fb.group({
  loginid:[this.loginid],
  productid:[this.product],
  colorid:['',[Validators.required]],
  customerdesign:['',[Validators.required]],
  customerdesigndescription:['',[Validators.required]],
  totalquantity:[''],
  requireddate:['',[Validators.required]],
  // price:[''],
  totalamount:[''],
  deliveryaddress:['',[Validators.required]],

  })
  this.dbservice.viewcolor().then((data: any) => {
    this.colordetails =data;
    console.log(this.colordetails);
   
  
  }); 


    const id=this.productid;
   
    this.dbservice.viewproduct({productid:this.productid}).then((data:any)=>{
    this.productdata=data;

    console.log(this.productdata);
   
   
    console.log(id);
    console.log(this.loginid)
    }
    ) ;
  }
  
  

//     onChange($event:any) {
//       const totalquantity=this.booknowformgroup.value.totalquantity;
//       console.log(totalquantity)
//       this.totalamount=this.booknowformgroup.value.totalquantity * this.productdata[0].price;
//       console.log(this.totalamount)
//       this.booknowformgroup.get("totalamount")?.setValue(this.totalamount)
    
  
  
   
    
// }
selectFile(event: any): void {
  this.selectedFiles= event.target.files;
  console.log(this.selectedFiles);
  }
OnSubmit(){
  {
    if (this.booknowformgroup.invalid){
      this.validationstatus = " ";
      return
    }
    else {
      this.validationstatus = null;
      console.log(this.booknowformgroup.value)
    }
  }
  if (this.selectedFiles ) {
    // console.log(this.selectedFiles);
    const file: File | null = this.selectedFiles.item(0);
   
    if (file) {
    this.currentFile = file;
    console.log(this.currentFile);
    
    this.dbservice.catimg(this.currentFile).subscribe(
    (event: any) => {
      
    this.message = event.body.message; }) ;
   
    }
    this.booknowformgroup.value.customerdesign=this.currentFile.name;
 
  }
  console.log(this.booknowformgroup.value);
  this.dbservice.sendrequest(this.booknowformgroup.value).then((confirmation: any) => {
    console.log(this.productdata);
  if (confirmation.message == "Success") {
    this.routor.navigate(['/customermaster/quantity'])
  alert('You can enter size and quantity in next page')
  // this.routor.navigate(['/customermaster/quantity'])
  }
  else {
  alert('Data not inserted,Please check your data')
  }
  }
  )}
}

