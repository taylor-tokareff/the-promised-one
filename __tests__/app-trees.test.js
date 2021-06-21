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

  test('finds all trees via GET route', async () => {

    const tree1 = await Tree.insert({
      type: 'maple',
      age: '69'
    });
    const tree2 = await Tree.insert({
      type: 'pine',
      age: '420'
    });
    const tree3 = await Tree.insert({
      type: 'cherry',
      age: '666'
    });

    const res = await request(app).get('/api/v1/trees');
    expect(res.body).toEqual([tree1, tree2, tree3]);
  });

  test('deletes tree1', async () => {
    const tree1 = await Tree.insert({
      type: 'maple',
      age: '69',
    });

    const res = await request(app).delete(`/api/v1/trees/${tree1.id}`);

    expect(res.body).toEqual(tree1);

  });

  test('it updates a tree', async () => {
    const tree1 = await Tree.insert({
      type: 'maple',
      age: '69'
    });
    const tree2 = await Tree.insert({
      type: 'pine',
      age: '420'
    });
    const res = await request(app).put(`/api/v1/trees/${tree1.id}`).send(tree2);
    expect(res.body).toEqual({
      id: '1',
      type: 'pine',
      age: '420'
    });


  });

});

