const express = require('express');
const PeopleController = require('./src/controllers/PeopleController');

const routes = express.Router();

routes.get('/', PeopleController.index);

module.exports = routes;