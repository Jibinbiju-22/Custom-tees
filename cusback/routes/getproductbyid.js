var mysql = require('mysql');
var express = require('express');
var router = express.Router();
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "dbcustomtees"
});
/* GET users listing. */
router.post('/', (req, res, next) => {
let productid = req.body.productid;
// console.log(category_id);
let query = `SELECT * FROM tblproduct where productid='${productid}'`;

// console.log(query);
con.query(query,(err,rows) => {
if (err) throw err;
res.send(rows);
});
});
module.exports = router;