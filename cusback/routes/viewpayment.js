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
    let query= `SELECT * FROM tblpayment p inner join tblfinalproduct fp on fp.finalproductid=p.finalproductid inner join tblrequest r on r.requestid=fp.requestid inner join tblproduct pr on pr.productid=r.productid inner join tblcategory c on c.categoryid=pr.categoryid inner join tblcustomer cu on cu.loginid=r.loginid order by p.paymentid desc`;

    con.query(query,(err, rows) => {
        if (err) throw err;
        res.send(rows);
    });
});

module.exports = router;