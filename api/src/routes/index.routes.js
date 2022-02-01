const express = require('express');
const home = require('./home.routes');
const routerGetAdmin = require('../routes/getDataAmin.routes.js'); //Agregue esta linea 
const login = require('./login.routes');    

const routes = (server) => {

    server.use('/', home);  
    server.use('/getDataAdmin', routerGetAdmin); //Agregue esta linea
    server.use('/login', login);

};

module.exports = routes;
