const axios = require("axios");
const { Pokemon, Type } = require("../db");
const db = require("../db");


//función que organiza la data de todos los personajes que llega de la api
const cleanArray = (arr) => {
  const clean = arr.map((e) => {
    return {
      id: e.id,
      name: e.name,
      sprites: e.sprites.other.dream_world.front_default,
      life: e.life,
      attack: e.attack,
      defense: e.defense,
      speed: e.speed,
      height: e.height,
      weight: e.weight,
      types: e.types.map((t) => t.type.name),
    };
  });
  return clean;
};


const cleanDbArray = (arr) => {
  const clean = arr.map((e) => {
    return {
      id: e.id,
      name: e.name,
      sprites: e.sprites, 
      life: e.life,
      attack: e.attack,
      defense: e.defense,
      speed: e.speed,
      height: e.height,
      weight: e.weight,
      types: e.Types.map((t) => t.name),
    };
  });
  return clean;
};

const getAllPokemons = async () => {
  //buscar BDD
  const createdPokemons = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const dbPokemons = cleanDbArray(createdPokemons);
 
  //buscar api
  const apiRaw = (
    await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=60&offset=0`)
  ).data.results;

  const pokemonDetails = await Promise.all(
    apiRaw.map(async (e) => {
      const response = (await axios.get(e.url)).data;
      return response;
    })
  );
  
  const apiPokemons = cleanArray(pokemonDetails);
  console.log(apiPokemons);
  
  return [...dbPokemons, ...apiPokemons];
};

//POKEMONS BY NAME FUNCIONA. BUSCA EN BDD, BUSCA EN API,TRAE ALGUNOS PERSONAJES Y OTROS NO LOS TRAE
//ARROJA ERROR 400 "message": "read ECONNRESET"
const getPokemonsByName = async (name) => {
  let plainName = name.toLowerCase();

  //buscar en BDD
  const dbPokemon = await Pokemon.findAll({
    where: {
      name: plainName,
    },
    include: {
      model: Type,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  const dbPokemonClean = cleanDbArray(dbPokemon);
  //buscar en API
  const apiRaw = (
    await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=60=offset=0`)
  ).data.results;

  const pokemonsDetails = await Promise.all(
    apiRaw.map(async (e) => {
      const response = (await axios.get(e.url)).data;
      return response;
    })
  );

  //unir resultados
  const apiPokemons = cleanArray(pokemonsDetails);

  const pokemonFiltered = apiPokemons.filter((el) => {
    return el.name === plainName;
  });

  return [...dbPokemonClean, ...pokemonFiltered];
};



module.exports = {
  getPokemonsByName,
  getAllPokemons,
};
