import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-requestview',
  templateUrl: './requestview.component.html',
  styleUrls: ['./requestview.component.scss']
})
export class RequestviewComponent implements OnInit{
  public viewsizereq: any[] =[];
  constructor(private dbservice: DbserviceService,private router:Router){ }
  ngOnInit(): void {
    this.viewsizereqdetails();
  }
  viewsizereqdetails(){
    this.dbservice.viewsizereq().then((data: any) => {
      this.viewsizereq =data;
      console.log(this.viewsizereq)
    });
  }
}
