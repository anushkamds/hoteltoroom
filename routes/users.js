var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/create', function (req, res, next) {
    var vm = {
        title: 'Create an account'
    };
    res.render('users/create', vm);
});

router.post('/create', function (req, res, next) {
    var sometingWrong = false;
    if (sometingWrong) {
        var vm = {
            title: 'Create an account',
            input: req.body,
            error: 'Something went wrong'
        };
        delete vm.input.password;
        return res.render('users/create', vm);
    }
    res.redirect('/orders');
});

module.exports = router;
