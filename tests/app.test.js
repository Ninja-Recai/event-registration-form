const request = require('supertest');
const app = require('../app');
const DB = require('../js/db');
const db = new DB();

let eventData = {};

beforeAll(() => {
  eventData = {
    "firstName": "John",
    "lastName": "Doe",
    "email": "johndoe@gmail.com",
    "eventDate": "2018-09-20T00:00:00.000Z",
  };
});

afterAll(() => {
  db.connect(process.env.DEFAULT_URI).then(() => {
    db.removeEvent(eventData)
    .then(() => {
      db.disconnect();
    });
  });
});

describe('Getting the events list', () => {
  it('returns a 200 status code', (done) => {
    request(app).get('/events/getList').then(response => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  it('returns events list', (done) => {
    request(app).get('/events/getList').then(response => {
      expect(Array.isArray(response.body.response)).toBe(true);
      done();
    });
  });
});

describe('Adding a new event', () => {
  describe('When the data is invalid', () => {
    const invalidEventData = {
      "firstName": "",
      "lastName": "Doe",
      "email": "johndoe.com",
      "eventDate": "2018-09-20",
    };

    it('returns a 422 status code', (done) => {
      request(app)
        .post('/events/addEvent')
        .send(invalidEventData)
        .then(response => {
          expect(response.statusCode).toBe(422);
          done();
        });
    });
  });
  
  describe('When the data is valid', () => {
    it('returns a 201 status code', (done) => {
      request(app)
        .post('/events/addEvent')
        .set('Content-Type', 'application/json')
        .send(eventData)
        .then(response => {
          expect(response.statusCode).toBe(201);
          done();
        });
    });

    describe('When the event already exists in the database', () => {
      it('returns a 409 status code', (done) => {
        request(app)
          .post('/events/addEvent')
          .set('Content-Type', 'application/json')
          .send(eventData)
          .then(response => {
            expect(response.statusCode).toBe(409);
            done();
          });
      });
    });
  });
});
