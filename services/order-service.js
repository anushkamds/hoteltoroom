var orderx = require('orderin-api');
var config = require('../config');

var api = new orderx.APIS(config.orderxKey, orderx.TEST);

export.getResturant = function (next) {
    var hotel = config.address;
    var args = {
        datetime: 'ASAP',
        addr: hotel.addr,
        city: hotel.city,
        zip: hotel.zip
    };
    api.deliver_list(args, function (err, resturants) {
        if (err) {
            console.log(err);
            return next(err);
        }
        resturants = resturants.filter(function (rest) {
            return rest.is_delivering;
        })

        next(null, resturants);
    });
}
