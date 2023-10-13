const routes = require('express').Router();


routes.use('/books', require('./books'));
routes.use('/', require('./swagger'))

module.exports = routes;

