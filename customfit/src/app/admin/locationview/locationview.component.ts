import { Component,OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locationview',
  templateUrl: './locationview.component.html',
  styleUrls: ['./locationview.component.scss']
})
export class LocationviewComponent {
  public districtdata:any[]=[];
  public locationdata:any[]=[];
  locationgroup!:FormGroup;
  constructor(private fb:FormBuilder,private db:DbserviceService,private router:Router) { }
  ngOnInit(): void {
  this.locationgroup=this.fb.group({
  districtid:[''],
  })
  this.db.viewdistrict().then((data:any)=>{
  this.districtdata=data;
  // console.log(data);
  });
  // this.db.viewlocation().then((data:any)=>{this. locationdata=data;
  // console.log(data)
  // })
  }
  onChange() {
  const id=this.locationgroup.value.districtid;
  console.log(id)
  this.db.getdistrictbyid({id}).then((data:any) =>{
  this.locationdata = data;
  console.log(this.locationdata)
  });
  }
  Deletelocation(locationid:string)
  {
    this.db.deletelocation({locationid}).then((confirmation:any)=>{
      if(confirmation.messege==="Success")
        alert('Sucessfully Deleted')
        this.router.navigate(['/admin/adminmaster/locationview'])
      
    })
  }
  }

