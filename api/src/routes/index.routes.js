const express = require('express');
const home = require('./home.routes');



const routes = (server) => {

    server.use('/', home);
}











module.exports = routes;