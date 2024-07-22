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
let locationid = req.body.locationid;
//console.log(location_id);
let query = `SELECT * FROM tbllocation where locationid='${locationid}'`;

console.log(query);
con.query(query,(err,rows) => {
if (err) throw err;
res.send(rows);
});
});
module.exports = router;