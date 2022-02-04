const { Router } = require("express");
const showErrors = require("../../messageConsole");
const router = Router();
const getInvoiceDetail = require("../../controllers/invoice/getInvoiceDetail.controller");

//ruta para obtener el detalle de una factura
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const result = await getInvoiceDetail(id);
    if (result === 404) res.status(404).send("id not found");
    else res.status(200).json(result);
  } catch (error) {
    showErrors("getInvoiceDetail", error);
    res.status(404).send("id not found");
  }
});

module.exports = router;
