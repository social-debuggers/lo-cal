var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

// loads up the user model
var User = require('../models/user');
// get db config file
var config = require('../config/database'); 

module.exports = function (passport) {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts, function (jwt_data, done) {
        User.findOne({ id: jwt_data.id }, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user); //returns the user object with no error
            } else {
                done(null, false);
            }
        });
    }));
};