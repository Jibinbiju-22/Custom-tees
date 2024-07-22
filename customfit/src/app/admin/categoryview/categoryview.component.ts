import { Component,OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categoryview',
  templateUrl: './categoryview.component.html',
  styleUrls: ['./categoryview.component.scss']
})
export class CategoryviewComponent {
  public categorydetails: any[]=[];
  constructor(private dbservice:DbserviceService,private router:Router){ }

  ngOnInit():void
  {
    this.dbservice.Viewcategory().then((data:any)=>{
      this.categorydetails=data;
      
    });
   
  }
Deletecategory(categoryid:string)
  {
    this.dbservice.deletecategory({categoryid}).then((confirmation:any)=>{
      if(confirmation.messege==="Success")
        alert('Sucessfully Deleted')
        this.router.navigate(['/admin/adminmaster/categoryview'])
      
    })
  }
}
