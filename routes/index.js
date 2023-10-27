const routes = require('express').Router();


// routes.use('/', require('./swagger.js'))
routes.use('/books', require('./books'));
routes.use('/authors', require('./authors'));

module.exports = routes;
