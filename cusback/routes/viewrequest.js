var express = require('express');
var router = express.Router();
var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"dbcustomtees"
});

/* GET course details contents */
router.get('/', (req, res, next) => {
    let query= "SELECT MAX(requestid) AS requestid FROM tblrequest";

    con.query(query,(err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;