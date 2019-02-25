const express = require('express');
const app = express();
const router = express.Router();
const db = require('../utils/utils').db;
const bp = require('body-parser');
router.use(bp.json());

//Just a test: Select all tuples from members
router.get("/", (req, res) => {
  let query = "SELECT * FROM missionaries;";
  db.manyOrNone(query)
    .then((rows) => {
        res.send({
            success: true,
            missionary: rows[Math.floor(Math.random() * rows.length)]
        })
    }).catch((err) => {
        res.send({
            success: false,
            error: err
        })
    });
});

module.exports = router;