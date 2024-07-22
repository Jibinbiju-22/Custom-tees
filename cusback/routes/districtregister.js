var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "dbcustomtees"
});
router.post('/',(req,res,next)=>{
    let districtname=req.body.districtname;
    let query = `SELECT * FROM tbldistrict where districtname='${districtname}'`;
con.query(query,(err,rows)=>{
    if(err) throw err;
    
    if(rows==""){
    let strquery='insert into tbldistrict(districtname) values(?)';
   
   
    
    con.query(strquery,[districtname],(err,result)=>{
    res.send({ message: 'Success' })});
    }
}); 
});
module.exports = router;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
  
  module.exports = router;