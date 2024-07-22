import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-reqviewmore',
  templateUrl: './reqviewmore.component.html',
  styleUrls: ['./reqviewmore.component.scss']
})
export class ReqviewmoreComponent implements OnInit{
  public viewsizereq: any[] =[];
  requestid: any;
  public reqviewmore: any[] =[];
  constructor(private dbservice: DbserviceService,private router:Router,private route:ActivatedRoute){ 
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.requestid=params.get('id')
      console.log(this.requestid)
      })
  }
  ngOnInit(): void {
    this.dbservice.reqviewmore({requestid:this.requestid}).then((data: any) => {
      this.reqviewmore = data;
      console.log(this.reqviewmore);
    })
    this.viewsizereqdetails1();
    
  }
  viewsizereqdetails1(){
    this.dbservice.viewsizereq1({requestid:this.requestid}).then((data: any) => {
      this.viewsizereq =data;
      console.log(this.viewsizereq)
    });
  }
  
  
  
}
