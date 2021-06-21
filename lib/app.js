import express from 'express';
import beersController from './controllers/beers.js';
import treesController from './controllers/trees.js';
import biscuitsController from './controllers/biscuits.js';
import noodlesController from './controllers/noodles.js';
import bandsController from './controllers/bands.js';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';

// const express = require('express');
// import orderController from './controllers/orders.js'

const app = express();

app.use(express.json());

app.use(beersController);
app.use(treesController);
app.use(biscuitsController);
app.use(noodlesController);
app.use(bandsController);



app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
