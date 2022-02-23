const { Router } = require("express");
const getCustomerDB = require("../../controllers/customer/getCustomer.controller");
const showErrors = require("../../messageConsole");

//ruta que busca si existe un comprador (customer), se pasa el id o el email, se da prioridad en la busqueda
//al email (si existen los dos, busca por email ignorando el id),
const router = Router();

router.get("/", async (req, res) => {
  try {
    let { id, email } = req.body;
    id = parseInt(id);
    if (id === null && email === null)
      return res.status(400).send("Bad Request");
    const result = await getCustomerDB(id, email);
    if (result === "") return res.status(200).send("Customer wans't Founded");
    else return res.status(200).send(result);
  } catch (e) {
    showErrors("/getCustomer", e);
    return 404;
  }
});

module.exports = router;
