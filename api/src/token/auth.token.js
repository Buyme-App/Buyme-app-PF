const jwt = require('jsonwebtoken');
require('dotenv').config();
const {User} = require('../database/db');
const showErrors = require('../messageConsole');

const {KEYWORD} = process.env;

let tokenUser = {};

function createToken(userData){

    const userID = userData.id;
    const userRole = userData.role;

    const token = jwt.sign({id: userID, role: userRole}, KEYWORD, {
        expiresIn: 86400
    });

    const data = {token: token, role: userRole}
    return data;
};


async function verifyToken(token){

    
    try {

        const tokenVerify = jwt.verify(token,KEYWORD);
        console.log('VVEEEE', tokenVerify)
        tokenUser = tokenVerify;
        const userDB = await User.findByPk(tokenVerify.id);
        
        if(!userDB) return false;
        else return true;

    } catch (error) {
        showErrors('verifyToken', error)
        return false;
    }


};

async function valiteAdmin(){

    try {
        let role = tokenUser.role;

        if(role === 'Administrador') return true;
        else return false
        
    
    } catch (error) {
        showErrors('valiteAdmin', error)
        return false;
    }
};

async function valiteSuperv(){
    
    try {
        let role = tokenUser.role;

        if(role === 'Supervisor' || role === 'Administrador') return true;
        else return false
        
    
    } catch (error) {
        showErrors('valiteSuperv', error)
        return false;
    }
};



module.exports = {
    createToken,
    verifyToken,
    valiteAdmin,
    valiteSuperv,
};