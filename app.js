// The entry point
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const logger = require('morgan');
const event = require('./routes/event-registration.js');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.locals.pretty = true;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/events', event);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  //intercepts OPTIONS method
  if ('OPTIONS' === req.method) {
    res.send(200);
  }
  else {
    next();
  }
});

app.use(function (req, res, next) {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    })
  })
};

process.on('warning', e => console.warn(e.stack));
module.exports = app;