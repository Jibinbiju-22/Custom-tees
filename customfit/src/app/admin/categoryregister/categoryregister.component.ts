import { Component, OnInit, Output,} from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { DbserviceService } from 'src/app/dbservice.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categoryregister',
  templateUrl: './categoryregister.component.html',
  styleUrls: ['./categoryregister.component.scss']
})
export class CategoryregisterComponent implements OnInit{
  public categorydata:any[]=[];
selectedFiles?: FileList;

currentFile?: any;
message = '';
fileInfos?: Observable<any>;
constructor(private fb:FormBuilder,private dbservices:DbserviceService,private router:Router){}
validationstatus=null;
CategoryFormGroup=this.fb.group({

  categoryname:['',[Validators.required,Validators.pattern(/^[A-Z][a-zA-Z\s\W]*$/)]],
  
  image:['',[Validators.required]],
  
  })
  

  ngOnInit(): void {
    // this.dbservices.categoryview.then((data:any)=>{this.categorydata=data;
    // console.log(data)})
    }
    selectFile(event: any): void {
    this.selectedFiles= event.target.files;
    }
    
    OnSubmit(){
      {
        if (this.CategoryFormGroup.invalid){
          this.validationstatus = " ";
          return
        }
        else {
          this.validationstatus = null;
          console.log(this.CategoryFormGroup.value)
        }
      }
    if (this.selectedFiles ) {
    // console.log(this.selectedFiles);
    const file: File | null = this.selectedFiles.item(0);
   
    if (file) {
    this.currentFile = file;
    this.dbservices.catimg(this.currentFile).subscribe(
      (event: any) => {
      this.message = event.body.message; }) ;
     
      } }
      this.CategoryFormGroup.value.image=this.currentFile.name;
      
      // console.log(this.productimage);
      this.dbservices.categoryregister(this.CategoryFormGroup.value).then((confirmation:any)=>
      {console.log(confirmation);
      if(confirmation.message === "Success"){
      alert(' Registration compleated successfully')
      
      }
      if(confirmation.message === "Failed"){
        alert('Category already exist')
        
        }
    })
      console.log(this.CategoryFormGroup.value)
       }
  
}
