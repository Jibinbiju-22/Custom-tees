var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var app = express();

var cors=require("cors");
var login=require('./routes/login');
var districtregister=require('./routes/districtregister');
var districtview=require('./routes/districtview');
var deletedistrict=require('./routes/deletedistrict');
var locationregister=require('./routes/locationregister');
var getdistrict=require('./routes/getdistrict');
var locationview=require('./routes/locationview');
var deletelocation=require('./routes/deletelocation');
var colorregister=require('./routes/colorregister');
var colorview=require('./routes/colorview');
var deletecolor=require('./routes/deletecolor');
var sizeregister=require('./routes/sizeregister');
var sizeview=require('./routes/sizeview');
var deletesize=require('./routes/deletesize');
var categoryregister=require('./routes/categoryregister');
var catimg=require('./routes/catimg');
var viewcategory=require('./routes/viewcategory');
var deletecategory=require('./routes/deletecategory');
var deleteproduct=require('./routes/deleteproduct');
var productregister=require('./routes/productregister');
var getcateory=require('./routes/getcategory');
var productview=require('./routes/productview');
var customerregister=require('./routes/customerregister');
var getcategorybyproduct=require('./routes/getcategorybyproduct');
var viewproduct=require('./routes/viewproduct');
var request=require('./routes/request');
var viewrequest=require('./routes/viewrequest');
var requestsize=require('./routes/requestsize');
var viewsizereq=require('./routes/viewsizereq');
var viewsizereq1=require('./routes/viewsizereq1');
var reqviewmore=require('./routes/reqviewmore');
var reqapprove=require('./routes/reqapprove');
var product=require('./routes/product');
var updatereq=require('./routes/updatereq');
var viewfinalproduct=require('./routes/viewfinalproduct');
var viewfinalproduct1=require('./routes/viewfinalproduct1');
var payment=require('./routes/payment');
var viewpayment=require('./routes/viewpayment');
var deletefinalproduct=require('./routes/deletefinalproduct');
var report=require('./routes/report');
var viewcustomer=require('./routes/viewcustomer');
var quantitysum=require('./routes/quantitysum');
var totalprice=require('./routes/totalprice');
var editdistrict=require('./routes/editdistrict');
var editlocation=require('./routes/editlocation');
var getlocation=require('./routes/getlocation');
var getcategorybyid=require('./routes/getcategorybyid');
var editcategory=require('./routes/editcategory');
var getproductbyid=require('./routes/getproductbyid');
var updateproduct=require('./routes/updateproduct');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(cors());
app.use('/login',login);
app.use('/districtregister',districtregister);
app.use('/districtview',districtview);
app.use('/deletedistrict',deletedistrict);
app.use('/locationregister',locationregister);
app.use('/getdistrict',getdistrict);
app.use('/locationview',locationview);
app.use('/deletelocation',deletelocation);
app.use('/colorregister',colorregister);
app.use('/colorview',colorview);
app.use('/deletecolor',deletecolor);
app.use('/sizeregister',sizeregister);
app.use('/sizeview',sizeview);
app.use('/deletesize',deletesize);
app.use('/categoryregister',categoryregister);
app.use('/catimg',catimg);
app.use('/viewcategory',viewcategory);
app.use('/deletecategory',deletecategory);
app.use('/productregister',productregister);
app.use('/getcategory',getcateory);
app.use('/productview',productview);
app.use('/deleteproduct',deleteproduct);
app.use('/customeregister',customerregister);
app.use('/getcategorybyproduct',getcategorybyproduct);
app.use('/viewproduct',viewproduct);
app.use('/request',request);
app.use('/viewrequest',viewrequest);
app.use('/requestsize',requestsize);
app.use('/viewsizereq',viewsizereq);
app.use('/viewsizereq1',viewsizereq1);
app.use('/reqviewmore',reqviewmore);
app.use('/reqapprove',reqapprove);
app.use('/product',product);
app.use('/updatereq',updatereq);
app.use('/viewfinalproduct',viewfinalproduct);
app.use('/viewfinalproduct1',viewfinalproduct1);
app.use('/payment',payment);
app.use('/viewpayment',viewpayment);
app.use('/deletefinalproduct',deletefinalproduct);
app.use('/report',report);
app.use('/viewcustomer',viewcustomer);
app.use('/quantitysum',quantitysum);
app.use('/totalprice',totalprice);
app.use('/editdistrict',editdistrict);
app.use('/editlocation',editlocation);
app.use('/getlocation',getlocation);
app.use('/getproductbyid',getproductbyid);
app.use('/updateproduct',updateproduct);
app.use('/editcategory',editcategory);
app.use('/getcategorybyid',getcategorybyid);



global.__basedir=path.resolve(path.dirname(''));

module.exports = app;