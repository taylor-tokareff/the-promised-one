import { Router } from 'express';
import Beer from '../models/Beer';

export default Router()
  .post('/api/v1/beers', async (req, res) => {
    try {
      const beer = await Beer.insert(req.body);
      console.log(req.body);
      res.send(beer);
    } catch (err) {
      res.status(401).send(err);
    }
  });

