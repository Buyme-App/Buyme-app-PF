const { Router } = require('express');
const mailOrder = require('../../controllers/mail/mailOrder.controller');
const showErrors = require('../../messageConsole');
const router = Router();

router.post('/', async (req, res)=>{
    try {
        const {destino, transporte, guia} = req.body
        
        const result = await mailOrder(destino, transporte, guia);

        console.log('llega al segundo');
        if (result===200) res.status(200).send('Su email ha sido enviado');
        else res.status(500).send('Ha ocurrido un error');

    }catch(e) { 
        showErrors( 'mailOrder', e);
        return 404;
    }
});

module.exports = router; 