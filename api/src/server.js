const express = require('express');
const morgan = require('morgan');
const router = require('./routes/index.routes');
const cors = require('cors');
const bodyParser = require("body-parser");

const server = express();

// Middlewares
server.use(bodyParser.json({ limit: "10mb" }));
server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Routes
router(server);

module.exports = server;


