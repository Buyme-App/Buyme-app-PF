const { Router } = require("express");
const showErrors = require("../../messageConsole");
const router = Router();
const getInvoiceController = require("../../controllers/order/getOrderDetail.controller");

//ruta /getOrderDetail/:id para obtener el detalle de un pedido
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getInvoiceController(id);
    if (result === 404) res.status(404).send("order not found");
    else res.status(200).json(result);
  } catch (error) {
    showErrors("/getInvoiceDetail", error);
    res.status(404).send("id not found");
  }
});

module.exports = router;
