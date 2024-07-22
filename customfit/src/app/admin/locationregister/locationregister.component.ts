import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-locationregister',
  templateUrl: './locationregister.component.html',
  styleUrls: ['./locationregister.component.scss']
})
export class LocationregisterComponent implements OnInit{
  constructor(private fb:FormBuilder,private dbservices:DbserviceService){}
  validationstatus=null;
  public districtdetails:any[] = [];

ngOnInit(): void {
  this.dbservices.viewdistrict().then((data:any) => {
    this.districtdetails=data;
  });

}
LocationFormGroup=this.fb.group({
   
  districtid:['',[Validators.required]],
  locationname:['',[Validators.required,Validators.pattern(/^[A-Z][a-zA-Z]*$/)]],

 })
 OnSubmit()
 
  {
    {
      if (this.LocationFormGroup.invalid){
        this.validationstatus = " ";
        return
      }
      else {
        this.validationstatus = null;
        console.log(this.LocationFormGroup.value)
      }
    }
    console.log(this.LocationFormGroup.value);
    this.dbservices.insertlocation(this.LocationFormGroup.value)

  }

}
