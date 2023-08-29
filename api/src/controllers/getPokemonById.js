const axios = require("axios");
const { Pokemon, Type } = require("../db");

const cleanArray = (arr) => {
  const clean = arr.map((e) => {
    return {
      id: e.id,
      name: e.name,
      sprites: e.sprites.other.dream_world.front_default, //revisar como viene de la api las imagenes
      life: e.stats[0].base_stat,
      attack: e.stats[1].base_stat,
      defense: e.stats[2].base_stat,
      speed: e.stats[5].base_stat,
      height: e.height,
      weight: e.weight,
      type: e.types.map((t) => t.type.name).join(" - "),
    };
  });
  return clean;
};

const getPokemonById = async (id, source) => {
  if (source === "api") {
    const apiRaw = (
      await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=60&offset=0`)
    ).data.results;

    const pokemonsDetails = await Promise.all(
      apiRaw.map(async (e) => {
        const response = (await axios.get(e.url)).data;
        return response;
      })
    );

    //ordena resultado
    const apiPokemons = cleanArray(pokemonsDetails);

    const idNumber = Number(id);
    const pokemonFiltered = apiPokemons.find((el) => el.id === idNumber);
    return pokemonFiltered;
  }

  const dbPokemonRaw = await Pokemon.findOne({
    where: {
      id: id,
    },
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const dbPokemon = {
    id: dbPokemonRaw.id,
    name: dbPokemonRaw.name,
    sprites: dbPokemonRaw.sprites,
    life: dbPokemonRaw.life,
    attack: dbPokemonRaw.attack,
    defense: dbPokemonRaw.defense,
    speed: dbPokemonRaw.speed,
    height: dbPokemonRaw.height,
    weight: dbPokemonRaw.weight,
    type: dbPokemonRaw.Types.map((type) => type.name).join(" - "),
  };

  return dbPokemon;
};

module.exports = getPokemonById;
