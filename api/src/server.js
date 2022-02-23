const express = require("express");
const morgan = require("morgan");
const router = require("./routes/index.routes");
const bodyParser = require("body-parser");
const server = express();
const cors = require('cors');


const whiteList = ['https://buyme-app-pf.vercel.app', 'http://www.buymeapp.tk','https://vercel.com/nicolius888/buyme-app-pf/8XwrQTWhkNF3cABAQYXdUVnEtXvM']



// Middlewares
server.use(bodyParser.json({ limit: "10mb" }));
server.use(express.json());
server.use(morgan("dev"));
server.use(
  cors({
    allowedHeaders: ["authorization", "Content-Type"], // you can change the headers
    exposedHeaders: ["authorization"], // you can change the headers
    origin: whiteList,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", 'https://buyme-app-pf.vercel.app');
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});


// Routes
router(server);

module.exports = server;
