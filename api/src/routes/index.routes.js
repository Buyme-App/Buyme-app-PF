const express = require('express');
const home = require('./home.routes');
const routerGetAllUsers = require('./getAllUsers.routes');
const login = require('./login.routes');
const routerGetProductDetail = require('../routes/getProductDetail.routes');
const routerCreatePro = require('./createProduct.routes');
const routerUpdatePro = require('./updateProduct.routes');
const routerDeletePro = require('./deleteProduct.routes');
const routerGetProducts = require ('./getAllProducts.routes.js');


const routes = (server) => {
    server.use('/', home);
    server.use('/getAllUsers', routerGetAllUsers);
    server.use('/login', login);
    server.use('/productDetail', routerGetProductDetail );
    server.use('/createProduct', routerCreatePro);
    server.use('/updateProduct', routerUpdatePro);
    server.use('/deleteProduct', routerDeletePro);
    server.use('/getAllProducts',routerGetProducts);

}

module.exports = routes;