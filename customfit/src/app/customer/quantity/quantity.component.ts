import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent implements OnInit{
  booknowsizeformgroup!:FormGroup;
  public sizedetails:any[]=[];
  public requestid:any[]=[];
  constructor(private fb:FormBuilder,private dbservice:DbserviceService,private routor:Router,private route:ActivatedRoute){}
  
  
  validationstatus=null;
 
 
  ngOnInit(): void {
    this.dbservice.viewsize().then((data: any) => {
      this.sizedetails =data;
      console.log(this.sizedetails);
      
     
    
    }); 
    
    this.booknowsizeformgroup=this.fb.group({
   
      sizeid:['',[Validators.required]],
      quantity:['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
      requestid:[this.request],
  
      })
      this.dbservice.viewrequest().then((data: any) => {
        this.requestid =data;
        console.log(this.requestid);
        localStorage.setItem("requestid",this.requestid[0].requestid);
        console.log(this.requestid[0].requestid);
       
      
      }); 
  }
  public request=localStorage.getItem('requestid')
  

  
  OnSubmit(){
    {
      if (this.booknowsizeformgroup.invalid){
        this.validationstatus = " ";
        return
      }
      else {
        this.validationstatus = null;
        console.log(this.booknowsizeformgroup.value)
      }
    }
    this.dbservice.sendsizerequest(this.booknowsizeformgroup.value).then((confirmation: any) => {
       console.log(this.booknowsizeformgroup.value);
    if (confirmation.message == "Success") {
    alert(' Size request details inserted. We will check your request and you will be notified.')
    // this.routor.navigate(['/customermaster/quantity'])
    }
    else {
    alert('Data not inserted,Please check your data')
    }
    }
    )
  }

}
