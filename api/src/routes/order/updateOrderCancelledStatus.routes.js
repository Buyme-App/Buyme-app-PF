const { Router } = require("express");
const showErrors = require("../../messageConsole");
const router = Router();
const updateOrderCancelledStatus = require("../../controllers/order/updateOrderCancelledStatus.controller");

//Función para llamar al controlador que actualiza el estado de un pedido.
//en cuanto a si se cancelo o no.
router.put("/", async (req, res) => {
  const { id, cancelled } = req.body;

  if (id) {
    try {
      const update = await updateOrderCancelledStatus(id, cancelled);

      if (update) return res.json({ message: "Updated order", data: update });
      else res.send("Error: cancelled order status not updated");
    } catch (error) {
      showErrors("/updateOrderCancelledStatus/:id", error);
      return 500;
    }
  } else {
    return res.status(500).send("Id is required");
  }
});

module.exports = router;
