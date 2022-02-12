const express = require('express');
const {verifyUser, roleAdmin, roleSuperv} = require('../middlewares/authJwt.authorization');

const home = require('./home.routes'); //
const login = require('./login/login.routes'); //

// Jose
const routerGetProductDetail = require('./product/getProductDetail.routes'); //

// Victor
const routerGetAllUsers = require('./user/getAllUsers.routes'); //
const routerCreatePro = require('./product/createProduct.routes'); //
const routerUpdatePro = require('./product/updateProduct.routes'); //
const routerStatusPro = require('./product/statusProduct.routes'); //
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
const routerStatusUser = require('./user/statusUser.routes');
const getAllFeatured = require('./featured/getAllFeatured.routes');

const hashPassword=require('./hash/hashPassword.route');
const getAllInvoices = require("./invoice/getAllInvoices.routes");
const getInvoiceDetail = require("./invoice/getInvoiceDetail.routes");

const getPaginatedProducts = require("./product/getPaginatedProducts.routes");
const categories = require('./category/getCategoryAll.routes');


// *****************************************Customer****************************



const createOrder = require("./order/createOrder.routes");
const getAllOrders = require("./order/getAllOrders.routes");
const getOrderDetail = require("./order/getOrderDetail.routes");
const updateOrderSendedStatus = require("./order/updateOrderSendedStatus.routes");
const updateOrderDeliveredStatus = require("./order/updateOrderDeliveredStatus.routes");
const updateOrderCancelledStatus = require("./order/updateOrderCancelledStatus.routes");

const createCustomer=require('./customer/createCustomer.route');  //agregar
const deleteCustomer=require('./customer/deleteCustomer.route');  
const getCustomer= require('./customer/getCustomer.route'); 
const modifyCustomer = require('./customer/modifyCustomer.route'); 
const toggleFav = require('./customer/toggleCustomerFav.route'); 






const routes = (server) => {
    server.use('/', home);
    server.use('/getAllUsers', [ verifyUser, roleSuperv], routerGetAllUsers);
    server.use('/login', login);
    server.use('/productDetail',[verifyUser, roleSuperv], routerGetProductDetail );
    server.use('/createProduct',[verifyUser, roleSuperv], routerCreatePro);
    server.use('/updateProduct',[verifyUser, roleSuperv], routerUpdatePro);
    server.use('/statusProduct',[verifyUser, roleSuperv], routerStatusPro);
    server.use('/getAllProducts',[verifyUser, roleSuperv], routerGetProducts);

    server.use('/createInvoice',[verifyUser, roleAdmin], createInvoice);

    server.use('/createCat',[verifyUser, roleSuperv], postCreateCategory);   //ok
    server.use('/getCat',[verifyUser, roleSuperv], getCategory);  //ok
    server.use('/delCat',[verifyUser, roleSuperv], deleteCategory); //ok
    server.use('/modCat',[verifyUser, roleSuperv], modifyCategory); //ok

    server.use('/createSubCat',[verifyUser, roleSuperv], postCreateSubCategory ); //ok
    server.use('/getSubCat',[verifyUser, roleSuperv], getSubcategory); //ok
    server.use('/delSubCat',[verifyUser, roleSuperv], deleteSubCategory); //ok
    server.use('/modSubCat',[verifyUser, roleSuperv], modifySubCategory); //ok

    server.use('/createUser', routerCreateUser);
    server.use('/getUser',[verifyUser, roleAdmin], routerGetOneUser);
    server.use('/updateUser',[verifyUser, roleAdmin], routerUpdateUser);
    server.use('/statusUser',[verifyUser, roleAdmin], routerStatusUser);

    server.use('/hash', hashPassword);
    server.use("/getAllInvoices",[verifyUser, roleAdmin], getAllInvoices);
    server.use("/getInvoiceDetail",[verifyUser, roleAdmin], getInvoiceDetail);
    server.use("/paginatedProducts",[verifyUser, roleAdmin], getInvoiceDetail);
    server.use('/categories',[verifyUser, roleSuperv], categories);

    server.use('/featured',[verifyUser, roleAdmin], getAllFeatured);



    // *****************************************Customer****************************


    server.use("/createOrder", createOrder);
    server.use("/getAllOrders", getAllOrders);
    server.use("/getOrderDetail", getOrderDetail);
    server.use("/updateOrderSendedStatus", updateOrderSendedStatus);
    server.use("/updateOrderDeliveredStatus", updateOrderDeliveredStatus);
    server.use("/updateOrderCancelledStatus", updateOrderCancelledStatus);


    server.use('/createCustomer', createCustomer);   //Crear Cliente interno 
    server.use('/deleteCustomer', deleteCustomer); //borra datos de clientes;
    server.use('/getCustomer', getCustomer); //Toma Datos de clientes;
    server.use('/modifyCustomer', modifyCustomer); //Modifica Datos de clientes;
    server.use('/toggleFav', toggleFav); //Saca o agrega un prod al favorito del cliente


}

module.exports = routes; // Update