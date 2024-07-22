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
    
    let finalproductid = req.body.finalproductid1;
      
    let paid = req.body.paid;
    let email = req.body.email;
    
    var paymentdate = new Date();
    let paymentstatus = "Paid";
    let query1 = `SELECT * FROM tblpayment where finalproductid='${finalproductid}'`;
    con.query(query1,(err,rows)=>{
        if(err) throw err;
        
        if(rows==""){
    let query = 'INSERT INTO tblpayment(finalproductid,paid,paymentdate,paymentstatus) VALUES (?,?,?,?)';
    console.log(query);
       
       
        
        // let requeststatus="Requested";
        
        
       
    con.query(query,[finalproductid,paid,paymentdate,paymentstatus])
    console.log(query,[finalproductid,paid,paymentdate,paymentstatus]);
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
        subject: "CUSTOM TEES Payment Successful.",
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
    }});
     
       
    
    });
    
    
    
    module.exports = router;