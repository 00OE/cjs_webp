var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JSs Page', pageName:'home.ejs' });
  });

module.exports = router;
