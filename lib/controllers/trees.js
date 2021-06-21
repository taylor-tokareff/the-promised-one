import { Router } from 'express';
import Tree from '../models/Tree';

export default Router()
  .post('/api/v1/trees', async (req, res) => {
    try {
      const tree = await Tree.insert(req.body);

      res.send(tree);
    } catch (err) {
      res.status(401).send(err);
    }
  })

  .get('/api/v1/trees/:id', async (req, res) => {
    try {
      const tree = await Tree.findById(req.params.id);
      res.send(tree);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .get('/api/v1/trees', async (req, res) => {
    try {
      const trees = await Tree.findAll();
      res.send(trees);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .delete('/api/v1/trees/:id', async (req, res) => {
    try {
      const tree = await Tree.delete(req.params.id);
      res.send(tree);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })
  .put('/api/v1/trees/:id', async (req, res) => {
    try {
      const tree = await Tree.update(req.body, req.params.id);
      res.send(tree);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });

