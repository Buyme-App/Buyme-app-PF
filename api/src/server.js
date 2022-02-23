const express = require("express");
const morgan = require("morgan");
const router = require("./routes/index.routes");
const bodyParser = require("body-parser");
const server = express();
const cors = require("cors");


const whiteList = ["http://localhost:3000", "http://localhost:3001"];

server.use(bodyParser.json({ limit: "10mb" }));
server.use(express.json());
server.use(morgan("dev"));

server.use(cors({ origin: whiteList }));


// Routes
router(server);

module.exports = server;
