import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  public finalproductdata:any[]=[];
  public loginid:any;
  constructor(private router:Router,private route:ActivatedRoute,private dbService:DbserviceService,private fb:FormBuilder){
    this.route.paramMap.subscribe((params:ParamMap)=>{
    this.loginid=params.get('id')
    console.log(this.loginid)
    })}
  ngOnInit(): void {
    this.dbService.viewfinalproduct({loginid:this.loginid}).then((data: any) => {
      this.finalproductdata = data;
      console.log(this.finalproductdata);
      
    })
    
  }
  OnSubmit(){
    localStorage.setItem("finalproductid",this.finalproductdata[0].finalproductid);
    localStorage.setItem("login",this.finalproductdata[0].loginid);
    

  }

}
