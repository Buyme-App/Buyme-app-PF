const { Router } = require("express");
const showErrors = require("../../messageConsole");
const router = Router();
const toggleFavDB = require("../../controllers/customer/toggleCustomerFav.controller");

router.put("/", async (req, res) => {
  try {
    let { id, idProduct } = req.body;
    id = parseInt(id);
    idProduct = parseInt(idProduct);

    if (!id || !idProduct) return res.send(400).send("Bad Request");
    else {
      const result = await toggleFavDB(id, idProduct);
      if (result === 404) return res.status(404).send("Customer not Found");
      else return res.status(200).send("Customer was modified");
    }
  } catch (e) {
    showErrors("/toggleFav", e);
    return 404;
  }
});

module.exports = router;
