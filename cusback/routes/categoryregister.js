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
    let categoryname= req.body.categoryname;
    let image= req.body.image;
    let strquery = `SELECT * FROM tblcategory where categoryname='${categoryname}';`;
    con.query(strquery,(err,rows)=>{
    if(err) throw err;
    if(rows==""){
        let query = 'INSERT INTO  tblcategory(categoryname,image)VALUES (?,?);';
        con.query(query,[categoryname,image])
        console.log(query,[categoryname,image]);
        {
        res.send(
        {
        message:'Success'
        }
        )
        }
    }
    else {
        res.send({
            message:'Failed'
        })
    }
    
    
    
});
    });
    module.exports = router