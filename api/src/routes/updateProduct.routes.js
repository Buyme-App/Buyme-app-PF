const {Router} = require('express');
const  updateProduct = require('../controllers/updateProduct.controller');
const showErrors = require('../messageConsole');
const router = Router();



router.put('/:id', async (req, res) => {

    const {id} = req.params;

    const {name, price, favorite} = req.body;

    if(name && price && favorite){

        try {
            
            const update = await updateProduct(id, name, parseInt(price), favorite);
            if(update) return res.json({message: 'Updated product', data: update});
            else res.send('Error impossible to modify the product');

        } catch (error) {
            showErrors('/updateProduc/:id', error);
            return 500
        }
    }
    
});


module.exports = router;



