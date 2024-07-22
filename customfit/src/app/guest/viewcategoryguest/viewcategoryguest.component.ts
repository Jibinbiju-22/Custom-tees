import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-viewcategoryguest',
  templateUrl: './viewcategoryguest.component.html',
  styleUrls: ['./viewcategoryguest.component.scss']
})
export class ViewcategoryguestComponent implements OnInit{
  public categorydata:any[]=[];
constructor(private dbservice:DbserviceService) {}

ngOnInit(): void {
  this.dbservice.Viewcategory().then((data:any)=>{this.categorydata=data
    ;
    })
}
}
