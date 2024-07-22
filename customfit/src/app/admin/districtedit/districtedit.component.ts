import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';
@Component({
  selector: 'app-districtedit',
  templateUrl: './districtedit.component.html',
  styleUrls: ['./districtedit.component.scss']
})
export class DistricteditComponent implements OnInit{
  districtid: any;
  public districtdata: any;
  editdistrictForm!:FormGroup;
  constructor(private fb:FormBuilder, private route: ActivatedRoute, private router:Router ,private dbservice:DbserviceService){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.districtid=params.get('id')
    })
  }

  ngOnInit(): void {
    const id=this.districtid;
    
    this.editdistrictForm=this.fb.group({
      districtid:[''],
      districtname:['']
    })
    this.dbservice.getdistrictbyid({id}).then((data:any)=>{
      this.districtdata=data;
      console.log(this.districtdata);
      this.editdistrictForm.setValue({
        districtid: data[0].districtid,
        districtname:data[0].districtname
      });
    });
    
  
  }
  onsubmit(){
    console.log(this.editdistrictForm.value)
    this.dbservice.updatedistrict(this.editdistrictForm.value).then((confirmation:any)=>{
      if(confirmation.message="Success"){
        alert('District details updated')
        this.router.navigate(['/adminmaster/districtview'])
  }
  else {
    alert('Not updated')
  }
  })
  }
  
}
