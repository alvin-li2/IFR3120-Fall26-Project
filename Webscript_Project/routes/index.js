let express = require('express');
let router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('Home_Page', { title: 'Home Page' });
});

/* GET checkout page*/
router.post('/confirmation', function(req, res, next) {
  res.render('confirmation', { title: 'Confirmed Order' });
});

/* GET login page*/
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login Page' });
});

module.exports = router;
