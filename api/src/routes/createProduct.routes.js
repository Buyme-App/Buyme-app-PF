const {Router} = require('express');
const createProduct = require('../controllers/createProduct.controller');
const showErrors = require('../messageConsole');
const router = Router();

// Ruta /createProduct que envía los datos recibidos por body al controlador createProduct
// y responde con la data del producto creado o un error 500.
router.post('/', async (req, res) => {

    const {name, price, favorite} = req.body;

    if(name && price && favorite){
        
        try {
            const create = await createProduct(name, parseInt(price), favorite);
            res.json({message:'Product created', data: create});
        } catch (error) {
            showErrors('post/createProduct', error);
            return 500
        }   
    }
})