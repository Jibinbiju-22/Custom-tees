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
    let id=req.body.finalproductid;
    let query = `SELECT * FROM tblfinalproduct where finalproductid='${id}'`;
console.log(query)
    con.query(query, (err, rows)=> {
        if(err) throw err;
        res.send(rows);
    });
    
});
module.exports=router;