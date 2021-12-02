const express = require('express');
const usersRouter = require('../routes/usersRoute');
const usersMiddleware = require('../middlewares/usersMiddleware');

const app = express();

app.use(express.json());

app.use(usersRouter);
app.use(usersMiddleware);

module.exports = app;
