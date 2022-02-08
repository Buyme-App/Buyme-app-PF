const { Router } = require("express");
const deleteCustomerDB = require("../../controllers/customer/deleteCustomer.controller");
const showErrors = require("../../messageConsole");
const router = Router();

router.delete("/", async (req, res) => {
  try {
    const { email } = req.body;
    if (email === null) return res.send(400).send("Customer wasn't deleted");

    const result = await deleteCustomerDB(email);
    if (result !== 200) return res.status(404).send("Email wasn't founded");
    else return res.status(200).send("Customer was Deleted");
  } catch (e) {
    showErrors("/deleteCustomer", e);
    return 404;
  }
});

module.exports = router;
