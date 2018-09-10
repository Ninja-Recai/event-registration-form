const request = require('request');
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
const DB = require('../js/db.js');

const db = new DB();

const today = new Date();
const dd = today.getDate();
const mm = today.getMonth() + 1;
const yy = today.getFullYear();

router.post('/addEvent', [
  body('firstName', 'Please specify your first name.')
    .not().isEmpty()
    .trim()
    .escape(),
  body('lastName', 'Please specify your last name.')
    .not().isEmpty()
    .trim()
    .escape(),
  body('email', 'Please specify a valid e-mail address.')
    .not().isEmpty()
    .isEmail()
    .normalizeEmail(),
  body('eventDate', 'Please specify a valid event date.')
    .not().isEmpty()
    .trim()
    .escape(),
  sanitizeBody('firstName')
    .trim()
    .escape(),
  sanitizeBody('lastName')
    .trim()
    .escape(),
  sanitizeBody('email')
    .normalizeEmail(),
  sanitizeBody('eventDate').toDate(),
], (req, res) => { 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ 
      error: true, 
      message: errors.array().map(error => error.msg),
    });
  }
    
  db.connect(process.env.DEFAULT_URI).then(() => {
    db.saveEvent(req.body)
      .then(response => {
        if (response.ok !== false) {
          return res.status(201).json(response);
        } else {
          return res.status(409).json({ error: true, message: response.message });
        }
        db.disconnect();
      });
  },
  err => {
    res.status(500).json({ error: true, message: err });
  });
});

router.get('/getList', function (req, res, next) {
  db.connect(process.env.DEFAULT_URI).then(() => {
    db.getEvents()
    .then(response => {
      res.json({ response });
      db.disconnect();
    });
  },
  err => {
    res.status(500).json({ error: true, message: err });
  });
});

module.exports = router;