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
    let color=req.body.color;
    let query = `SELECT * FROM tblcolor where color='${color}'`;
    con.query(query,(err,rows)=>{
        if(err) throw err;
        
        if(rows==""){
    let strquery='insert into tblcolor(color) values(?)';
   
   
    
    con.query(strquery,[color]);
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