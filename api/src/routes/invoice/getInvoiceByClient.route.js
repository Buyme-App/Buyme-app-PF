const {Router} = require('express');
const showErrors = require('../../messageConsole');
const router = Router();
const getInvoiceByClientDB=require('../../controllers/invoice/getInvoiceByClient.controller');

router.get('/:idClient', async(req,res)=>{
    try{
        let {idClient } = req.params;
        idClient=parseInt(idClient);
        if (idClient<=0) return res.status(400).send('Bad Request');
        const result= await getInvoiceByClientDB(idClient);
        if(result!==404) return res.send(result);
        else return res.status(404).send('Invoices Not Founded');
    }catch(e) {
        showErrors('/getInvoiceByClient', e);
        return 404;
    }
});

module.exports = router;

//modificado jose 23/02
