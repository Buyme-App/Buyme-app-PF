const {Router} = require('express');
const deleteProduct = require('../controllers/deleteProduct.controller');
const showErrors = require('../messageConsole');
const router = Router();


router.delete('/:id', async (req, res) => {

    const {id} = req.params;

    try {
        
        const deletePro = await deleteProduct(id);
        if(deletePro) return res.send('User removed from the database');
        else return res.send('User not found');

    } catch (error) {
        
        showErrors('/delete/:id', error);
        return 500
    }

});



module.exports = router;