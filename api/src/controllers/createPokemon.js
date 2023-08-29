const { Pokemon, Type } = require("../db");

const createPokemon = async (
  name,
  sprites,
  life,
  attack,
  defense,
  speed,
  height,
  weight,
  types
) => {
  const inputs = {
    name,
    sprites,
    life,
    attack,
    defense,
    speed,
    height,
    weight,
  };

  try {
    const newPokemon = await Pokemon.create(inputs);

    const dbTypes = await Type.findAll({
      where: {
        name: types,
      },
    });

    await newPokemon.addType(dbTypes);
    return newPokemon;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = createPokemon;
