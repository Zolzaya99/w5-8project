const routes = require('express').Router();


routes.use('/', require('./swagger'))
routes.use('/books', require('./books'));

module.exports = routes;