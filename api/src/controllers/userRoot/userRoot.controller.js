const {User} = require('../../database/db');
const showErrors = require('../../messageConsole');
const {encrypt} = require('../handleBcrypts/handleBcrypts');
const colors = require('colors');
require('dotenv').config();

const {PASS_ROOT, EMAIL_ROOT} = process.env;

async function userRoot(){

    const email = EMAIL_ROOT;

    const dbUser = await User.findOne({where: {email : email}});

    if(!dbUser){

        const name = 'adminRoot';
        let password = PASS_ROOT;
        const email = EMAIL_ROOT;
        const role = 'Administrador';

        password = await encrypt(password);
        

        const root = await User.create({
            name,
            password,
            email,
            role
        });

        if(root) console.log(colors.bold.magenta('--->> AdminRoot created'))

    }else{
        console.log(colors.bold.magenta('--->> AdminRoot already exists'))
    }
};


module.exports = userRoot;