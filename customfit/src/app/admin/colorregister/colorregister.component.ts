import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-colorregister',
  templateUrl: './colorregister.component.html',
  styleUrls: ['./colorregister.component.scss']
})
export class ColorregisterComponent {
  constructor(private fb:FormBuilder,private dbservice:DbserviceService){}
  validationstatus=null;
  colorregisterformgroup=this.fb.group({
    color:['',[Validators.required,Validators.pattern(/^[A-Z][a-zA-Z]*$/)]],
    
    

  })
  OnSubmit()
  {
    {
      if (this.colorregisterformgroup.invalid){
        this.validationstatus = " ";
        return
      }
      else {
        this.validationstatus = null;
        console.log(this.colorregisterformgroup.value)
      }
    }
    console.log(this.colorregisterformgroup.value)
    this.dbservice.coloregister(this.colorregisterformgroup.value)


}
}
