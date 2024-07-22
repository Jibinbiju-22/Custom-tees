import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';
@Component({
  selector: 'app-districtregister',
  templateUrl: './districtregister.component.html',
  styleUrls: ['./districtregister.component.scss']
})
export class DistrictregisterComponent {
  constructor(private fb:FormBuilder,private dbservice:DbserviceService,private router:Router ){}
  validationstatus=null;
  districtregisterformgroup=this.fb.group({
    districtname:['',[Validators.required,Validators.pattern(/^[A-Z][a-zA-Z]*$/)]],
    
    

  })

  OnSubmit()
  {
    {
      if (this.districtregisterformgroup.invalid){
        this.validationstatus = " ";
        return
      }
      else {
        this.validationstatus = null;
        console.log(this.districtregisterformgroup.value)
      }
    }
    console.log(this.districtregisterformgroup.value)
    this.dbservice.districtregister(this.districtregisterformgroup.value).then((confirmation:any)=>{
      if(confirmation.message="Success"){
        alert('District registered')
        this.router.navigate(['/adminmaster/districtview'])
  }
  else {
    alert('District already registerd')
  }
  })


}
}
