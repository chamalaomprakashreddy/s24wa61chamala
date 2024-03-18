const express = require('express');
const router = express.Router();
const a = Math.random();
const b = Math.random();
router.get('/', function(req, res) {
    const difference = Math.abs(a - b);
    res.send(`Absolute difference between ${a} and ${b} is ${difference}`);
});
router.get('/', function(req, res) {
    res.send('Respond with a resource');
});

module.exports = router;
