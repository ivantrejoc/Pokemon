//Módulo encargado de crear el server
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mainRouter = require("./routes");
const cors = require("cors");

const server = express();
const PORT = 3001;
server.name = "API";

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//ESTOS MIDDLEWARES TRAEN PRBLEMAS DE CORS.
// res.header('Access-Control-Allow-Origin', `http://localhost:${PORT}`); // update to match the domain you will make the request from
// res.header('Access-Control-Allow-Credentials', 'true');
// res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
// res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
// next();

server.use(mainRouter); //middleware que escucha a las rutas
server.use(express.json()); //transforma los json recibidos en un objeto js.

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

server.get("/", (req, res) => {
  //el endpoint responde con un ok para
  res.status(200).send("OK");
});

module.exports = server;
