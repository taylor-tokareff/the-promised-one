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

  .get('/api/v1/bands/:id', async (req, res) => {
    try {
      const band = await Band.findById(req.params.id);
      res.send(band);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })

  .get('/api/v1/bands', async (req, res) => {
    try {
      const bands = await Band.findAll();
      res.send(bands);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  })


  ;
