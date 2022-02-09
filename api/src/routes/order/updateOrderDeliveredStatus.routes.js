const { Router } = require("express");
const showErrors = require("../../messageConsole");
const router = Router();
const updateOrderDeliveredStatus = require("../../controllers/order/updateOrderDeliveredStatus.controller");

//Función para llamar al controlador que actualiza el estado de un pedido.
//en cuanto a si se recibió o no.
router.put("/", async (req, res) => {
  const { id, delivered } = req.body;

  if (id) {
    try {
      const update = await updateOrderDeliveredStatus(id, delivered);

      if (update) return res.json({ message: "Updated order", data: update });
      else res.send("Error: Delivered order status not updated");
    } catch (error) {
      showErrors("/updateOrderDeliveredStatus/:id", error);
      return 500;
    }
  } else {
    return res.status(500).send("Id is required");
  }
});

module.exports = router;
