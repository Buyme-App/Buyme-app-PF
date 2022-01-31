const express = require('express');
const home = require('./home.routes');
const routerGetAdmin = require('../routes/getDataAmin.routes.js');








const routes = (server) => {

    server.use('/', home);
    server.use('/getDataAdmin', routerGetAdmin);





}











module.exports = routes;