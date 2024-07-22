import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';


@Component({
  selector: 'app-viewproductmore',
  templateUrl: './viewproductmore.component.html',
  styleUrls: ['./viewproductmore.component.scss']
})
export class ViewproductmoreComponent implements OnInit{
  public productdata:any[]=[];
  productid: any;
customerid: any;
constructor(private router:Router,private route:ActivatedRoute,private dbService:DbserviceService,private fb:FormBuilder){
  this.route.paramMap.subscribe((params:ParamMap)=>{
  this.productid=params.get('id')
  console.log(this.productid)
  })}
  OnSubmit(){
    localStorage.setItem("productid",this.productdata[0].productid);
    // console.log(this.LoginFormGroup.value)
    // this.dbservice.login(this.LoginFormGroup.value).then((data:any)=>{
    // this.LoginArray=data;
    // console.log(data)
    // if(data==""){
    // alert ('invalid email and password')
    // this.router.navigate(['/Guestmaster/Login'])
    // return
    // }
    // else {
    // console.log(this.LoginArray)
    // var role = this.LoginArray[0].role;
    // // console.log(role)
    // localStorage.setItem("loginid",this.LoginArray[0].loginid);
    // localStorage.setItem("email",this.LoginArray[0].email);
    
    // var status = this.LoginArray[0].status;
    // console.log(status)
    // if(role == "Admin")
    // {
    
    // }
    // else if (role=="User")
    // {
    //   this.router.navigate(['/customermaster/customerhome'])
    //   }
    // else
    // {
    // alert('you are not an authorised person..')
    // }
    // }
    // })
    }
ngOnInit(): void {
  // localStorage.setItem("productid",this.productdata[0].productid);
  this.dbService.viewproduct({productid:this.productid}).then((data: any) => {
    this.productdata = data;
    console.log(this.productdata);
  })
}
}
