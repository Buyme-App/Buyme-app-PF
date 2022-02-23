
const {User} = require('../../database/db');
const showErrors = require('../../messageConsole');

// Función para obtener un usuario administrativo registrado en la base de datos, 
// retorna true si se encontro el usuario de lo contrario retorna false.
// el param que recibe pude ser el id o el name y de acuerdo a ese param se realiza la busqueda.

async function getOneUser(param){

    if(!isNaN(param)){

        try {
            
            const user = await User.findByPk(param)

            if(user) return user;
            else return false;
        
        } catch (error) {
            showErrors('getOneUser', error)
            return false;
        }
    }else{

        // param = param[0].toUpperCase() + param.slice(1);
        
        try {
            

            const user = await User.findAll();

            const result = user.filter(u => u.name.toLowerCase().includes(param.toLowerCase()));

            if(result.length > 0) return result;
            else return false;
        
        } catch (error) {
            showErrors('getOneUser', error)
            return false;
        }
    }

};





module.exports = getOneUser;