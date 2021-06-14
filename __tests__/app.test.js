import pool from '../lib/utils/pool';
import setup from '../data/setup';
import request from 'supertest';
import app from '../lib/app';


describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('creates a beer via POST', async () => {

    const res = await request(app)
      .post('/api/v1/beers')
      .send({
        name: 'barney',
        abv: '9%',
        color: 'dark'
      });

    expect(res.body).toEqual({
      id: '1',
      name: 'barney',
      abv: '9%',
      color: 'dark'
    });

  });

  it('creates a noodle via POST', async () => {

    const res = await request(app)
      .post('api/v1/noodle')
      .send({
        name: 'spaghetti',
        region: 'italy',
        rating: '5 stars'
      });

    expect(res.body).toEqual({
      id: '1',
      name: 'spaghetti',
      region: 'italy',
      rating: '5 stars'
    });
  });


});
