const {Router}= require('express');
const router = Router();
const getProductDetail = require ('../controllers/getProductDetail.controller')


router.get('/productDetail/:idProduct/:nameProduct', getProductDetail());                            //por query


module.exports=router;