import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbserviceService } from 'src/app/dbservice.service';
@Component({
  selector: 'app-customerreg',
  templateUrl: './customerreg.component.html',
  styleUrls: ['./customerreg.component.scss']
})
export class CustomerregComponent implements OnInit{
  constructor(private fb:FormBuilder,private dbservice:DbserviceService,private router:Router){}
  validationstatus=null;
  public districtdetails:any[]=[];
  public locationdetails:any[]=[];
  selectedFiles?: FileList;
currentFile?: any;
message = '';
fileInfos?: Observable<any>;
  customerregisterform=this.fb.group({
    //customername:['',[validators.required,validators.pattern(/^[A-Z][a-zA-Z\s\W]*$/)]],
    customername:['',[Validators.required,Validators.pattern(/^[A-Z][a-zA-Z\s\W]*$/)]],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required,Validators.pattern("[0-9]{10}")]],
    password:['',[Validators.required]],
   customerphoto:['',[Validators.required]],
    districtid:['',[Validators.required]],
    locationid:['',[Validators.required]],
  })
  selectFile(event: any): void {
    this.selectedFiles= event.target.files;
    }
  OnSubmit() {
    if (this.selectedFiles ) {
      const file: File | null = this.selectedFiles.item(0);
      if (file) {
      this.currentFile = file;
      this.dbservice.catimg(this.currentFile).subscribe(
      (event: any) => {
      this.message = event.body.message; }) ;
      } } 
      this.customerregisterform.value.customerphoto=this.currentFile.name;
    {
      if (this.customerregisterform.invalid){
        this.validationstatus = " ";
        return
      }
      else {
        this.validationstatus = null;
        console.log(this.customerregisterform.value)
      }
    }
    
    this.dbservice.customerregister(this.customerregisterform.value).then((confirmation:any)=>{
      if(confirmation.message="Success"){
        alert('Registration successful')
        this.router.navigate(['/guestmaster/Login'])
       
  }
  else{ 
    alert('E-mail address is already registered')}
  })
  }
ngOnInit(): void { 
  this.dbservice.viewdistrict().then((data:any)=>{
    this.districtdetails=data;
    console.log(data);
    });
    }
    onChange() {
      const id=this.customerregisterform.value.districtid;
      console.log(id)
      this.dbservice.getdistrictbyid({id}).then((data:any) =>{
      this.locationdetails = data;
      console.log(this.locationdetails)
      });
    }
}
