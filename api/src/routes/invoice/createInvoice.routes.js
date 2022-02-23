const { Router } = require("express");
const createInvoice = require("../../controllers/invoice/createInvoice.controller");
const showErrors = require("../../messageConsole");
const router = Router();

// Ruta /createInvoice que envía los datos recibidos por body al controlador createInvoice
// y responde con la data del producto creado o un error 500.
router.post("/", async (req, res) => {
  const { clientId, products } = req.body;             //Agrego clientId a parametros

  //Modifico Jose
  if(!clientId) return res.json({message:"Invalid Client Id"});
  //hasta aca

  if (products) {
    try {
      const create = await createInvoice(clientId, products);             //agrego clientId a parametros
      res.json({ message: "Invoice created", data: create });
    } catch (error) {
      showErrors("post/createInvoice", error);
      res.send(500);
    }
  }
});

module.exports = router;
