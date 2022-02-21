const { Router } = require("express");
const router = Router();
const showErrors = require("../../messageConsole");
const loginCostumer = require('../../controllers/loginCostumer/loginCostumer.controller');



router.post('/', async (req, res) => {
    // console.log('LOGINNNNNN<<<<<<  ', req.body)

    if(req.body){

        try {

            const result = await loginCostumer(req);
            // console.log('RUTACOSTUMER RESULT<<<<<<  ', result)
            if(result !== null) return res.status(200).json({login: true, result});
            else return res.status(403).json({login: false})
        
        } catch (error) {
            showErrors("/createCustomer", error);
            return 404;
        }
    
    }else{
        return res.status(500).send('Invalid parameters');
    }

});


module.exports = router;
