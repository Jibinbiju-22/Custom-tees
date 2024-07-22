var express = require('express');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "dbcustomtees"
});
router.post('/', (req, res, next) => {
    let query = 'INSERT INTO tblrequestsize(quantity,requestid,sizeid) VALUES (?,?,?)';
    let quantity = req.body.quantity;   
    let sizeid = req.body.sizeid;
    let requestid = req.body.requestid;  
       
        
       
    con.query(query,[quantity,requestid,sizeid])
    console.log(query,[quantity,requestid,sizeid]);
    {
    res.send(
    {
    message:'Success'
    }
    )
    }
    });
    module.exports=router