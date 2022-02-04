const {Router} = require('express');
const getPaginatedProducts = require('../../controllers/product/getPaginatedProducts.controller');
const showErrors = require('../../messageConsole');
const router = Router();

// Ruta para obtener los productos paginados, invoca al controlador getPaginatedProducts()
//  y se le retornan los productos si hay o false de no haber productos.
router.get('/', async (req, res) => {

    try {
        const getProducts = await getPaginatedProducts();
        if(getProducts) return res.status(200).json(getProducts);
        else return res.status(404).send('Error not products found');

    } catch (error) {
        showErrors('/getPaginatedProducts', error)
        res.status(404)
    }
});

module.exports = router;