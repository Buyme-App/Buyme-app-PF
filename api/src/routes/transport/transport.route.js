const { Router } = require('express');
const { send } = require('process');
const router = Router();
const transport = require('../../controllers/transport/transport.controller');

const showErrors = require('../../messageConsole');

router.post('/', (req, res)=> {
    try{
        const { clientId, invoiceId, adress, transportedBy, trackingNumber, name, email} = req.body;
        const result = transport(clientId, invoiceId, adress, transportedBy, trackingNumber, name, email)
        if (result == 500) return res.status(400).send('Bad Request');
        else return res.sendStatus(200);
    }catch(e) {
        showErrors('/transport', e);
        return e;
    }
});

module.exports = router;



