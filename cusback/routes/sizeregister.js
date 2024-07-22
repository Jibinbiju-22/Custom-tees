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
    let size=req.body.size;
    let shoulder=req.body.shoulder;
    let chest=req.body.chest;
    let length=req.body.length;
    let query = `SELECT * FROM tblsize where size='${size}'`;
    con.query(query,(err,rows)=>{
        if(err) throw err;
        
        if(rows==""){
    let strquery='insert into tblsize(size,shoulder,chest,length) values(?,?,?,?)';
   
   
    
    con.query(strquery,[size,shoulder,chest,length]);
    
    res.send({ message: 'Success' })
        }
    });
});
module.exports = router;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });
  
  module.exports = router;