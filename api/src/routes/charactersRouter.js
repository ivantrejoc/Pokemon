//modularizamos rutas de acuerdo a la necesidad del proyecto
const { Router } = require("express");
const {
  getPokemonsHandler,
  getPokemonByIdHandler,
  getTypesHandler,
  createPokemonHandler,
} = require("../handlers/pokemonsHandlers");

const charactersRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
charactersRouter.get("/pokemons", getPokemonsHandler);
charactersRouter.get("/pokemons/:id", getPokemonByIdHandler);
charactersRouter.get("/pokemons/name?=", getPokemonsHandler);
charactersRouter.get("/types", getTypesHandler);
charactersRouter.post("/pokemons", createPokemonHandler);

module.exports = charactersRouter;
