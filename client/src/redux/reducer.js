import {
  GET_POKEMONS,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_BY_ID,
  FILTER_POKEMONS_BY_TYPE,
  FILTER_POKEMONS_BY_ORIGIN,
  SORT_POKEMONS,
  SORT_POKEMONS_BY_ATTACK,
  GET_TYPES,
  CLEAR_POKEMON_BY_NAME,
  CLEAR_DETAIL
} from "./action-types";


const initialState = {
  allPokemons: [],
  allPokemonsCopy: [],
  pokemonById: [],
  pokemonByName: [],
  types: [],
  loading: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state, //Redux no cambia el estado global, React pisa el estado local
        allPokemons: action.payload,
        allPokemonsCopy: action.payload,
        loading: true
      };
    case GET_POKEMON_BY_ID:
      return {
        ...state,
        pokemonById: action.payload,
      };
      
    case GET_POKEMON_BY_NAME:
      return {
        ...state,
        pokemonByName: action.payload,
      };

    case FILTER_POKEMONS_BY_TYPE:
      const pokemonsCopy = state.allPokemonsCopy;
      const filteredByType =
        action.payload === "todos"
          ? pokemonsCopy
          : pokemonsCopy.filter((e) =>
              e.types.find((e) => e === action.payload)
            );
            return {
        ...state,
        allPokemons: filteredByType,
      };

    case FILTER_POKEMONS_BY_ORIGIN:
      const pokemonsCopy2 = state.allPokemonsCopy;
      const filteredByOrigin =
      action.payload === "created"
      ? pokemonsCopy2.filter((e) => isNaN(e.id))
      : pokemonsCopy2.filter((e) => !isNaN(e.id));
     
      return {
        ...state,
        allPokemons: filteredByOrigin,
      };

    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    case SORT_POKEMONS:
      const order = [...state.allPokemonsCopy];
      const sortedPokemons = order.sort((a, b) => {
        if (a.name > b.name) {
          return action.payload === "asc" ? 1 : -1;
        }
        if (a.name < b.name) {
          return action.payload === "des" ? 1 : -1;
        } else return 0;
      });

      return {
        ...state,
        allPokemons: sortedPokemons,
      };

      case SORT_POKEMONS_BY_ATTACK:
      const orderAttack = [...state.allPokemonsCopy];
      const sortedPokemonsAttack = orderAttack.sort((a, b) => {
        if (a.attack > b.attack) {
          return action.payload === "more" ? 1 : -1;
        }
        if (a.attack < b.attack) {
          return action.payload === "less" ? 1 : -1;
        } else return 0;
      });     

      return {
        ...state,
        allPokemons: sortedPokemonsAttack,
      };

      case CLEAR_POKEMON_BY_NAME:
      return {
        ...state,
        pokemonByName: [], // Limpia el estado a un array vacío
      };

      case CLEAR_DETAIL:
      return {
        ...state,
        pokemonById: [], // Limpia el estado a un array vacío
      };


    default:
      return { ...state };
  }
};

export default rootReducer;
