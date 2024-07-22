import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{
 
  paymentformgroup!:FormGroup;
  constructor(private router:Router,private route:ActivatedRoute,private dbService:DbserviceService,private fb:FormBuilder){
    route.paramMap.subscribe((params:ParamMap)=>{this.finalproductid=params.get('id')
  })
  }
  validationstatus=null;
  finalproductid:any;
  public finalproductdata:any[]=[];
  public email=localStorage.getItem('email')
  public money=localStorage.getItem('money')
  
  ngOnInit(): void {
    
    this.paymentformgroup=this.fb.group({
      
      paid:[this.money],
      email:[this.email],
      finalproductid1:[this.finalproductid],
      cardnumber:['',[Validators.required,Validators.pattern(/^[0-9\s]*$/)]],
      nameoncard:['',[Validators.required,Validators.pattern(/^[A-Z][a-zA-Z\s\W]*$/)]],
      expirydate:['',[Validators.required]],
      securitycode:['',[Validators.required,Validators.pattern("[0-9]{3}")]],
      })

    this.dbService.viewfinalproduct1({finalproductid:this.finalproductid}).then((data: any) => {
      this.finalproductdata = data;
      localStorage.setItem("money",this.finalproductdata[0].money);
      
    })
   
  }
  
  OnSubmit(){
    {
      if (this.paymentformgroup.invalid){
        this.validationstatus = " ";
        return
      }
      else {
        this.validationstatus = null;
        console.log(this.paymentformgroup.value)
      }
    }
    
    this.dbService.payment(this.paymentformgroup.value).then((confirmation: any) => {
      console.log(confirmation)
      
    if (confirmation.message == "Success") {
    alert('Payment succesful. We will update delivery status through email and phone number that you provided ')
    // this.routor.navigate(['/customermaster/quantity'])
    }
    else {
    alert('Payment unsuccesful')
    }
    }
    )
    
      
    
    
  }
  
}
