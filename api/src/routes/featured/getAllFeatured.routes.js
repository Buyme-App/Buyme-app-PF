const { Router } = require("express");
const getAllFeatured = require("../../controllers/featured/getAllFeatured.controller");
const showErrors = require("../../messageConsole");
const router = Router();

//Ruta que llama al controlador para obtener todos los productos destacados.
router.get("/", async (req, res) => {
  try {
    const getFeatured = await getAllFeatured();
    if (getFeatured) return res.status(200).json(getFeatured);
    else return res.status(404).send("Error not featured products found");
  } catch (error) {
    showErrors("/getAllFeatured", error);
    res.status(404);
  }
});

module.exports = router;
