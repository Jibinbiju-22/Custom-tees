var express = require('express');
var router = express.Router();
var mysql=require('mysql');
var con=mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"dbcustomtees"
});
/* GET users listing. */
router.post('/', function(req, res, next) {
let startdate=req.body.startdate;
let enddate=req.body.enddate;
let qry=`SELECT * FROM tblpayment p inner join tblfinalproduct fp
on fp.finalproductid=p.finalproductid inner join tblrequest r on r.requestid=fp.requestid inner join tblproduct pr on pr.productid=r.productid WHERE 
paymentdate>'${startdate}' and paymentdate<'${enddate}' order by p.paymentid desc`;
console.log(qry)
con.query(qry,(err,row)=>{
if (err) throw err;
res.send(row);
});
});
module.exports = router;
