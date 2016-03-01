var config = {};

config.mongoUri = 'mongodb://localhost:27017/rtr';
config.cookieMaxAge = 30 * 24 * 3600 * 1000;
config.orderxKey = '';
config.address = {
    addr: '288 Coleridge St'
    , city: 'San Francisco'
    , zip: '94110'
    , state: 'CA'
};

config.phone = '415-555-1234';

module.exports = config;
