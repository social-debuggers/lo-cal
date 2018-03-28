var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Business = require('../models/business');

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

module.exports = router;