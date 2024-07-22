import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss']
})
export class AdminhomeComponent {
  public viewcustomer: any[]=[];
  constructor(private dbservice:DbserviceService,private router:Router){ }

  ngOnInit():void
  {
    this.dbservice.viewcustomer().then((data:any)=>{
      this.viewcustomer=data;
      
    });
   
  }


}
