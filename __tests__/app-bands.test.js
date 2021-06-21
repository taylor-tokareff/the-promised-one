import pool from '../lib/utils/pool';
import setup from '../data/setup';
import request from 'supertest';
import app from '../lib/app';
import Band from '../lib/models/Band';

describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('creates a band via POST', async () => {

    const res = await request(app)
      .post('/api/v1/bands')
      .send({
        name: 'misfits',
        home: 'new jersey',
      });

    expect(res.body).toEqual({
      id: '1',
      name: 'misfits',
      home: 'new jersey',
    });

  });

  test('find a band by id via Get route', async () => {
    const band = await Band.insert({
      name: 'misfits',
      home: 'new jersey'
    });
    const res = await request(app).get(`/api/v1/bands/${band.id}`);

    expect(res.body).toEqual(band);

  });






});
