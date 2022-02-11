//Funcion que trabaja sobre ruta /login mira si no hay email mira si hay usuario y si hay ve que el password coincida
//Por ahora si ingresa un email devuelve el mismo email

const { User } = require("../../database/db.js");
const showErrors = require("../../messageConsole");
const bcrypt = require("../handleBcrypts/handleBcrypts"); // Fixed

async function loginRoutesController(userEmail, userPassword) {
  try {
    if (userEmail) {
      const result = await User.findOne({ where: { email: userEmail } });
      if (result === null) return 404;
      else {
        let compareIqual = await bcrypt.compare(userPassword, result.password);
        
        if (compareIqual) return result;
        else return false;
      }
    } else return 401;
  } catch (e) {
    showErrors("loginRoutesController", e);
    return res.send(e);
  }
}

module.exports = loginRoutesController;


