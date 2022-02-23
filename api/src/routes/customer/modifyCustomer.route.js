const { Router } = require("express");
const showErrors = require("../../messageConsole");
const modifyCustomerDB = require("../../controllers/customer/modifyCustomer.controller");

const router = Router();

router.put("/", async (req, res) => {
  try {
    const {
      id,
      firstName,
      lastName,
      email,
      password,
      country,
      phone,
      address,
      favorites,
    } = req.body;
    const result = await modifyCustomerDB(
      id,
      firstName,
      lastName,
      email,
      password,
      country,
      phone,
      address,
      favorites
    );
    if (result === 404) return res.status(404).send("Customer not Found");
    else return res.status(200).send("Customer was modified");
  } catch (e) {
    showErrors("/modifyCustomer", e);
    return 404;
  }
});

module.exports = router;
