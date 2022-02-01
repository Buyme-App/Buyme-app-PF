const express = require('express');
const home = require('./home.routes');
const routerGetAdmin = require('../routes/getDataAmin.routes.js');



const routerGetProductDetail = require('../routes/getProductDetail.routes');




const routes = (server) => {

    server.use('/', home);
    server.use('/getDataAdmin', routerGetAdmin);

    
    server.use('/productDetail/', routerGetProductDetail );


}











module.exports = routes;