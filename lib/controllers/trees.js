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







  ;
