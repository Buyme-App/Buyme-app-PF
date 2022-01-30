const server = require('./src/server');
require('dotenv').config();
const colors = require('colors')






const PORT = process.env.PORT || 3001;


const main = () => {

    server.listen(PORT, () => {

        console.log(colors.black.bgGreen(`==>> Server ins running on PORT: ${PORT} `));
    })
};




main();







