const { Router } = require("express");
const createProduct = require("../../controllers/product/createProduct.controller");
const showErrors = require("../../messageConsole");
const router = Router();

// Ruta /createProduct que envía los datos recibidos por body al controlador createProduct
// y responde con la data del producto creado o un error 500.
router.post("/", async (req, res) => {
  const {
    name,
    price,
    favorite,
    image,
    maker,
    model,
    description,
    SKU,
    offerPrice,
    stock,
    inventary,
    featured,
    paused,
  } = req.body;

  if (name) {
    try {
      const create = await createProduct(
        name,
        price,
        favorite,
        image,
        maker,
        model,
        description,
        SKU,
        offerPrice,
        stock,
        inventary,
        featured,
        paused
      );

      if (create) return res.json({ message: "Product created", data: create });
      else {
        return res.status(500).send("Error: failed to create product");
      }
    } catch (error) {
      showErrors("post/createProduct", error);
      return 500;
    }
  } else {
    return res.send("Name is required");
  }
});

module.exports = router;
