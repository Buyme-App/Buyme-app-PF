const { Router } = require("express");
const delCartDB= require('../../controllers/cart/delCart.controller');
const router = Router();
const showErrors = require("../../messageConsole");


// borra el carro de un cliente pasando el id del cliente por params   http://localhost:3001/delCart/1
router.put("/:clientId", async (req, res) => {
  try {
    let { clientId } = req.params;
    if (clientId===null) return res.status(400).send("Cart Doesn't exist");
    clientId = parseInt(clientId);//
    const result = await delCartDB(clientId);
    if (result!==404) return res.status(200).send('Cart was Deleted');
    else return res.status(404).send('Bad Request');
  } catch (e) {
    showErrors("/delCart", e);
    return 404;
  }
});

module.exports = router;
