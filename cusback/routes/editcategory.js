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
    let categoryid=req.body.categoryid;
    let categoryname=req.body.categoryname;
    let image=req.body.image;
    let query = `update tblcategory set categoryname='${categoryname}',image='${image}' where categoryid='${categoryid}'`;

    con.query(query, (err, rows)=> {
        if(err) throw err;
        res.send(rows);
    });
        }
        );
    



module.exports=router;