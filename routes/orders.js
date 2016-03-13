var express = require('express');
var router = express.Router();
var restrict = require('../auth/restrict')
var orderService = require('../services/order-services.js')

router.get('/', restrict, function (req, res, next) {
    if (!req.isAuthenticated()) {
        return res.redirect('/');
    }
    var vm = {
        title: 'Place an order',
        firstName: req.user ? req.user.firstName : null
    };
    res.render('orders/index', vm);
});

router.get('/api/restaurants', restrict, function (req, res, next) {
    orderService.getResturant(function (err, restaurants) {
        if (err) {
            return res.status(500).json({
                error: 'Failed to retrive restaurants'
            })
        }
    })
});

router.get('api/resturatnt-details/:restId', function(req,res,next){
   orderService.getResturantDetails(req.params.restId, function(err,details){
       if(err){
           return res.status(500).json({error:'fail to load'})
       }
       res.json(details);
   })
});
module.exports = router;
