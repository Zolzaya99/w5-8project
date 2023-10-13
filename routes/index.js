const routes = require('express').Router();


routes.use('/', require('./swagger.js'))
routes.use('/books', require('./books'));

module.exports = routes;
