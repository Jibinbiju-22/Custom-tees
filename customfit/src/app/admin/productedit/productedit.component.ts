import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.scss']
})
export class ProducteditComponent implements OnInit{
  selectedFiles?: FileList;

currentFile?: any;
message = '';
fileInfos?: Observable<any>;
  productid: any;
  public productdata:any[]=[];
  ProductFormGroup!:FormGroup;
  constructor(private fb:FormBuilder, private route: ActivatedRoute, private router:Router ,private dbservice:DbserviceService){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.productid=params.get('id')
    })
  }
ngOnInit(): void {
  this.ProductFormGroup=this.fb.group({
    productname:[''],
  price:[''],
  pimage:[''],
  
  description:[''],
  productid:[''],
  })
  this.dbservice.getproductbyid({productid:this.productid}).then((data:any)=>{
    this.productdata=data;
    console.log(this.productdata);
    this.ProductFormGroup.setValue({
      productid: data[0].productid,
      productname:data[0].productname,
      price:data[0].price,
      pimage:data[0].pimage,
      description:data[0].description,
    });
  });
}
selectFile(event: any): void {
  this.selectedFiles= event.target.files;
  }
OnSubmit(){
  if (this.selectedFiles ) {
    // console.log(this.selectedFiles);
    const file: File | null = this.selectedFiles.item(0);
   
    if (file) {
    this.currentFile = file;
    this.dbservice.catimg(this.currentFile).subscribe(
      (event: any) => {
      this.message = event.body.message; }) ;
     
      } }
      this.ProductFormGroup.value.pimage=this.currentFile.name;
  this.dbservice.updateproduct(this.ProductFormGroup.value).then((confirmation:any)=>{
    if(confirmation.message="Success"){
      alert('Product details updated')
      this.router.navigate(['/adminmaster/productview'])
}
})
}
}
