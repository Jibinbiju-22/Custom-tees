import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-viewproductguest',
  templateUrl: './viewproductguest.component.html',
  styleUrls: ['./viewproductguest.component.scss']
})
export class ViewproductguestComponent implements OnInit{
  public productdata:any[]=[];
  categoryid: any;
  customerid: any;
  constructor(private router:Router,private route:ActivatedRoute,private dbService:DbserviceService,private fb:FormBuilder){
  this.route.paramMap.subscribe((params:ParamMap)=>{
  this.categoryid=params.get('id')
  console.log(this.categoryid)
  })}
  ngOnInit(): void {
    this.dbService.getcategorybyproduct({categoryid:this.categoryid}).then((data: any) => {
      this.productdata = data;
      console.log(this.productdata);
    })
  }
}
