const { Router } = require("express");
const router = Router();
const showErrors = require("../../messageConsole");
const createInvoiceDB = require("../../controllers/mercadopago/createInvoiceMP.controller");

router.post("/", async (req, res) => {                  //post /MPsuccess
  try {
    
    console.log('llego a la ruta');
    console.log(req.body);


    const {clientId, itemsHard, valor} = req.body;

    createInvoiceDB(clientId, itemsHard, valor)
            .then(function (response1) {})
            .catch(function (error) {
              console.log('createInvoiceDB', error);
            });
  } catch (e) {
    showErrors("/MPsuccess", e);
    return 404;
  }
});

module.exports = router;
//modificado// 