import { HttpClient,HttpEvent,HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
  constructor(private http:HttpClient) { }
  login(data:any)
  {
    return this.http.post("http://localhost:3000/login",data).toPromise()
    }
  districtregister(data:any)
  {
    return this.http.post<any>("http://localhost:3000/districtregister",data).toPromise().then(result =>{ })
  }
  viewdistrict()
  {
    return this.http.get("http://localhost:3000/districtview").toPromise()
}
  deletedistrict(data:any)
  {
    return this.http.post("http://localhost:3000/deletedistrict",data).toPromise()
  }
    insertlocation(data:any)
{
  this.http.post("http://localhost:3000/locationregister",data).toPromise().then(result =>{ })
}
getdistrictbyid(data:any)
{
  return this.http.post("http://localhost:3000/getdistrict",data).toPromise();
}
viewlocation(){
  return this.http.get("http://localhost:3000/locationview").toPromise()
}
deletelocation(data:any)
{
  return this.http.post("http://localhost:3000/deletelocation",data).toPromise()
}
coloregister(data:any)
{
  this.http.post("http://localhost:3000/colorregister",data).toPromise().then(result =>{ })
}
viewcolor()
{
  return this.http.get("http://localhost:3000/colorview").toPromise()
}
deletecolor(data:any)
{
  return this.http.post("http://localhost:3000/deletecolor",data).toPromise()
}
sizeregister(data:any)
{
  this.http.post("http://localhost:3000/sizeregister",data).toPromise().then(result =>{ })
}
viewsize()
{
  return this.http.get("http://localhost:3000/sizeview").toPromise()
}
deletesize(data:any)
{
  return this.http.post("http://localhost:3000/deletesize",data).toPromise()
}
categoryregister(data:any)
{
  return this.http.post("http://localhost:3000/categoryregister",data).toPromise()
  }
  catimg(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', `http://localhost:3000/catimg`, 
    formData, {
    reportProgress: true,
    responseType: 'json'
    });
    return this.http.request(req);
  } 
  Viewcategory()
  {
    return this.http.get("http://localhost:3000/viewcategory").toPromise()
}
  deletecategory(data:any)
  {
    return this.http.post("http://localhost:3000/deletecategory",data).toPromise()
}
  productregister(data:any)
{
  return this.http.post("http://localhost:3000/productregister",data).toPromise()

}
getcategorybyid(data:any)
{
  return this.http.post("http://localhost:3000/getcategory",data).toPromise();
}
  productview() {
    return this.http.get("http://localhost:3000/productview",).toPromise();
    }
  viewproduct(data:any)
  {
    return this.http.post("http://localhost:3000/viewproduct",data).toPromise()
  }
customerregister(data:any)
{
  return this.http.post<any>("http://localhost:3000/customeregister",data).toPromise()
 }
 deleteproduct(data:any)
  {
    return this.http.post("http://localhost:3000/deleteproduct",data).toPromise()
  }
  getcategorybyproduct(data:any){
  return this.http.post("http://localhost:3000/getcategorybyproduct",data).toPromise();
  }  
  sendrequest(id:any){
    return this.http.post<any>("http://localhost:3000/request",id).toPromise()
    }
    viewrequest()
    {
      return this.http.get("http://localhost:3000/viewrequest").toPromise()
  }
  sendsizerequest(data:any)
  {
    return this.http.post("http://localhost:3000/requestsize",data).toPromise()
  }
  viewsizereq()
  {
    return this.http.get("http://localhost:3000/viewsizereq").toPromise()
}
viewsizereq1(data:any){
  return this.http.post("http://localhost:3000/viewsizereq1",data).toPromise()
}
reqviewmore(data:any){
  return this.http.post("http://localhost:3000/reqviewmore",data).toPromise()
}
reqapprove(data:any){
return this.http.post("http://localhost:3000/reqapprove",data).toPromise();
}
sendproduct(id:any){
  return this.http.post<any>("http://localhost:3000/product",id).toPromise()
  }
  viewfinalproduct(data:any)
  {
    return this.http.post("http://localhost:3000/viewfinalproduct",data).toPromise()
  }
  updatereq(data:any){
    return this.http.post("http://localhost:3000/updatereq",data).toPromise()
  }
  viewfinalproduct1(data:any)
  {
    return this.http.post("http://localhost:3000/viewfinalproduct1",data).toPromise()
  }
  payment(id:any){
    return this.http.post<any>("http://localhost:3000/payment",id).toPromise()
    }
    viewpayment()
{
  return this.http.get("http://localhost:3000/viewpayment").toPromise()
}
report(data:any){
  return this.http.post("http://localhost:3000/report",data).toPromise()
  }
  viewcustomer()
  {
    return this.http.get("http://localhost:3000/viewcustomer").toPromise()
}
quantitysum(data:any){
return this.http.post("http://localhost:3000/quantitysum",data).toPromise();
}
totalprice(data:any){
return this.http.post("http://localhost:3000/totalprice",data).toPromise();
}

updatedistrict(data:any)
  {
    return this.http.post<any>("http://localhost:3000/editdistrict",data).toPromise()
  }
getlocationbyid(data:any)
{
  return this.http.post("http://localhost:3000/getlocation",data).toPromise();
}
  
updatelocation(data:any)
  {
    return this.http.post<any>("http://localhost:3000/editlocation",data).toPromise()
  }
Getcategory(categoryid:any)
{
  console.log(categoryid);
  return this.http.post<any>("http://localhost:3000/getcategorybyid",categoryid).toPromise()
  }
Updatecategory(data:any)
  {
    return this.http.post<any>("http://localhost:3000/editcategory",data).toPromise()
  }
getproductbyid(data:any)
{
  return this.http.post("http://localhost:3000/getproductbyid",data).toPromise();
}
updateproduct(data:any)
  {
    return this.http.post<any>("http://localhost:3000/updateproduct",data).toPromise()
  }
}
