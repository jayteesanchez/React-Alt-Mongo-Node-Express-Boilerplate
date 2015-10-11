// requiring/loading all of our dependencies/libaries
var path         = require('path');
var express      = require('express');
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var logger       = require('morgan');
var async        = require('async');
var mongoose     = require('mongoose');
var request      = require('request');
var React        = require('react');
var Router       = require('react-router');
var swig         = require('swig');
var _            = require('underscore');
var http         = require('http');
var apiRoutes    = require( './routes/app');
var routes       = require('./app/routes');

// start running express, and save the configurations for the express
// "app" with the variable `app`.
var app = express();

var config = require('./config');

// load mongoose and connect to a database
mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname + '/views')));
app.use(express.static(__dirname + '/public'));
app.use('/api', apiRoutes);


// DEFINED ROUTES ARE IN HERE >> routes, ie './routes/index'

app.use('/', function(req, res) {
  Router.run(routes, req.path, function(Handler, state) {
    var html = React.renderToString(React.createElement(Handler));
    var page = swig.renderFile('views/index.html', { html: html });
    res.render(page);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
