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








  ;

