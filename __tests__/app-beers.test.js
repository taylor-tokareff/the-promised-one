import pool from '../lib/utils/pool';
import setup from '../data/setup';
import request from 'supertest';
import app from '../lib/app';
import Beer from '../lib/models/Beer';


describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('creates a beer via POST', async () => {

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

  test('find a beer by id via Get route', async () => {
    const beer = await Beer.insert({
      name: 'barney',
      abv: '9%',
      color: 'dark'
    });
    const res = await request(app).get(`/api/v1/beers/${beer.id}`);

    expect(res.body).toEqual(beer);

  });

  test('finds all orders via GET route', async () => {

    const beer1 = await Beer.insert({
      name: 'barney',
      abv: '9%',
      color: 'dark'
    });
    const beer2 = await Beer.insert({
      name: 'homer',
      abv: '10%',
      color: 'light'
    });
    const beer3 = await Beer.insert({
      name: 'moe',
      abv: '7%',
      color: 'amber'
    });

    const res = await request(app).get('/api/v1/beers');
    expect(res.body).toEqual([beer1, beer2, beer3]);
  });

  test('deletes beer1', async () => {
    const beer1 = await Beer.insert({
      name: 'barney',
      abv: '9%',
      color: 'dark'
    });

    const res = await request(app).delete(`/api/v1/beers/${beer1.id}`);

    expect(res.body).toEqual(beer1);

  });

  test('it updates a beer', async () => {
    const beer1 = await Beer.insert({
      name: 'barney',
      abv: '9%',
      color: 'dark'
    });
    const beer2 = await Beer.insert({
      name: 'homer',
      abv: '10%',
      color: 'light'
    });
    const res = await request(app).put(`/api/v1/beers/${beer1.id}`).send(beer2);
    expect(res.body).toEqual({
      id: '1',
      name: 'homer',
      abv: '10%',
      color: 'light'
    });
  });





});
