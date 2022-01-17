const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
  res.end('<h1>App</h1>');
});

module.exports = router;
