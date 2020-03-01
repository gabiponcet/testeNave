const express = require('express');
const PostController = require('./controllers/PostController');
const routes = express.Router();

routes.post('/posts', PostController.store);

module.exports = routes;