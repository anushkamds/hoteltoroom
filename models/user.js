var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userService = require('../services/user-service');

var usersSchema = new Schema({
    firstName: {type: String, require: 'Please enter first name'},
    lastName: {type: String, require: 'Please enter last name'},
    roomNumber: {type: Number, require: 'Please enter number', min:['100', 'Not valid']},
    email: {type: String, require: 'Please enter email'},
    password: {type: String, require: 'Please enter password'},
    created: {type: Date,default: Date.now}
})

usersSchema.path('email').validate(function(value,next){
    userService.findUser(value, function(err, user){
        if(err){
            console.log(err);
            return next(false);
        }
        next(!user);
    })
},'This email is already taken')

var User = mongoose.model('User',usersSchema);

module.exports = {
    User: User
}
