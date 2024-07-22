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
    let productname= req.body.productname;
    let pimage= req.body.pimage;
    

    let price= req.body.price;
    let description= req.body.description;
    let categoryid= req.body.categoryid;
    let query = `SELECT * FROM tblproduct where productname='${productname}'`;
con.query(query,(err,rows)=>{
    if(err) throw err;
    
    if(rows==""){
    let query = `INSERT INTO 
    tblproduct(productname,pimage,price,description,categoryid) 
    VALUES (?,?,?,?,?);`;
        
    con.query(query,[productname,pimage,price,description,categoryid])
    console.log(query,[productname,pimage,price,description,categoryid]);
    {
    res.send(
    {
    message:'Success'
    }
    )
    }
}
});
    });
    module.exports = router