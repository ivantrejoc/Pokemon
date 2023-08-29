const createPokemon = require("../controllers/createPokemon");
const getPokemonById = require("../controllers/getPokemonById");
const { getTypes } = require("../controllers/getTypes");
const {
  getAllPokemons,
  getPokemonsByName,
} = require("../controllers/getPokemons");

const getPokemonsHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const results = name
      ? await getPokemonsByName(name)
      : await getAllPokemons();
    results.length > 0
      ? res.status(200).json(results)
      : res.status(404).json("Pokemon no existe");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPokemonByIdHandler = async (req, res) => {
  const { id } = req.params;

  const source = isNaN(id) ? "bdd" : "api";
  try {
    const pokemon = await getPokemonById(id, source);
    pokemon
      ? res.status(200).json(pokemon)
      : res.status(404).json("Pokemon no existe");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTypesHandler = async (req, res) => {
  try {
    const types = await getTypes();
    res.status(200).json(types);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createPokemonHandler = async (req, res) => {
  try {
    const {
      name,
      sprites,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
      types,
    } = req.body;

    const newPokemon = await createPokemon(
      name,
      sprites,
      life,
      attack,
      defense,
      speed,
      height,
      weight,
      types
    );
    return res.status(201).send("Pokemon creado satisfactoriamente");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getPokemonsHandler,
  getPokemonByIdHandler,
  // getPokemonByNameHandler,
  getTypesHandler,
  createPokemonHandler,
};
