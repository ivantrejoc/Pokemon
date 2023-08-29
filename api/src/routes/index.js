//Acá modularizamos rutas en función de la parte del proyecto que se requiera
const { Router } = require('express');
const charactersRouter = require("./charactersRouter");

const mainRouter = Router();

mainRouter.use("/", charactersRouter);




module.exports = mainRouter;
