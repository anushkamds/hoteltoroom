var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict')

router.get('/', restrict, function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  var vm = {
    title: 'Place an order',
    firstName: req.user ? req.user.firstName : null
  };
  res.render('orders/index', vm);
});

module.exports = router;
