const express = require('express');
const app = express();
const router = express.Router();
const db = require('../utils/sql_conn');
const bp = require('body-parser');
router.use(bp.json());

//Just a test: Select all tuples from members
router.get("/", (req, res) => {
  let query = "SELECT * FROM missionaries;";
  db.manyOrNone(query)
    .then((rows) => {
        res.send({
            success: true,
            missionaries: rows
        })
    }).catch((err) => {
        res.send({
            success: false,
            error: err
        })
    });
});

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('return a resource.');
});*/

module.exports = router;
