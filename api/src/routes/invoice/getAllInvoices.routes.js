const { Router } = require("express");
const getAllInvoices = require("../../controllers/invoice/getAllInvoices.controller");
const showErrors = require("../../messageConsole");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const getInvoices = await getAllInvoices();
    if (getInvoices) return res.status(200).json(getInvoices);
    else return res.status(404).send("Error not invoices found");
  } catch (error) {
    showErrors("/getAllInvoices", error);
    res.status(404);
  }
});

module.exports = router;
