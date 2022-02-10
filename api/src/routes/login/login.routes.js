//Ruta para loguearse y obtener autorizacion,  si existe el email del usuario y tiene password valido contra la DB

const { Router } = require("express");
const router = Router();
const showErrors = require("../../messageConsole");
const loginController = require("../../controllers/login/login.routes.controller");
const {createToken} = require('../../token/auth.token')

router.post("/", async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    const adminData = await loginController(userEmail, userPassword);
    if (adminData === 404 || adminData === false) return res.status(404).send("Wrong User's Data");
   
    const token = createToken(adminData);
    // return res.status(200).json({token: token});
    return res.status(200).json({login: true, data: token})
    

  } catch (error) {
    showErrors("/login", error);
    res.status(404);
  }
});

module.exports = router;
