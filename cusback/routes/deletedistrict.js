var express = require('express');
var router = express.Router();

var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"dbcustomtees"
});

router.post('/',(req,res,next)=>{
    let districtid=req.body.districtid;
    let query = `DELETE FROM tbldistrict where districtid='${districtid}'`;

    con.query(query, (err, rows)=> {
        if(err) throw err;
        res.send({ messege:'Success'});
    });
    
});
module.exports = router;