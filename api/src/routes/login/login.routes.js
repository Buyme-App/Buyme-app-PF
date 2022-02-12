//Ruta para loguearse y obtener autorizacion,  si existe el email del usuario y tiene password valido contra la DB

const { Router } = require("express");
const router = Router();
const showErrors = require("../../messageConsole");
const loginController = require("../../controllers/login/login.routes.controller");
const {createToken,verifyToken} = require('../../token/auth.token');


router.post("/", async (req, res) => {
  try {
    
    let token = req.headers['authorization'];
    // token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkFkbWluaXN0cmFkb3IiLCJpYXQiOjE2NDQ2NzcyMTQsImV4cCI6MTY0NDc2MzYxNH0.v97ivcUtbn-KcMRCdcukOhLQqX6e_XUNZ5EIZnPobco'
    const verify = await verifyToken(token);

    if(verify){

      // console.log('AAAAAAAAAAAA', verify)
      return res.status(200).json({login: true, data: token});
      

    }else{

      const { userEmail, userPassword } = req.body;

      const adminData = await loginController(userEmail, userPassword);
      if (adminData === 404 || adminData === false) return res.status(404).send("Wrong User's Data");
      
      
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>TTToooKKKeeeennn')
      const newToken = createToken(adminData);
      
      return res.status(200).json({login: true, data: newToken})
    };

    
    

  } catch (error) {
    showErrors("/login", error);
    res.status(404);
  }
});

module.exports = router;
