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
    let id=req.body.reqid;
    let query = `SELECT * FROM tblrequestsize rs inner join tblsize s on rs.sizeid=s.sizeid inner join tblrequest r on r.requestid=rs.requestid  inner join tblcolor c on c.colorid=r.colorid inner join tblproduct p on p.productid=r.productid inner join tblcustomer cu on cu.loginid=r.loginid inner join tblcategory ca on ca.categoryid=p.categoryid where r.requestid='${id}'`;
console.log(query)
    con.query(query, (err, rows)=> {
        if(err) throw err;
        res.send(rows);
    });
    
});
module.exports=router;