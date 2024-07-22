import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-districtview',
  templateUrl: './districtview.component.html',
  styleUrls: ['./districtview.component.scss']
})
export class DistrictviewComponent implements OnInit{
  public districtdetails: any[] =[];

  constructor(private dbservice: DbserviceService,private router:Router){ }

  ngOnInit(): void {
this.ViewDistrictDetails();
  }
  ViewDistrictDetails(){
    this.dbservice.viewdistrict().then((data: any) => {
      this.districtdetails =data;
    });
  }
  Deletedistrict(districtid:string)
  {
    this.dbservice.deletedistrict({districtid}).then((confirmation:any)=>{
      if(confirmation.messege==="Success")
        alert('Sucessfully deleted')
        this.router.navigate(['/adminmaster/distictview'])
      
    })
  }
 
 

}
