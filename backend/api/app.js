const express = require('express');
const usersRoutes = require('../routes/usersRoute');
const usersMiddleware = require('../middlewares/usersMiddleware');
const favoriteRoutes = require('../routes/favoritesRoute');
const favoriteMiddleware = require('../middlewares/favoriteMiddleware');

const app = express();

app.use(express.json());

app.use(usersRoutes);
app.use(usersMiddleware);

app.use(favoriteRoutes);
app.use(favoriteMiddleware);

module.exports = app;
