const { Router } = require("express");
const router = Router();
const getProductDetail = require("../../controllers/product/getProductDetail.controller.js");
const showErrors = require("../../messageConsole.js");

// Esta ruta recibe un idProduct o nameProduct (una cadena de caracteres que se busca en el nombre del producto)
// si se pasan los dos datos, da prioridad a idProduct
router.get("/", async (req, res) => {
  try {
    const { idProduct, nameProduct } = req.body;
    if (idProduct || nameProduct) {
      const result = await getProductDetail(idProduct, nameProduct);
      if (result == 404) return res.send("Product doesn't Exist");
      if (result == 400) return res.sendStatus(400);
      return res.send(result);
    } else return res.sendStatus(400);
  } catch (e) {
    showErrors("/productDetail", e);
    return 404;
  }
});

module.exports = router;
