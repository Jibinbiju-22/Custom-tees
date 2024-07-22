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
let categoryid = req.body.categoryid;
// console.log(category_id);
let query = `SELECT * FROM tblcategory where categoryid='${categoryid}'`;

// console.log(query);
con.query(query,(err,rows) => {
if (err) throw err;
res.send(rows);
});
});
module.exports = router;