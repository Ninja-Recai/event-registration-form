// Helper methods to allow the application to interact with a MongoDB database.
const config = require('../config.js');
const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  eventDate: Date,
}, {
  collection: config.client.mongodb.deffaultCollection,
});
const Event = mongoose.model('Event', eventSchema);

class DB {
  connect(uri) {
    return new Promise((resolve, reject) => {
      mongoose.connect(uri).then(
        () => {           
          resolve('Connection to the database established');
          console.log('Connection to the database established');
        },
        err => { 
          console.log('An error occured while trying to connect to the database.');
          reject('Cannot connect to the database');
        });
    });
  }

  disconnect() {
    mongoose.disconnect();
  }

  saveEvent(event) {
    const obj = new Event(event);
    return new Promise((resolve, reject) => {
      Event.findOne({ 
        firstName: obj.firstName ? obj.firstName : null,
        lastName: obj.lastName ? obj.lastName : null,
        email: obj.email ? obj.email : null,
        eventDate: obj.eventDate ? obj.eventDate : null,
      }, function (err, event) {
        if (!event) {
          obj.save(function (err, obj) {
            if (err) reject(err);
            resolve(`Congratulations ${obj.firstName}, your event was added to the database succesfully.`);
          });
        } else {
          resolve(`Your event planned on ${obj.eventDate} already exists in the database.`);
        }
      });
    });
  }

  getEvents() {
    const _this = this;
    return new Promise((resolve, reject) => {
      Event.find(function (err, events) {
        if (err) reject(err);
        resolve(events);
      });
    });
  }

  cleanDB() {
    return new Promise((resolve, reject) => {
      Event.remove({}, function (err) {
        resolve('Database was cleaned succesfully');
      });
    });
  }
}

module.exports = DB;