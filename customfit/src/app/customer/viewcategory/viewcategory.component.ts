import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.scss']
})
export class ViewcategoryComponent implements OnInit{
  public categorydata:any[]=[];
constructor(private dbservice:DbserviceService) {}

ngOnInit(): void {
  this.dbservice.Viewcategory().then((data:any)=>{this.categorydata=data
    ;
    })
     
}
}
