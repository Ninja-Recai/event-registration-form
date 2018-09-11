// Helper methods to allow the application to interact with a MongoDB database.
const mongoose = require('mongoose');
const eventSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  eventDate: Date,
}, {
  collection: process.env.DEFAULT_COLLECTION,
});
const Event = mongoose.model('Event', eventSchema);
const options = { 
  useNewUrlParser: true,
  auth: {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  }
 };
class DB {
  
  connect(uri) {
    return new Promise((resolve, reject) => {
      mongoose.connect(uri, options).then(
        () => {           
          resolve('Connection to the database established');
          console.log('Connection to the database established');
        },
        err => {
          console.log('An error occured while trying to connect to the database.', err);
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
        firstName: obj.firstName || null,
        lastName: obj.lastName || null,
        email: obj.email || null,
        eventDate: obj.eventDate || null,
      }, function (err, event) {
        if (!event) {
          obj.save(function (err, obj) {
            if (err) reject(err);
            resolve({ ok: true, message: `Congratulations ${obj.firstName}, your event was added to the database succesfully.` });
          });
        } else {
          resolve({ ok: false, message: `Your event planned on ${obj.eventDate} already exists in the database. Please select another date.` });
        }
      });
    });
  }

  removeEvent(event) {
    return new Promise((resolve, reject) => {
      Event.deleteOne({email: event.email, eventDate: event.eventDate}, function (err) {
        if (err) reject(err);
        resolve(`Event planned on ${event.eventDate} was removed from the database successfully.`);
      });
    });
  }

  getEvents() {
    return new Promise((resolve, reject) => {
      Event.find(function (err, events) {
        if (err) reject(err);
        resolve(events);
      });
    });
  }

  cleanDB() {
    return new Promise((resolve) => {
      Event.remove({}, function () {
        resolve('Database was cleaned succesfully');
      });
    });
  }
}

module.exports = DB;
