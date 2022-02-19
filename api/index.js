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

conn
  .sync({ force: false })
  .then(() => {
    server.listen(port, () => {
      console.log(`%s listening at ${port}`); // eslint-disable-line no-console
    });
  })
  .catch((e) => console.log(e));
