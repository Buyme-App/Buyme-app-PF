const { Router } = require("express");
const modifyInvoiceDB = require("../../controllers/invoice/modifyInvoice.controller");
const showErrors = require("../../messageConsole");
const router = Router();

router.put("/:idInvoice", async (req, res) => {
  try {
    const {idInvoice} = req.params;
    const result = await modifyInvoiceDB(idInvoice);
    if (result === 404) return res.status(404).send("Invoice not Found");
    else return res.status(200).send("Invoice was modified");
  } catch (e) {
    showErrors("/modifyInvoice", e);
    return 404;
  }
});

module.exports = router;

