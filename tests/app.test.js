
const request = require('supertest');
const app = require('../app');
const db = require('../js/db');
const DB = new db();
const config = require('../config');

let eventData = {};

beforeAll(() => {
  DB.connect(config.client.mongodb.defaultUri);
  eventData = {
    "firstName": "John",
    "lastName": "Doe",
    "email": "johndoe@gmail.com",
    "eventDate": "2018-09-20",
  };
});

describe('Getting the events list', () => {
  it('returns a 200 status code', async () => {
    const response = await request(app).get('/events/getList');
    expect(response.statusCode).toBe(200);
  });

  it('returns events list', async () => {
    const response = await request(app).get('/events/getList');
    expect(Array.isArray(response.body.response)).toBe(true);
  });
});

describe('Adding a new event', () => {
  describe('When the data is valid', () => {
    it('returns a 201 status code', async () => {
      const response = await request(app)
        .post('/events/addEvent')
        .set('Content-Type', 'application/json')
        .send(eventData);
      expect(response.statusCode).toBe(201);
    });

    describe('When the event already exists in the database', () => {
      it('returns a 409 error', async () => {
        const response = await request(app)
          .post('/events/addEvent')
          .set('Content-Type', 'application/json')
          .send(eventData);
        expect(response.statusCode).toBe(409);
      });
    });
  });

  describe('When the data is invalid', () => {
    const invalidEventData = {
      "firstName": "",
      "lastName": "Doe",
      "email": "johndoe.com",
      "eventDate": "2018-09-20",
    };

    it('returns a 422 status code', async () => {
      const response = await request(app)
        .post('/events/addEvent')
        .set('Content-Type', 'application/json')
        .send(invalidEventData);
      expect(response.statusCode).toBe(422);
    });
  });

});

afterAll(() => {
  DB.removeEvent(eventData);
  DB.disconnect();
});