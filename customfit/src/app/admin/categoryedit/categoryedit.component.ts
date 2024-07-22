import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DbserviceService } from 'src/app/dbservice.service';

@Component({
  selector: 'app-categoryedit',
  templateUrl: './categoryedit.component.html',
  styleUrls: ['./categoryedit.component.scss']
})
export class CategoryeditComponent implements OnInit{
  selectedFiles?: FileList;

currentFile?: any;
message = '';
fileInfos?: Observable<any>;
  categoryid: any;
  public categorydata: any;
  CategoryFormGroup!:FormGroup;
  constructor(private fb:FormBuilder, private route: ActivatedRoute, private router:Router ,private dbservice:DbserviceService){
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.categoryid=params.get('id')
    })
  }

  ngOnInit(): void {
    this.CategoryFormGroup=this.fb.group({
      categoryid:[''],
      categoryname:[''],
      image:['']
    })
      
    this.dbservice.Getcategory({categoryid:this.categoryid}).then
    ((data:any)=>{
      this.categorydata=data;
      console.log(this.categorydata);
      this.CategoryFormGroup.setValue({
        categoryid: data[0].categoryid,
        categoryname:data[0].categoryname,
        image:data[0].image,
      });
    });
  
  }
  selectFile(event: any): void {
    this.selectedFiles= event.target.files;
    }
  onsubmit(){
    if (this.selectedFiles ) {
      // console.log(this.selectedFiles);
      const file: File | null = this.selectedFiles.item(0);
     
      if (file) {
      this.currentFile = file;
      this.dbservice.catimg(this.currentFile).subscribe(
        (event: any) => {
        this.message = event.body.message; }) ;
       
        } }
        this.CategoryFormGroup.value.image=this.currentFile.name;
    this.dbservice.Updatecategory(this.CategoryFormGroup.value).then((confirmation:any)=>{
      if(confirmation.message="Success"){
        alert('Category details updated')
        this.router.navigate(['/adminmaster/categoryview'])
  }
  })
  }
  
}
