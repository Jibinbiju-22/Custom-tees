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
    let productid=req.body.productid;
    let productname=req.body.productname;
    let price=req.body.price;
    let pimage=req.body.pimage;
    let description=req.body.description;
    let query = `update tblproduct set productname='${productname}',price='${price}',pimage='${pimage}',description='${description}' where productid='${productid}'`;

    con.query(query, (err, rows)=> {
        if(err) throw err;
        res.send(rows);
    });
        }
        );
    



module.exports = router;