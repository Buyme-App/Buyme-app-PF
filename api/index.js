const server = require('./src/server');
require('dotenv').config();
const colors = require('colors')
const showErrors = require('../api/src/messageConsole');
const { conn } = require('./src/database/db.js');

const PORT = process.env.PORT || 3001;

// Start server

const main = async () => {
    try {
        await conn.sync({ force: false })

        server.listen(PORT, () => {
            console.log(colors.black.bgGreen(`==>> Server is running on PORT: ${PORT} `));
        })
    }
    catch (err) {
        console.log('error', err)
    }
};

main();







