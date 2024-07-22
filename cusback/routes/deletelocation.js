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
    let locationid=req.body.locationid;
    let query = `DELETE FROM tbllocation where locationid='${locationid}'`;

    con.query(query, (err, rows)=> {
        if(err) throw err;
        res.send({ messege:'Success'});
    });
    
});
module.exports = router;