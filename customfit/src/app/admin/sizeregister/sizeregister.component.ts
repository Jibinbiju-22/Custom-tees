import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-sizeregister',
  templateUrl: './sizeregister.component.html',
  styleUrls: ['./sizeregister.component.scss']
})
export class SizeregisterComponent {
  constructor(private fb:FormBuilder,private dbservice:DbserviceService){}
  validationstatus=null;
  sizeregisterformgroup=this.fb.group({
    size:['',[Validators.required,Validators.pattern(/^[A-Z][a-zA-Z]*$/)]],
    shoulder:['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
    chest:['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
    length:['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
    
    

  })

  OnSubmit()
  {
    console.log(this.sizeregisterformgroup.value)
    this.dbservice.sizeregister(this.sizeregisterformgroup.value)


}

}
