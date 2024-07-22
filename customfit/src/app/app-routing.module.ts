import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { GuestmasterComponent } from './guest/guestmaster/guestmaster.component';
import { GuesthomeComponent } from './guest/guesthome/guesthome.component';
import { DistrictregisterComponent } from './admin/districtregister/districtregister.component';
import { DistrictviewComponent } from './admin/districtview/districtview.component';
import { DistricteditComponent } from './admin/districtedit/districtedit.component';
import { LoginComponent } from './guest/login/login.component';
import { LocationregisterComponent } from './admin/locationregister/locationregister.component';
import { LocationviewComponent } from './admin/locationview/locationview.component';
import { SizeregisterComponent } from './admin/sizeregister/sizeregister.component';
import { SizeviewComponent } from './admin/sizeview/sizeview.component';
import { ColorregisterComponent } from './admin/colorregister/colorregister.component';
import { ColorviewComponent } from './admin/colorview/colorview.component';
import { ProductregisterComponent } from './admin/productregister/productregister.component';
import { ProductviewComponent } from './admin/productview/productview.component';
import { CategoryregisterComponent } from './admin/categoryregister/categoryregister.component';
import { CategoryviewComponent } from './admin/categoryview/categoryview.component';
import { CustomerregComponent } from './guest/customerreg/customerreg.component';
import { CustomermasterComponent } from './customer/customermaster/customermaster.component';
import { CustomerhomeComponent } from './customer/customerhome/customerhome.component';
import { ViewcategoryComponent } from './customer/viewcategory/viewcategory.component';
import { ViewproductComponent } from './customer/viewproduct/viewproduct.component';
import { ViewproductmoreComponent } from './customer/viewproductmore/viewproductmore.component';
import { BooknowComponent } from './customer/booknow/booknow.component';
import { QuantityComponent } from './customer/quantity/quantity.component';
import { RequestviewComponent } from './admin/requestview/requestview.component';
import { ReqconfirmComponent } from './admin/reqconfirm/reqconfirm.component';
import { CartComponent } from './customer/cart/cart.component';
import { PaymentComponent } from './customer/payment/payment.component';
import { ReqviewmoreComponent } from './admin/reqviewmore/reqviewmore.component';
import { ViewpaymentComponent } from './admin/viewpayment/viewpayment.component';
import { DatewisereportComponent } from './admin/datewisereport/datewisereport.component';
import { DeliveryComponent } from './customer/delivery/delivery.component';
import { ExcelreportComponent } from './admin/excelreport/excelreport.component';
import { ViewcategoryguestComponent } from './guest/viewcategoryguest/viewcategoryguest.component';
import { ViewproductguestComponent } from './guest/viewproductguest/viewproductguest.component';
import { ViewproductmoreguestComponent } from './guest/viewproductmoreguest/viewproductmoreguest.component';
import { LocationeditComponent } from './admin/locationedit/locationedit.component';
import { CategoryeditComponent } from './admin/categoryedit/categoryedit.component';
import { ProducteditComponent } from './admin/productedit/productedit.component';




const routes: Routes = [
  {
    path:'adminmaster',component:AdminmasterComponent,
children:
[
  {path:'adminhome', component:AdminhomeComponent},
  {path:'districtregister', component:DistrictregisterComponent},
  {path:'districtview', component:DistrictviewComponent},
  {path:'districtedit/:id', component:DistricteditComponent},
  {path:'locationregister', component:LocationregisterComponent},
  {path:'locationview', component:LocationviewComponent}, 
  {path:'sizeregister', component:SizeregisterComponent},
  {path:'sizeview', component:SizeviewComponent}, 
  {path:'colorregister', component:ColorregisterComponent},
  {path:'colorview', component:ColorviewComponent},
  {path:'categoryregister', component:CategoryregisterComponent},
  {path:'categoryview', component:CategoryviewComponent},
  {path:'productregister', component:ProductregisterComponent},
  {path:'productview', component:ProductviewComponent},
  {path:'requestview', component:RequestviewComponent},
  {path:'reqviewmore/:id', component:ReqviewmoreComponent},  
  {path:'reqconfirm/:id', component:ReqconfirmComponent},
  {path:'viewpayment', component:ViewpaymentComponent},
  {path:'datewisereport', component:DatewisereportComponent},
  {path:'excelreport', component:ExcelreportComponent},
  {path:'locationedit/:id', component:LocationeditComponent},
  {path:'categoryedit/:id', component:CategoryeditComponent},
  {path:'productedit/:id', component:ProducteditComponent},

 
 
 
]
  },
  {
    path:'guestmaster',component:GuestmasterComponent,
  children:
  [
    {path:'guesthome', component:GuesthomeComponent},
    {path:'Login', component:LoginComponent},
    {path:'customerreg', component:CustomerregComponent},
    {path:'viewcategoryguest', component:ViewcategoryguestComponent},
    {path:'viewproductguest/:id', component:ViewproductguestComponent},
    {path:'viewproductmoreguest/:id', component:ViewproductmoreguestComponent},
    // {path:'viewcategory', component:ViewcategoryComponent},
  ]
    },
    {path:'customermaster', component:CustomermasterComponent,
    children:
    [
      {path:'customerhome', component:CustomerhomeComponent},
      {path:'viewcategory', component:ViewcategoryComponent},
      {path:'viewproduct/:id', component:ViewproductComponent},
      {path:'viewproductmore/:id', component:ViewproductmoreComponent},
      {path:'booknow/:id', component:BooknowComponent},
      {path:'quantity', component:QuantityComponent},
      {path:'cart/:id', component:CartComponent},
      
     
    ]
  },
  {path:'',redirectTo:'/guestmaster/guesthome',pathMatch:'full'} , 
  {path:'payment/:id', component:PaymentComponent}, 
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
