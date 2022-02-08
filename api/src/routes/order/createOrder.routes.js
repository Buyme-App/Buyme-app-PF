const { Router } = require("express");
const createOrder = require("../../controllers/order/createOrder.controller");
const showErrors = require("../../messageConsole");
const router = Router();

//Ruta /createOrder para llamar al controlador que crea una order en la base de datos,
//para seguimiento del pedido una ves confirmada la compra.
router.post("/", async (req, res) => {
  const { adress, transportedBy, trackingNumber } = req.body;

  if (adress && transportedBy && trackingNumber) {
    try {
      const create = await createOrder(adress, transportedBy, trackingNumber);

      if (create) return res.json({ message: "Order created", data: create });
      else {
        return res.status(500).send("Error: failed to create order");
      }
    } catch (error) {
      showErrors("post/createOrder", error);
      return 500;
    }
  } else {
    return res.send(
      "missing point:adress, transportedBy, trackingNumber are required"
    );
  }
});

module.exports = router;
