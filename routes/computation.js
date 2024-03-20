const express = require('express');
const router = express.Router();
const x = Math.random();
const y = Math.random();
router.get('/', function(req, res) {
    const difference = Math.abs(x - y);
    res.send(`Math.abs(x - y) applied to ${x} and ${y} is ${difference}`);
});

module.exports = router;
