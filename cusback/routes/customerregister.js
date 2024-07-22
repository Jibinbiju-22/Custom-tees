const nodemailer = require("nodemailer");

var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "dbcustomtees"
});
router.post('/',(req,res,next)=>{
let customername = req.body.customername;
let email = req.body.email;
let phone = req.body.phone;
let password = req.body.password;
let districtid = req.body.districtid;
let locationid = req.body.locationid;
let customerphoto = req.body.customerphoto;

var regdate = new Date();
let role = "User";
let query = `SELECT * FROM tbllogin where email='${email}';`;
con.query(query,(err,rows)=>{
    if(err) throw err;
    
    if(rows==""){
//inserting data to login table
let strquery = 'INSERT INTO tbllogin(email,password,role)VALUES(?,?,?)';
console.log(strquery, [email,password,role]);
con.query(strquery, [email,password,role],(err,result)=>{
    //finding login id from login table
    
    //let query1 = SELECT MAX(login_id) as login_id from tbl_login;
    // console.log(query1)
    if(err)throw err
    let loginid = result.insertId;
    console.log(loginid)
    res.send({ message: 'Success' })
let strquery1=`INSERT INTO 
tblcustomer(customername,email,phone,customerphoto,regdate,districtid,locationid,loginid) 
VALUES(?,?,?,?,?,?,?,?)`;
console.log(strquery1,[customername,email,phone,customerphoto,regdate,districtid,locationid,loginid]);
con.query(strquery1,[customername,email,phone,customerphoto,regdate,districtid,locationid,loginid]);

})

const mailOptions = {
    from: `"SRM Tiles", "jibinbiju308@gmail.com"`,
    to: `${email}`,
    subject: "CUSTOM TEES Registration completed",
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
   
}
// else{
//     res.send({ message: 'Failed' })  
// }
});   

});



module.exports = router;