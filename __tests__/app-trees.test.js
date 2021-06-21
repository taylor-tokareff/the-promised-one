import pool from '../lib/utils/pool';
import setup from '../data/setup';
import request from 'supertest';
import app from '../lib/app';
import Tree from '../lib/models/Tree';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('creates a tree via POST', async () => {

    const res = await request(app)
      .post('/api/v1/trees')
      .send({
        type: 'maple',
        age: '69',
      });

    expect(res.body).toEqual({
      id: '1',
      type: 'maple',
      age: '69',
    });

  });




});
