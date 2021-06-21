import { Router } from 'express';
import Biscuit from '../models/Biscuit';

export default Router()
  .post('/api/v1/biscuits', async (req, res) => {
    try {
      const biscuit = await Biscuit.insert(req.body);

      res.send(biscuit);
    } catch (err) {
      res.status(401).send(err);
    }
  })

  .get('/api/v1/biscuits/:id', async (req, res) => {
    try {
      const biscuit = await Biscuit.findById(req.params.id);
      res.send(biscuit);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .get('/api/v1/biscuits', async (req, res) => {
    try {
      const biscuits = await Biscuit.findAll();
      res.send(biscuits);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .delete('/api/v1/biscuits/:id', async (req, res) => {
    try {
      const biscuit = await Biscuit.delete(req.params.id);
      res.send(biscuit);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  ;