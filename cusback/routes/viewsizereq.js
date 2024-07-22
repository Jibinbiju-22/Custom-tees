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
    let query= `SELECT * FROM tblrequest r inner join tblcustomer cu on cu.loginid=r.loginid inner join tblproduct p on p.productid=r.productid inner join tblcategory c on c.categoryid=p.categoryid order by r.requeststatus desc `;

    con.query(query,(err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;