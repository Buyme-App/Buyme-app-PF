const server = require("./src/server");
require("dotenv").config();
const colors = require("colors");
// const showErrors = require("../api/src/messageConsole");
const { conn } = require("./src/database/db.js");
const userRoot = require("./src/controllers/userRoot/userRoot.controller");

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}

// Start server
var cors_proxy = require("cors-anywhere");
conn
  .sync({ force: false })
  .then(() => {
    // cors_proxy.createServer({
    //   originWhitelist: [], // Allow all origins
    //   requireHeader: ["origin", "x-requested-with"],
    //   // removeHeaders: ["cookie", "cookie2"],
    // });
    server.listen(port, () => {
      userRoot(); //crear usuario adminRoot sino existe en la DB.
      console.log(
        colors.black.bgGreen(`==>> Server is running on PORT: ${port} `)
      );
    });
  })
  .catch((e) => console.log(e));
