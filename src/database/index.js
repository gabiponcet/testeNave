const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

const connection = new Sequelize(dbConfig);

Post.init(connection);
Comment.init(connection);

Post.associate(connection.models);
Comment.associate(connection.models);
module.exports = connection;