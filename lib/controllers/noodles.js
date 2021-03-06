import { Router } from 'express';
import Noodle from '../models/Noodle';

export default Router()
  .post('/api/v1/noodles', async (req, res) => {
    try {
      const noodle = await Noodle.insert(req.body);

      res.send(noodle);
    } catch (err) {
      res.status(401).send(err);
    }
  })

  .get('/api/v1/noodles/:id', async (req, res) => {
    try {
      const noodle = await Noodle.findById(req.params.id);
      res.send(noodle);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .get('/api/v1/noodles', async (req, res) => {
    try {
      const noodles = await Noodle.findAll();
      res.send(noodles);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .delete('/api/v1/noodles/:id', async (req, res) => {
    try {
      const noodle = await Noodle.delete(req.params.id);
      res.send(noodle);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .put('/api/v1/noodles/:id', async (req, res) => {
    try {
      const noodle = await Noodle.update(req.body, req.params.id);
      res.send(noodle);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });
