const express = require('express');
const home = require('./home.routes');
const routerGetAdmin = require('../routes/getDataAmin.routes.js');
const login = require('./login.routes');

const routes = (server) => {
    server.use('/', home);
    server.use('/getDataAdmin', routerGetAdmin);
    server.use('/login', login);
}

module.exports = routes;