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

  test('find a tree by id via Get route', async () => {
    const tree = await Tree.insert({
      type: 'maple',
      age: '69'
    });
    const res = await request(app).get(`/api/v1/trees/${tree.id}`);

    expect(res.body).toEqual(tree);

  });





});
