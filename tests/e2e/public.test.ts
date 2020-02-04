import chai from 'chai';
import chaiHttp from 'chai-http';

import 'mocha';
import app from '../../src/index';

chai.use(chaiHttp);

describe('Public API', () => {
  
  it('should return empty scores array on initial call to get scores', async () => {
    const res = await chai.request(app).get('/api/getScores');
    chai.expect(res.body).to.eql([]);
  });

  it('should return the correct points value for a word', async () => {
    const res = await chai.request(app).post('/api/submitEntry').send({"name": "josh", "word": "racecar"});
    chai.expect(res.body).to.eql(7);
  });

  it('should return bad-request if name is badly formatted on submission', async () => {
    const res = await chai.request(app).post('/api/submitEntry').send({"name": "j", "word": "racecar"});
    chai.expect(res.status).to.eql(400);
  });

  it('should return bad-request if the word is badly formatted on submission', async () => {
    const res = await chai.request(app).post('/api/submitEntry').send({"name": "j", "word": "rac   ecar"});
    chai.expect(res.status).to.eql(400);
  });

  it('should allow for multiple submissions by the same user', async () => {
    await chai.request(app).post('/api/submitEntry').send({"name": "josh", "word": "racecar"});
    await chai.request(app).post('/api/submitEntry').send({"name": "josh", "word": "racecar"});
    await chai.request(app).post('/api/submitEntry').send({"name": "josh", "word": "racecar"});
    const res = await chai.request(app).post('/api/submitEntry').send({"name": "josh", "word": "racecar"});
    chai.expect(res.status).to.eql(200);
  });

  it('should only persist a finite number of scores', async () => {
    await chai.request(app).post('/api/submitEntry').send({"name": "bob", "word": "oooooooooo"});
    const res = await chai.request(app).get('/api/getScores');
    chai.expect(res.body).to.be.an('array').of.length(5).which.deep.includes({name: "bob", points: 10});
  });

  it('should remain ordered descending', async () => {
    await chai.request(app).post('/api/submitEntry').send({"name": "bob", "word": "ooooooooooo"});
    const res = await chai.request(app).post('/api/submitEntry').send({"name": "bob", "word": "ooooooo"});
    for (var i = res.body.length - 2; i >= 0; i--) {
      chai.expect(res.body[i].points).to.be.greaterThan(res.body[i+1].points);
    }
  });
});