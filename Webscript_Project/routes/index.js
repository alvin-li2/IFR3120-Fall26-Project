let express = require('express');
let router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('Home_Page', { title: 'Home Page' });
});

/* GET checkout page*/
router.get('/checkout', function(req, res, next) {
  res.render('checkout', { title: 'Check Out' });
});

/* GET login page*/
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login Page' });
});

/* GET browse page */
router.get('/browse', function(req, res, next) {
  res.render('browse', { title: 'Browsing Page' });
});



module.exports = router;
