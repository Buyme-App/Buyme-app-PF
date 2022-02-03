const {Router}= require('express');
const router = Router();
const getProductDetail = require ('../../controllers/product/getProductDetail.controller.js')

router.get('/productDetail/:idProduct/:nameProduct', async (req, res) => {
    getProductDetail(req)  //por query
})
               
module.exports=router;
// Fixed

