
const { Router } = require("express");
const getCartDB= require('../../controllers/cart/getCart.controller');
const router = Router();
const showErrors = require("../../messageConsole");


// recupera el carro de un cliente pasando el id del cliente por params   http://localhost:3001/getCart/1
router.get("/:clientId", async (req, res) => {
  try {
    let { clientId } = req.params;
    if (clientId===null) return res.status(400).send('Bad Request');
    clientId = parseInt(clientId);

    const result = await getCartDB(clientId);
    if (result!==404) return res.status(200).send(result)
  } catch (e) {
    showErrors("/getCart", e);
    return 404;
  }
});

module.exports = router;
//