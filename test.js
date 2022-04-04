const app = require('./index.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;
const use = chai.use;
const request = require('supertest');
const mocha = require('mocha');

// Test for the following:
// 1. GET / gets a 200 response
// 2. GET /participants gets  an array of participants
// 3. GET /participants/by_id/:id gets a participant by id
// 4. GET /participants/by_nom/:nom   gets a participant by nom
// 5. GET /participants/by_prenom/:prenom  gets a participant by prenom

describe('GET /', () => {
  it('should return a 200 response', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
describe('GET /participants', () => {
  it('should return an array of participants', (done) => {
    chai.request(app)
      .get('/participants')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});
describe('GET /participants/by_id/:id', () => {
  it('should return a participant by id', (done) => {
    chai.request(app)
      .get('/participants/by_id/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
describe('GET /participants/by_nom/:nom', () => {
  it('should return a participant by nom', (done) => {
    chai.request(app)
      .get('/participants/by_nom/nom')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});
describe('GET /participants/by_prenom/:prenom', () => {
  it('should return a participant by prenom', (done) => {
    chai.request(app)
      .get('/participants/by_prenom/prenom')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});
