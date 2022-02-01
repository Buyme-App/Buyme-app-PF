const { Admin } = require('../database/db');
const showErrors = require('../../src/messageConsole');


async function getAdminDB() {

    try {

        const AdminData = await Admin.findAll()
        if (AdminData) {
            return AdminData;
        }
        return {}

    } catch (error) {
        showErrors('getAdminDB', error);
        return 404
    }
}

module.exports = getAdminDB;