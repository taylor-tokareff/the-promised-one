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
  });
