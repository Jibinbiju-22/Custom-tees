import { Component, OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sizeview',
  templateUrl: './sizeview.component.html',
  styleUrls: ['./sizeview.component.scss']
})
export class SizeviewComponent implements OnInit{
  public sizedetails: any[] =[];

  constructor(private dbservice: DbserviceService,private router:Router){ }

  ngOnInit(): void {
this.ViewSizeDetails();
  }
  ViewSizeDetails(){
    this.dbservice.viewsize().then((data: any) => {
      this.sizedetails =data;
    });
  }
  Deletesize(sizeid:string)
  {
    this.dbservice.deletesize({sizeid}).then((confirmation:any)=>{
      if(confirmation.messege==="Success")
        alert('Sucessfully Deleted')
        this.router.navigate(['/admin/adminmaster/sizeview'])
      
    })
  }
 
}
