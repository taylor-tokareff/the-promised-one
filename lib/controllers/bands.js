import { Router } from 'express';
import Band from '../models/Band';

export default Router()
  .post('/api/v1/bands', async (req, res) => {
    try {
      const band = await Band.insert(req.body);

      res.send(band);
    } catch (err) {
      res.status(401).send(err);
    }
  })



  ;
