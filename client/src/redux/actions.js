import axios from "axios";
import {
  GET_POKEMONS,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_BY_ID,
  GET_TYPES,
  FILTER_POKEMONS_BY_TYPE,
  SORT_POKEMONS,
  SORT_POKEMONS_BY_ATTACK,
  FILTER_POKEMONS_BY_ORIGIN,
  CLEAR_POKEMON_BY_NAME,
  CLEAR_DETAIL,
} from "./action-types";

const URL = "https://pokemon-hazel-tau.vercel.app"; // url back deployado

export const getPokemons = () => {
  return async (dispatch) => {
    try {
      const apiData = await axios.get(`${URL}/pokemons`);
      const pokemons = apiData.data;
      return dispatch({
        type: GET_POKEMONS,
        payload: pokemons,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};

export const getTypes = () => {
  return async (dispatch) => {
    try {
      const types = await axios.get(`${URL}/types`, {});
      const typesData = types.data;
      return dispatch({
        type: GET_TYPES,
        payload: typesData,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getPokemonById = (id) => {
  return async (dispatch) => {
    try {
      const apiData = await axios.get(`${URL}/pokemons/${id}`);
      const pokemon = apiData.data;
      return dispatch({
        type: GET_POKEMON_BY_ID,
        payload: pokemon,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getPokemonByName = (name) => {
  return async (dispatch) => {
    try {
      const apiData = await axios.get(`${URL}/pokemons?name=${name}`);
      const pokemon = apiData.data;

      return dispatch({
        type: GET_POKEMON_BY_NAME,
        payload: pokemon,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const filterByTypes = (payload) => {
  return {
    type: FILTER_POKEMONS_BY_TYPE,
    payload,
  };
};

export const filterByOrigin = (payload) => {
  return {
    type: FILTER_POKEMONS_BY_ORIGIN,
    payload,
  };
};

export const sortPokemons = (payload) => {
  return {
    type: SORT_POKEMONS,
    payload,
  };
};

export const sortPokemonsByAttack = (payload) => {
  return {
    type: SORT_POKEMONS_BY_ATTACK,
    payload,
  };
};

export const clearPokemonByName = (payload) => {
  return {
    type: CLEAR_POKEMON_BY_NAME,
    payload,
  };
};

export const clearDetail = (payload) => {
  return {
    type: CLEAR_DETAIL,
    payload,
  };
};
