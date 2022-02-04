const {Router} = require('express');
const deleteProduct = require('../../controllers/product/deleteProduct.controller');
const showErrors = require('../../messageConsole');
const router = Router();

// Ruta para eliminar un producto, invoca al controlador deleteProduct()
//  y se le retorna true si fue eliminado o false si no se eliminó.
router.delete('/:id', async (req, res) => {

    const {id} = req.params;

    try {
        
        const deletePro = await deleteProduct(id);
        if(deletePro) return res.send('Product removed from the database');
        else return res.send('Product not found');

    } catch (error) {
        
        showErrors('/deleteProduct/:id', error);
        return 500
    }

});



module.exports = router;