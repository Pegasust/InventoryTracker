var express = require('express');
var router = express.Router();
const inventory = require('inventory');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/inventory', inventory);

module.exports = router;
