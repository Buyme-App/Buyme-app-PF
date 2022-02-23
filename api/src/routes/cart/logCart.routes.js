const {Router}= require('express');
const router = Router();
const showErrors = require('../../messageConsole');
const logCartDB=require('../../controllers/cart/logCart.controller');


//recibe un carrito y al loguearse lo mezcla con el que esta sumando cantidades, si no existe lo crea con el que viene
router.put('/', async (req, res)=>{
    try{
        const{items, clientId} = req.body;
        
        if (items===null || clientId===null) return res.status(400).send('Bad Request');
        else {
            const result = await logCartDB(items, clientId);
            if (result!==400) return res.send(result);
            else return res.status(400).send('Bad Request');
        }
    }catch(e) {
        showErrors('/logCart', e);
        return 404;
    }
});

module.exports = router;
//