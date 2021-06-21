import pool from '../lib/utils/pool';
import setup from '../data/setup';
import request from 'supertest';
import app from '../lib/app';
import Noodle from '../lib/models/Noodle';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('creates a noodle via POST', async () => {

    const res = await request(app)
      .post('/api/v1/noodles')
      .send({
        name: 'spaghetti',
        region: 'italy',
      });

    expect(res.body).toEqual({
      id: '1',
      name: 'spaghetti',
      region: 'italy',
    });

  });









});