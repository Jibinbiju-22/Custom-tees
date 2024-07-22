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
    let locationname=req.body.locationname;
    let districtid=req.body.districtid;
    let query = `SELECT * FROM tbllocation where locationname='${locationname}'`;
con.query(query,(err,rows)=>{
    if(err) throw err;
    
    if(rows==""){
    let strquery='insert into tbllocation(locationname,districtid) values(?,?)';
    
   
    
    con.query(strquery,[locationname,districtid]);
    res.send({ message: 'Success' })
    }
});
});
module.exports = router;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
  
  module.exports = router;