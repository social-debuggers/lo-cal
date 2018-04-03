const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');

const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config/database');
const auth = require('./routes/local');
const business = require ('./routes/business');
const app = express();

// create a connection to mongoDB
mongoose.connect('mongodb://localhost:27017/lo-cal')
mongoose.Promise = require('bluebird');
mongoose.connect(config.database, {
    promiseLibrary: require('bluebird')
})
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));


app.use(logger('dev'));
// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
// Angular DIST output folder.. looks for path of dist. 
app.use(express.static(path.join(__dirname, 'dist')));
app.use(passport.initialize());
app.use('/business', business);
app.use('/', auth);

///////// Sends all other requests to the Angular app
app.get('*', function (req, res, next) {
    res.sendFile('dist/index.html', { root: __dirname });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  //  res.locals.currentUser = req.user;
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// ALLOS CORS in express!! 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({error:err});
});

module.exports = app;