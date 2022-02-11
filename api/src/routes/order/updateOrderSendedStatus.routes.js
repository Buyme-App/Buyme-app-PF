const { Router } = require("express");
const showErrors = require("../../messageConsole");
const router = Router();
const updateOrderSendedStatus = require("../../controllers/order/updateOrderSendedStatus.controller");

//Función para llamar al controlador que actualiza el estado de un pedido.
//en cuanto a si se envió o no.
router.put("/", async (req, res) => {
  const { id, sended } = req.body;

  if (id) {
    try {
      const update = await updateOrderSendedStatus(id, sended);

      if (update) return res.json({ message: "Updated order", data: update });
      else res.send("Error: sended order status not updated");
    } catch (error) {
      showErrors("/updateOrderSendedStatus/:id", error);
      return 500;
    }
  } else {
    return res.status(500).send("Id is required");
  }
});

module.exports = router;
