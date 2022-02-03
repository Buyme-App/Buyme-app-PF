const {Router} = require('express');
const getAllProducts = require('../../controllers/product/getAllProducts.controller');
const showErrors = require('../../messageConsole');
const router = Router();

// Ruta para obtener todos los productos, invoca al controlador getAllProducts()
//  y se le retornan los productos si hay o false de no haber productos.
router.get('/', async (req, res) => {

    try {
        const getProducts = await getAllProducts();
        if(getProducts) return res.status(200).json(getProducts);
        else return res.status(404).send('Error not products found');

    } catch (error) {
        showErrors('/getAllProducts', error)
        res.status(404)
    }
});



module.exports = router;