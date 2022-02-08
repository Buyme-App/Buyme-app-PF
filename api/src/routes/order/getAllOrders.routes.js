const { Router } = require("express");
const getAllOrders = require("../../controllers/order/getAllOrders.controller");
const showErrors = require("../../messageConsole");
const router = Router();

//Funcion para la ruta /getAllOrders de obtención de todas las ordenes
router.get("/", async (req, res) => {
  try {
    const getOrders = await getAllOrders();
    if (getOrders) return res.status(200).json(getOrders);
    else return res.status(404).send("Error: not orders found");
  } catch (error) {
    showErrors("/getAllOrders", error);
    res.status(404);
  }
});

module.exports = router;
