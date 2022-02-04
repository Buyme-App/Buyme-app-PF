const express = require('express');

const home = require('./home.routes'); //
const login = require('./login/login.routes'); //

// Jose
const routerGetProductDetail = require('./product/getProductDetail.routes'); //

// Victor
const routerGetAllUsers = require('./user/getAllUsers.routes'); //
const routerCreatePro = require('./product/createProduct.routes'); //
const routerUpdatePro = require('./product/updateProduct.routes'); //
const routerDeletePro = require('./product/deleteProduct.routes'); //
const routerGetProducts = require ('./product/getAllProducts.routes.js'); //

//Jose
const postCreateCategory=require('./category/postCreateCategory.route'); //
const getCategory=require('./category/getCategory.route'); //
const deleteCategory=require('./category/deleteCategory.routes'); //
const modifyCategory=require('./category/modifyCategory.routes'); //
const postCreateSubCategory=require('./subcategory/postCreateSubCategory.route'); //
const getSubcategory=require('./subcategory/getSubCategory.route'); //
const deleteSubCategory=require('./subcategory/deleteSubCategory.routes'); //
const modifySubCategory=require('./subcategory/modifySubCategory.routes'); //

//Nico
const createInvoice = require('./invoice/createInvoice.routes') //

const routerCreateUser = require('./user/createUser.routes');
const routerGetOneUser = require('./user/getOneUser.routes');
const routerUpdateUser = require('./user/updateUser.routes');
const routerDeleteUser = require('./user/deleteUser.routes');

const hashPassword=require('./hash/hashPassword.route');
const getAllInvoices = require("./invoice/getAllInvoices.routes");
const getInvoiceDetail = require("./invoice/getInvoiceDetail.routes");

const getPaginatedProducts = require("./product/getPaginatedProducts.routes");


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

    server.use('/createUser', routerCreateUser);
    server.use('/getUser', routerGetOneUser);
    server.use('/updateUser', routerUpdateUser);
    server.use('/deleteUser', routerDeleteUser);

    server.use('/hash', hashPassword);
    server.use("/getAllInvoices", getAllInvoices);
    server.use("/getInvoiceDetail", getInvoiceDetail);
    server.use("/paginatedProducts", getInvoiceDetail);
}

module.exports = routes;
