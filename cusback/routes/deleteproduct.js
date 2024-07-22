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
    let productid=req.body.productid;
    let query = `DELETE FROM tblproduct where productid='${productid}'`;

    con.query(query, (err, rows)=> {
        if(err) throw err;
        res.send({ messege:'Success'});
    });
    
});
module.exports = router;