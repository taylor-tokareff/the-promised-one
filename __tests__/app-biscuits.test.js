import pool from '../lib/utils/pool';
import setup from '../data/setup';
import request from 'supertest';
import app from '../lib/app';
import Biscuit from '../lib/models/Biscuit';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('creates a biscuit via POST', async () => {

    const res = await request(app)
      .post('/api/v1/biscuits')
      .send({
        flour: 'white',
        sauce: 'butter',
      });

    expect(res.body).toEqual({
      id: '1',
      flour: 'white',
      sauce: 'butter',
    });

  });

  test('find a biscuit by id via Get route', async () => {
    const biscuit = await Biscuit.insert({
      flour: 'white',
      sauce: 'butter'
    });
    const res = await request(app).get(`/api/v1/biscuits/${biscuit.id}`);

    expect(res.body).toEqual(biscuit);

  });


});