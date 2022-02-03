//Funcion que trabaja sobre ruta /login mira si no hay email mira si hay usuario y si hay ve que el password coincida
//Por ahora si ingresa un email devuelve el mismo email

const { User } = require("../../database/db.js");
const showErrors = require("../../messageConsole");
const bcrypt = require("bcrypt");

async function loginRoutesController(userName, userPassword, userEmail) {
  try {
    if (userName) {
      const result = await User.findOne({ where: { name: userName } });
      if (result === null) return 404;
      else {
        let compareIqual = bcrypt.compareSync(userPassword, result.password);
        if (compareIqual) return 200;
        else return 401;
      }
    } else {
      if (userEmail) return res.send(userEmail);
      //para manejar despues loguearse con validacion de google, u otro
      else return 401;
    }
  } catch (e) {
    showErrors("loginRoutesController", e);
    return res.send(e);
  }
}

module.exports = loginRoutesController;
