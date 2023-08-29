const axios = require("axios");
const { Type } = require("../db");

//TRAER LOS TYPES DE LA API
const getTypes = async () => {
  const rawTypes = (await axios.get(`https://pokeapi.co/api/v2/type?&offset=0`))
    .data.results;

  const apiTypes = rawTypes.map((type) => type.name);
  //GUARDAR LOS TYPES EL BDD

  apiTypes.forEach((type) => {
    Type.findOrCreate({
      where: {
        name: type,
      },
    });
  });

  //RETORNA TYPES DESDE BDD
  const dbTypes = await Type.findAll();
  return dbTypes
};



module.exports = { getTypes };
