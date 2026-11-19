let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Home_Page', { title: 'Home Page' });
});

/* GET home page 2*/
router.get('/home', function(req, res, next) {
  res.render('Home_Page', { title: 'Home Page' });
});

module.exports = router;
