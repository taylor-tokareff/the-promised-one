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
  ;