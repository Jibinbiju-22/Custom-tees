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
    let districtid=req.body.districtid;
    let districtname=req.body.districtname;
    let query = `update tbldistrict set districtname='${districtname}' where districtid='${districtid}'`;
    
    con.query(query, (err, rows)=> {
        console.log(query,[districtid,districtname]);
        if(err) throw err;
        res.send(rows);
    });
        }
        );
    



module.exports = router;