var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/database');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require("../models/user");
var Business = require("../models/business");

router.get('/', function (req, res, next) {
    res.send('Express RESTful App');
});

router.get('/local', function(req, res, next) {
    res.render('local');
})

router.post('/signup', function (req, res) {
    if (!req.body.username || !req.body.password) {
        res.json({ success: false, msg: 'Please pass username and password.' });
    } else {
        var newUser = new User({
            username: req.body.username,
            password: req.body.password
        });
        // save the user
        newUser.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'Username already exists.' });
            }
            res.json({ success: true, msg: 'Successful created new user.' });
        });
    }
});

router.post('/signin', function (req, res) {
    User.findOne({
        username: req.body.username
    }, function (err, user) {
        if (err) throw err;
        if (!user) {
            res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
        } else {
            // checks if the password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // if user is found and password is right then create a token
                    var token = jwt.sign(user.toJSON(), config.secret);
                    // return the information including token as JSON
                    res.json({ success: true, token: 'JWT ' + token });
                } else {
                    res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
                }
            });
        }
    });
});

//only allows users logged in to add new business
router.post('/business', passport.authenticate('jwt', { session: false }), function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        console.log(req.body);
        var newBusiness = new Business({
            title: req.body.title,
            address: req.body.address,
            story: req.body.story
        });

        newBusiness.save(function (err) {
            if (err) {
                return res.json({ success: false, msg: 'Save business model failed.' });
            }
            res.json({ success: true, msg: 'Successfully created new busine$$.' });
        });
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    }
});

//Gets list of business's for any given user
router.get('/business', passport.authenticate('jwt', { session: false }), function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        Business.find(function (err, business) {
            if (err) return next(err);
            res.json(business);
        });
    } else {
        return res.status(403).send({ success: false, msg: 'Unauthorized User.' });
    }
});

//parses authorization token form request headers
getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};

module.exports = router;