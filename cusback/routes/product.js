const nodemailer = require("nodemailer");

var express = require('express');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "dbcustomtees"
});
router.post('/', (req, res, next) => {
    let query = 'INSERT INTO tblfinalproduct(loginid,admindesign,admindescription,money,requestid,totalquantity,customizationprice) VALUES (?,?,?,?,?,?,?)';
    console.log(query);
       
        let loginid = req.body.loginid;
      
        let requestid = req.body.requestid;
        let admindesign=req.body.admindesign;
        let admindescription=req.body.admindescription;
        let money = req.body.money;
        let totalquantity = req.body.totalquantity;
        let email = req.body.email;
        let customizationprice = req.body.customizationprice;
       
       
        
        // let requeststatus="Requested";
        
        
       
    con.query(query,[loginid,admindesign,admindescription,money,requestid,totalquantity,customizationprice])
    console.log(query,[loginid,admindesign,admindescription,money,requestid,totalquantity,customizationprice]);
    {
    res.send(
    {
    message:'Success'
    }
    )
    }
    
    const mailOptions = {
        from: `"SRM Tiles", "jibinbiju308@gmail.com"`,
        to: `${email}`,
        subject: "CUSTOM TEES Product is ready to buy.",
        html: ``
        };
        const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
        user: "jibinbiju308@gmail.com",
        pass: "htpf xfox xlba dpck"
        }
        });
        transporter.sendMail(mailOptions, (err, info) => {
        if(err)
        console.log(err);
       
        console.log(info);
        })
        console.log(123)
       
     
       
    
    });
    
    
    
    module.exports = router;