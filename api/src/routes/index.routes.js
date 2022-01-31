const express = require('express');
const home = require('./home.routes');

const login = require('./login.routes');    







const routes = (server) => {

    server.use('/', home);
    
    server.use('/login', login);




};











module.exports = routes;