const { Router } = require("express");
const router = Router();
const showErrors = require("../../messageConsole");
const notificationOrderDB = require("../../controllers/mercadopago/notificationOrder.controller");

router.post("/", async (req, res) => {
  try {
    let { id, topic } = req.query; //id es el numero de la merchant_order

    if (topic === "merchant_order") {
      const result = await notificationOrderDB(id);          //le puse el await
    }
    res.sendStatus(200);
  } catch (e) {
    showErrors("/motificationOrder", e);
    return 404;
  }
});

module.exports = router;
