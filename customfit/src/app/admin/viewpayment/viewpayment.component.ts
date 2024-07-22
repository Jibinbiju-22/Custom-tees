import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-viewpayment',
  templateUrl: './viewpayment.component.html',
  styleUrls: ['./viewpayment.component.scss']
})
export class ViewpaymentComponent implements OnInit{
  constructor(private dbservice: DbserviceService,private router:Router){ }
  public viewpayment: any[] =[];
  ngOnInit(): void {
    this.viewpaymentfunction();
    
  }
  viewpaymentfunction(){
    this.dbservice.viewpayment().then((data: any) => {
      this.viewpayment =data;
      console.log(this.viewpayment)
    });
  }
//   OnSubmit(finalproductid:string){
//     this.dbservice.deletefinalproduct({finalproductid}).then((confirmation:any)=>{
//       if(confirmation.messege==="Success")
//         alert('Sucessfully Deleted ')
//         this.router.navigate(['/admin/adminmaster/categoryview'])
//       
//     })
//   }

}
