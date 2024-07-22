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
    let sizeid=req.body.sizeid;
    let query = `DELETE FROM tblsize where sizeid='${sizeid}'`;

    con.query(query, (err, rows)=> {
        if(err) throw err;
        res.send({ messege:'Success'});
    });
    
});
module.exports = router;