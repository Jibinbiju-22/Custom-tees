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
    let query = 'INSERT INTO tblrequest(productid,loginid,colorid,customerdesign,customerdesigndescription,requireddate,requestdate,requeststatus,deliveryaddress) VALUES (?,?,?,?,?,?,?,?,?)';
    console.log(query);
        let productid = req.body.productid;
        let loginid = req.body.loginid;
        let colorid=req.body.colorid;
        
        let customerdesign=req.body.customerdesign;
        let customerdesigndescription=req.body.customerdesigndescription;
        
       
        var requireddate = req.body.requireddate;
        var requestdate = new Date();
        
        let requeststatus="Requested";
        
       let deliveryaddress=req.body.deliveryaddress;
        
       
    con.query(query,[productid,loginid,colorid,customerdesign,customerdesigndescription,requireddate,requestdate,requeststatus,deliveryaddress])
    console.log(query,[productid,loginid,colorid,customerdesign,customerdesigndescription,requireddate,requestdate,requeststatus,deliveryaddress]);
    {
    res.send(
    {
    message:'Success'
    }
    )
    }
    });
    module.exports=router