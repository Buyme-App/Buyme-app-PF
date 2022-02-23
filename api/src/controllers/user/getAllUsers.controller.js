const { User } = require('../../database/db');
const showErrors = require('../../messageConsole');

// Función para obtener todos los usuarios administrativos registrados en la base de datos, 
// retorna los user en caso de haber y de lo contrario retorna false.
async function getAllUsers() {

    try {

        const userData = await User.findAll()
        
        if (userData) {
            return userData;
        }else{
            return false;
        }
        

    } catch (error) {
        showErrors('getAdminDB', error);
        return false
    }
}

module.exports = getAllUsers;