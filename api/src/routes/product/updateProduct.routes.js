const {Router} = require('express');
const  updateProduct = require('../../controllers/product/updateProduct.controller');
const showErrors = require('../../messageConsole');
const router = Router();



// Ruta para actualizar un producto, invoca al controlador updateProduct()
//  y se le retorna true si fue actualizado o false si no se actualizo.

router.put('/:id', async (req, res) => {

    const {id} = req.params;
    
    const {name, price,favorite,maker,model,
            description,SKU,offerPrice,stock,
            inventary,featured,paused,} = req.body;

    if(name){

        try {
            
            const update = await updateProduct( id, name, price,favorite,maker,model,
                                                description,SKU,offerPrice,stock,inventary,
                                                featured,paused,);


            if(update) return res.json({message: 'Updated product', data: update});
            else res.send('Error impossible to modify the product');

        } catch (error) {
            showErrors('/updateProduc/:id', error);
            return 500
        }
    }else{
        return res.status(500).send('Name is required');
    }
    
});


module.exports = router;



