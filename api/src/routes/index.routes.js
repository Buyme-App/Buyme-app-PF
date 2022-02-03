const express = require('express');

const home = require('./home.routes'); //
const login = require('./login.routes'); //

// Jose
const routerGetProductDetail = require('../routes/getProductDetail.routes'); //

// Victor
const routerGetAllUsers = require('./getAllUsers.routes'); //
const routerCreatePro = require('./createProduct.routes'); //
const routerUpdatePro = require('./updateProduct.routes'); //
const routerDeletePro = require('./deleteProduct.routes'); //
const routerGetProducts = require ('./getAllProducts.routes.js'); //


//Jose
const postCreateCategory=require('./postCreateCategory.route'); //
const getCategory=require('./getCategory.route'); //
const deleteCategory=require('./deleteCategory.routes'); //
const modifyCategory=require('./modifyCategory.routes'); //
const postCreateSubCategory=require('./postCreateSubCategory.route'); //
const getSubcategory=require('./getSubCategory.route'); //
const deleteSubCategory=require('./deleteSubCategory.routes'); //
const modifySubCategory=require('./modifySubCategory.routes'); //

//Nico
const createInvoice = require('./createInvoice.routes') //


const routes = (server) => {
    server.use('/', home);
    server.use('/getAllUsers', routerGetAllUsers);
    server.use('/login', login);
    server.use('/productDetail', routerGetProductDetail );
    server.use('/createProduct', routerCreatePro);
    server.use('/updateProduct', routerUpdatePro);
    server.use('/deleteProduct', routerDeletePro);
    server.use('/getAllProducts',routerGetProducts);

    server.use('/createInvoice',createInvoice);

    server.use('/createCat', postCreateCategory);   //ok
    server.use('/getCat', getCategory);  //ok
    server.use('/delCat', deleteCategory); //ok
    server.use('/modCat', modifyCategory); //ok

    server.use('/createSubCat', postCreateSubCategory ); //ok
    server.use('/getSubCat', getSubcategory); //ok
    server.use('/delSubCat', deleteSubCategory); //ok
    server.use('/modSubCat', modifySubCategory); //ok




}

module.exports = routes;
