var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "dbcustomtees"
});
router.post('/',(req,res,next)=>{
    let id=req.body.loginid;
    let query = `SELECT * FROM tblfinalproduct p inner join tblrequest r on r.requestid=p.requestid inner join tblproduct pr on pr.productid=r.productid where p.loginid='${id}' order by p.finalproductid desc`;
console.log(query)
    con.query(query, (err, rows)=> {
        if(err) throw err;
        res.send(rows);
    });
    
});
module.exports=router;