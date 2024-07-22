import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-viewproductmoreguest',
  templateUrl: './viewproductmoreguest.component.html',
  styleUrls: ['./viewproductmoreguest.component.scss']
})
export class ViewproductmoreguestComponent implements OnInit{
  public productdata:any[]=[];
  productid: any;
customerid: any;
constructor(private router:Router,private route:ActivatedRoute,private dbService:DbserviceService,private fb:FormBuilder){
  this.route.paramMap.subscribe((params:ParamMap)=>{
  this.productid=params.get('id')
  console.log(this.productid)
  })}
  OnSubmit(){
  localStorage.setItem("productid",this.productdata[0].productid);
  }
  ngOnInit(): void {
    this.dbService.viewproduct({productid:this.productid}).then((data: any) => {
      this.productdata = data;
      console.log(this.productdata);
    })
  }

}
