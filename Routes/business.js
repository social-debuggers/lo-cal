var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Business = require('../models/Business');
var passport = require('passport');
var jwt = require('jsonwebtoken');

/* GET ALL Business */
router.get('/', function (req, res, next) {
    Business.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });

});

/* GET SINGLE BUSINESS BY ID */
router.get('/:id', function (req, res, next) {
    Business.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* SAVE Business */
router.post('/', function (req, res, next) {
    Business.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* UPDATE Business */
router.put('/:id', function (req, res, next) {
    Business.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE Business */
router.delete('/:id', function (req, res, next) {
    Business.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// MIDDLEWARE AUTH   --only allows users logged in to add new business
router.post('/', passport.authenticate('jwt', { session: false }), function (req, res) {
    var token = getToken(req.headers);
    if (token) {
        console.log(req.body);
        var newBusiness = new Business({
            title: req.body.title,
            address: req.body.address,
            story: req.body.story
        });
        ///** TODO: BUILD OUT HTML FORM */
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

// // MIDDLEWARE:  Gets list of business's for any given user
// router.get('/', passport.authenticate('jwt', { session: false }), function (req, res) {
//     var token = getToken(req.headers);
//     if (token) {
//         Business.find(function (err, business) {
//             if (err) return next(err);
//             res.json(business);
//         });
//     } else {
//         return res.status(403).send({ success: false, msg: 'Unauthorized User.' });
//     }
// });

// //parses authorization token form request headers
// getToken = function (headers) {
//     if (headers && headers.authorization) {
//         var parted = headers.authorization.split('');
//         if (parted.length === 2) {
//             return parted[1];
//         } else {
//             return null;
//         }
//     } else {
//         return null;
//     }
// };

module.exports = router;
