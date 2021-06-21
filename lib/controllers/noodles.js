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








  ;
