
//Ruta para loguearse y obtener autorizacion,  si existe el usuario y tiene password valido contra la DB
const {Router}=require('express');
const router=Router();
const showErrors=require('../../messageConsole');
const loginController = require('../../controllers/login/login.routes.controller');


router.post("/", async (req, res) => {
    try {
      const { userName, userPassword, userEmail } = req.body;
  
      const adminData = await loginController(userName, userPassword, userEmail);
      if (adminData !== 200) return res.status(404).send("Wrong Data");
      else return res.status(200).send("Access Granted");
    } catch (error) {
      showErrors("/login", error);
      res.status(404);
    }
  });
  
  module.exports = router;
