import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { AdminmasterComponent } from './admin/adminmaster/adminmaster.component';
import { GuestmasterComponent } from './guest/guestmaster/guestmaster.component';
import { GuesthomeComponent } from './guest/guesthome/guesthome.component';
import { DistrictregisterComponent } from './admin/districtregister/districtregister.component';
import { DistrictviewComponent } from './admin/districtview/districtview.component';
import { DistricteditComponent } from './admin/districtedit/districtedit.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './guest/login/login.component';
import { LocationregisterComponent } from './admin/locationregister/locationregister.component';
import { SizeregisterComponent } from './admin/sizeregister/sizeregister.component';
import { ColorregisterComponent } from './admin/colorregister/colorregister.component';

import { ProductregisterComponent } from './admin/productregister/productregister.component';
import { CategoryregisterComponent } from './admin/categoryregister/categoryregister.component';
import { ColorviewComponent } from './admin/colorview/colorview.component';
import { SizeviewComponent } from './admin/sizeview/sizeview.component';
import { LocationviewComponent } from './admin/locationview/locationview.component';
import { CategoryviewComponent } from './admin/categoryview/categoryview.component';
import { ProductviewComponent } from './admin/productview/productview.component';
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
import { LocationreportComponent } from './admin/locationreport/locationreport.component';
import { LocationeditComponent } from './admin/locationedit/locationedit.component';
import { CategoryeditComponent } from './admin/categoryedit/categoryedit.component';
import { ProducteditComponent } from './admin/productedit/productedit.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminhomeComponent,
    AdminmasterComponent,
    GuestmasterComponent,
    GuesthomeComponent,
    DistrictregisterComponent,
    DistrictviewComponent,
    DistricteditComponent,
    LoginComponent,
    LocationregisterComponent,
    SizeregisterComponent,
    ColorregisterComponent,
    
    ProductregisterComponent,
         CategoryregisterComponent,
         ColorviewComponent,
         SizeviewComponent,
         LocationviewComponent,
         CategoryviewComponent,
         ProductviewComponent,
         CustomerregComponent,
         CustomermasterComponent,
         CustomerhomeComponent,
         ViewcategoryComponent,
         ViewproductComponent,
         ViewproductmoreComponent,
         BooknowComponent,
         QuantityComponent,
         RequestviewComponent,
         ReqconfirmComponent,
         CartComponent,
         PaymentComponent,
         ReqviewmoreComponent,
         ViewpaymentComponent,
         DatewisereportComponent,
         DeliveryComponent,
         ExcelreportComponent,
         ViewcategoryguestComponent,
         ViewproductguestComponent,
         ViewproductmoreguestComponent,
         LocationreportComponent,
         LocationeditComponent,
         CategoryeditComponent,
         ProducteditComponent,
 
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
