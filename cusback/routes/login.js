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
let email= req.body.email;
let password= req.body.password;
let role= req.body.role;
let strquery = `SELECT * FROM tbllogin where email='${email}' 
and password='${password}'`;
console.log(strquery)
con.query(strquery,(err,result)=>{
    if(err) {console.log(err);}
    // console.log(result);
    res.send(result)
    });
    });
    module.exports = router;
    