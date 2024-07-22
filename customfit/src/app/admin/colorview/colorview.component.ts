import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-colorview',
  templateUrl: './colorview.component.html',
  styleUrls: ['./colorview.component.scss']
})
export class ColorviewComponent implements OnInit{
  public colordetails: any[] =[];

  constructor(private dbservice: DbserviceService,private router:Router){ }

  ngOnInit(): void {
this.ViewColorDetails();
  }
  ViewColorDetails(){
    this.dbservice.viewcolor().then((data: any) => {
      this.colordetails =data;
    });
  }
  Deletecolor(colorid:string)
  {
    this.dbservice.deletecolor({colorid}).then((confirmation:any)=>{
      if(confirmation.messege==="Success")
        alert('Sucessfully Deleted')
        this.router.navigate(['/admin/adminmaster/colorview'])
      
    })
  }
 

}
