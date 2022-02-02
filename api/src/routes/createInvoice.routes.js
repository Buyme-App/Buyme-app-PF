const { Router } = require("express");
const createInvoice = require("../controllers/createInvoice.controller");
const showErrors = require("../messageConsole");
const router = Router();

// Ruta /createInvoice que envía los datos recibidos por body al controlador createInvoice
// y responde con la data del producto creado o un error 500.
router.post("/", async (req, res) => {
  const { products } = req.body;

  if (products) {
    try {
      const create = await createInvoice(products);
      res.json({ message: "Invoice created", data: create });
    } catch (error) {
      showErrors("post/createInvoice", error);
      res.send(500);
    }
  }
});

module.exports = router;
