const {Router} = require('express');
const statusProduct = require('../../controllers/product/statusProduct.controller');
const showErrors = require('../../messageConsole');
const router = Router();

// Ruta para eliminar un producto, invoca al controlador deleteProduct()
//  y se le retorna true si fue eliminado o false si no se eliminó.
router.put('/', async (req, res) => {

    
    const {id, status} = req.body;

    if(id && status){

        try {
        
            const statusPro = await statusProduct(id, status);
            if(statusPro) return res.send('Updated status');
            else return res.send('Product not found');
    
        } catch (error) {
            
            showErrors('/statusProduct', error);
            return 500
        }

    }else{
        return res.send('Status and Id are required').status(500);
    }

});



module.exports = router;