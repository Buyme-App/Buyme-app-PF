//Ruta para loguearse y obtener autorizacion,  si existe el email del usuario y tiene password valido contra la DB
const { Router } = require("express");
const router = Router();
const showErrors = require("../../messageConsole");
const loginController = require("../../controllers/login/login.routes.controller");

router.post("/", async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    const adminData = await loginController(userEmail, userPassword);
    if (adminData !== 200) return res.status(404).send("Wrong User's Data");
    else return res.status(200).send("Access Granted");
  } catch (error) {
    showErrors("/login", error);
    res.status(404);
  }
});

module.exports = router;
