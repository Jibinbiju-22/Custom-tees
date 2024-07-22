import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-locationedit',
  templateUrl: './locationedit.component.html',
  styleUrls: ['./locationedit.component.scss']
})
export class LocationeditComponent implements OnInit{
  locationid: any;
  public locationdata: any;
  editlocationform!:FormGroup;
  constructor(private fb:FormBuilder, private route: ActivatedRoute, private router:Router ,private dbservice:DbserviceService){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.locationid=params.get('id')
    })
  }
  ngOnInit(): void {
    const id=this.locationid;
    
    this.editlocationform=this.fb.group({
      locationid:[''],
      locationname:['']
    })
    this.dbservice.getlocationbyid({locationid:this.locationid}).then((data:any)=>{
      this.locationdata=data;
      console.log(this.locationdata);
      this.editlocationform.setValue({
        locationid: data[0].locationid,
        locationname:data[0].locationname
      });
    });
    
  }
  onsubmit(){
    this.dbservice.updatelocation(this.editlocationform.value).then((confirmation:any)=>{
      if(confirmation.message="Success"){
        alert('Location details updated')
        this.router.navigate(['/adminmaster/locationview'])
  }
  })
  }
  
}
