const { Router } = require("express");
const router = Router();
const getProductDetail = require("../../controllers/product/getProductDetail.controller.js");
const showErrors = require("../../messageConsole.js");

// Esta ruta recibe un get a http://localhost:3001/productDetail/detail:idProduct/?nameProduct=ate
// si se pasa el idProduct debe ser mayor a 0, si no se pone 0 para que tome el nameProduct,
// luego se puede colocar o no el nameProduct como query

router.get("/detail:idProduct/", async (req, res) => {
  try {
    const { idProduct } = req.params;
    const { nameProduct } = req.query;
    if (idProduct > 0 || nameProduct !== undefined) {
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

// router.get("/", async (req, res) => {
//   try {
//     const { idProduct, nameProduct } = req.body;
//     if (idProduct || nameProduct) {
//       const result = await getProductDetail(idProduct, nameProduct);
//       if (result == 404) return res.send("Product doesn't Exist");
//       if (result == 400) return res.sendStatus(400);
//       return res.send(result);
//     } else return res.sendStatus(400);
//   } catch (e) {
//     showErrors("/productDetail", e);
//     return 404;
//   }
// });

// module.exports = router;
