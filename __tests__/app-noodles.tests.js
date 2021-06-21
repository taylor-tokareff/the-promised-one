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

  test('find a noodle by id via Get route', async () => {
    const noodle = await Noodle.insert({
      name: 'spaghetti',
      region: 'italy'
    });
    const res = await request(app).get(`/api/v1/noodles/${noodle.id}`);

    expect(res.body).toEqual(noodle);

  });


  test('finds all noodles via GET route', async () => {

    const noodle1 = await Noodle.insert({
      name: 'spaghetti',
      region: 'italy'
    });
    const noodle2 = await Noodle.insert({
      name: 'pad thai',
      region: 'thailand'
    });
    const noodle3 = await Noodle.insert({
      name: 'soba',
      region: 'japan'
    });

    const res = await request(app).get('/api/v1/noodles');
    expect(res.body).toEqual([noodle1, noodle2, noodle3]);
  });







});