const { Router } = require("express");
const addCart = require("../../controllers/cart/addCart.controller");
const router = Router();

router.post("/", async (req, res) => {
  const { clientId, items } = req.body;
  if (items) {
    try {
      const create = await addCart(clientId, items);
      res.json({ message: "Cart created", data: create });
    } catch (error) {
      showErrors("post/addCart", error);
      res.send(500);
    }
  }
});

module.exports = router;
