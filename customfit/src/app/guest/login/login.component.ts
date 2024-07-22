import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public LoginArray:any[]=[];
  validationstatus=null;
constructor(private fb: FormBuilder,private router:Router,private dbservice:DbserviceService) { }
LoginFormGroup=this.fb.group({
email: ['',[Validators.required,Validators.email]],
password: ['',[Validators.required]],

})
onSubmit(){
  {
    if (this.LoginFormGroup.invalid){
      this.validationstatus = " ";
      return
    }
    else {
      this.validationstatus = null;
      console.log(this.LoginFormGroup.value)
    }
  }
  // console.log(this.LoginFormGroup.value)
  this.dbservice.login(this.LoginFormGroup.value).then((data:any)=>{
  this.LoginArray=data;
  // console.log(data)
  if(data==""){
  alert ('invalid email and password')
  this.router.navigate(['/Guestmaster/Login'])
  return
  }
  else {
  // console.log(this.LoginArray)
  var role = this.LoginArray[0].role;
  // console.log(role)
  localStorage.setItem("loginid",this.LoginArray[0].loginid);
  localStorage.setItem("email",this.LoginArray[0].email);
  
  var status = this.LoginArray[0].status;
  // console.log(status)
  if(role == "Admin")
  {
  this.router.navigate(['/adminmaster/adminhome'])
  }
  else if (role=="User")
  {
    this.router.navigate(['/customermaster/customerhome'])
    }
  else
  {
  alert('you are not an authorised person..')
  }
  }
  })
  }
  // alert('success')
ngOnInit(): void {
  
}
}
