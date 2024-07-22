var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "dbcustomtees"
});
/* GET users listing. */
router.get('/', (req, res, next) => {
let query = `SELECT * FROM tblproduct p inner join tblcategory c on p.categoryid =c.categoryid order by c.categoryname desc` ;
con.query(query, (err, rows) => {
if (err) throw err;
res.send(rows);
console.log(rows);
});
});
module.exports = router