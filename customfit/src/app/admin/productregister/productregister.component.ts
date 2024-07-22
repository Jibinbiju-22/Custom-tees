import { Component,OnInit } from '@angular/core';
import { DbserviceService } from 'src/app/dbservice.service';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productregister',
  templateUrl: './productregister.component.html',
  styleUrls: ['./productregister.component.scss']
})
export class ProductregisterComponent implements OnInit{
  constructor(private fb:FormBuilder,private dbservices:DbserviceService,private router:Router){}
  validationstatus=null;
  public categorydetail:any[] = [];
  public productdata:any[]=[];
selectedFiles?: FileList;

currentFile?: any;

message = '';

fileInfos?: Observable<any>;

 ngOnInit(): void {
  this.dbservices.Viewcategory().then((data:any) => {
    this.categorydetail=data;
  });


   
 }
 ProductFormGroup=this.fb.group({
   
  productname:['',[Validators.required]],
  price:['',[Validators.required,Validators.pattern(/^[0-9]*$/)]],
  pimage:['',[Validators.required]],
  
  description:['',[Validators.required]],
  categoryid:['',[Validators.required]],

 })

 selectFile(event: any): void {
   this.selectedFiles= event.target.files;
   
   }
   

   OnSubmit(){
     if (this.selectedFiles ) {
     // console.log(this.selectedFiles);
     const file: File | null = this.selectedFiles.item(0);
    
     if (file) {
     this.currentFile = file;
     
     this.dbservices.catimg(this.currentFile).subscribe(
     (event: any) => {
     this.message = event.body.message; }) ;
    
     } }
     
      
     this.ProductFormGroup.value.pimage=this.currentFile.name;
    
      
     // console.log(this.productimage);
     this.dbservices.productregister(this.ProductFormGroup.value).then((confirmation:any)=>
     {console.log(confirmation);
     if(confirmation.alert === "Success"){
     alert('Registration compleated successfully')
     
     }})
     console.log(this.ProductFormGroup.value)}

}
