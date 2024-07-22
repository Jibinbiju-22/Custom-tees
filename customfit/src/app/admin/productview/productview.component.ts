import { Component,OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.scss']
})
export class ProductviewComponent {
  public categorydata:any[]=[];
  public productdata:any[]=[];
  productgroup!:FormGroup;
  constructor(private fb:FormBuilder,private db:DbserviceService,private router:Router) { }
  ngOnInit(): void {
  this.productgroup=this.fb.group({
  categoryid:[''],
  })
  this.db.Viewcategory().then((data:any)=>{
  this.categorydata=data;
  // console.log(data);
  });
  // this.db.viewlocation().then((data:any)=>{this. locationdata=data;
  // console.log(data)
  // })
  }
  onChange() {
  const id=this.productgroup.value.categoryid;
  console.log(id)
  this.db.getcategorybyid({id}).then((data:any) =>{
  this.productdata = data;
  console.log(this.productdata)
  });
  }
  Deleteproduct(productid:string)
  {
    this.db.deleteproduct({productid}).then((confirmation:any)=>{
      if(confirmation.messege==="Success")
        alert('Sucessfully Deleted')
        this.router.navigate(['/admin/adminmaster/productview'])
  
})
}
}
