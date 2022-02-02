const {Router}= require('express');
const router = Router();
const getProductDetail = require ('../controllers/getProductDetail.controller')

router.get('/productDetail/:idProduct/:nameProduct', async (req, res) => {
    getProductDetail(req)  //por query
})
               
module.exports=router;
// Fixed

