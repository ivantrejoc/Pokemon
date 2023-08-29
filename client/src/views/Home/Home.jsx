import SearchBar from "../../components/SearchBar/SearchBar";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";
import logoPokemon from "../../assets/pokemon-logo.png";
import Background from "../../assets/background2.jpg";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  filterByTypes,
  filterByOrigin,
  sortPokemons,
  sortPokemonsByAttack,
  clearPokemonByName,
} from "../../redux/actions";

import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const [showCardsContainer, setShowCardsContainer] = useState(true);

  const [loading, setLoading] = useState(true); // Estado para controlar si está cargando

  useEffect(() => {
    dispatch(getPokemons()).then(() => {
      setLoading(false); // Cambia el estado a "false" cuando los datos están cargados
    });
  }, [dispatch]);

  // useEffect(() => {
  //   if(loadingState){
  //     return;
  //   } else{
  //     dispatch(getPokemons());
  //   }
  // }, [dispatch]);

  function handleTypeFilter(e) {
    e.preventDefault();
    dispatch(filterByTypes(e.target.value));
    setCurrentPage(1);
  }

  function handleOriginFilter(e) {
    e.preventDefault();
    dispatch(filterByOrigin(e.target.value));
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(sortPokemons(e.target.value));
  }

  function handleSortByAttack(e) {
    e.preventDefault();
    dispatch(sortPokemonsByAttack(e.target.value));
  }

  function handleClick(e) {
    e.preventDefault();
    dispatch(clearPokemonByName());
  }

  // const loadingState = useSelector((state) => state.loading);
  const allPokemons = useSelector((state) => state.allPokemons);
  const [currentPage, setCurrentPage] = useState(1); //inicia paginado en 1
  const [cardsPerPage, setCardsPerPage] = useState(12); //trae 12 personajes por página
  const indexOfLastPokemon = currentPage * cardsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - cardsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div
      class="bg-scroll bg-center absolute top-0 bottom-10 left-0 right-0 w-screen h-fit bg-no-repeat"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div class="flex flex-row bg-r-500 justify-between items-center pt-8 mb-5 ml-auto mr-auto">
        <div class="flex flex-row justify-between items-center mt-32 ml-auto mr-auto space-x-8">
          <label
            for="types"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Types
          </label>
          <select
            id="types"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="filterbytypes"
            onClick={(e) => handleTypeFilter(e)}
          >
            <option value="todos">All</option>
            <option value="normal">normal</option>
            <option value="fighting">fighting</option>
            <option value="flying">flying</option>
            <option value="poison">poison</option>
            <option value="ground">ground</option>
            <option value="rock">rock</option>
            <option value="bug">bug</option>
            <option value="ghost">ghost</option>
            <option value="steel">steel</option>
            <option value="fire">fire</option>
            <option value="water">water</option>
            <option value="grass">grass</option>
            <option value="electric">electric</option>
            <option value="psychic">psychic</option>
            <option value="ice">ice</option>
            <option value="dragon">dragon</option>
            <option value="dark">dark</option>
            <option value="fairy">fairy</option>
            <option value="unknown">unknown</option>
            <option value="shadow">shadow</option>
          </select>

          <label
            for="source"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Source
          </label>
          <select
            id="source"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="filterByOrigin"
            onClick={(e) => handleOriginFilter(e)}
          >
            <option value="api">Api</option>
            <option value="created">Database</option>
          </select>

          <label
            for="nameSort"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Sort by
          </label>
          <select
            id="nameSort"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="sort"
            onChange={(e) => handleSort(e)}
          >
            <option value="asc">Ascendent</option>
            <option value="des">Descendent</option>
          </select>

          <label
            for="strongSort"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Sort by
          </label>
          <select
            id="strongSort"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="sortByAttack"
            onClick={(e) => handleSortByAttack(e)}
          >
            <option value="more">More strong</option>
            <option value="less">Less strong</option>
          </select>

          <button
            type="button"
            class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-lato rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-auto mt-auto"
            onClick={(e) => handleClick(e)}
          >
            Reload
          </button>
        </div>
      </div>

      <div className="paginated">
        <Pagination
          cardsPerPage={cardsPerPage}
          allPokemons={allPokemons.length}
          pagination={pagination}
        />
      </div>
      <div className="cardsContainer">
        {loading ? <Loading /> : <CardsContainer pokemons={currentPokemons} />}
      </div>
    </div>
  );
};

export default Home;
