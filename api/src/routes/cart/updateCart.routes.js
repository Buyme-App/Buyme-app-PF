const { Router } = require("express");
const updateCartDB= require('../../controllers/cart/updateCart.controller');
const router = Router();
const showErrors = require("../../messageConsole");


// 
router.put("/", async (req, res) => {
  try {
    let { clientId, items } = req.body;
    if (clientId===null || items===null) return res.status(400).send('Bad Request');
   
    const result = await updateCartDB(clientId, items);
    if (result!==404) return res.status(200).send('Cart Was Modified')
  } catch (e) {
    showErrors("/updateCart", e);
    return 404;
  }
});

module.exports = router;
//