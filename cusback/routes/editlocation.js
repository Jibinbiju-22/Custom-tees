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
    let locationid=req.body.locationid;
    let locationname=req.body.locationname;
    let query = `update tbllocation set locationname='${locationname}' where locationid='${locationid}'`;

    con.query(query, (err, rows)=> {
        if(err) throw err;
        res.send(rows);
    });
        }
        );
    



module.exports = router;