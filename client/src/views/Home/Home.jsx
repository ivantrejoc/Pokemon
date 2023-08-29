import SearchBar from "../../components/SearchBar/SearchBar";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Pagination from "../../components/Pagination/Pagination";
import Loading from "../../components/Loading/Loading";
import logoPokemon from "../../assets/pokemon-logo.png";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  filterByTypes,
  filterByOrigin,
  sortPokemons,
  sortPokemonsByAttack,
  clearPokemonByName
  
} from "../../redux/actions";

import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
    const [showCardsContainer, setShowCardsContainer] = useState(true);

    const [loading, setLoading] = useState(true); // Estado para controlar si está cargando

    useEffect(() => {
      dispatch(getPokemons())
        .then(() => {
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
  };

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
    <div className="home">
      <div className="barContainer">
        <img src={logoPokemon} className="titleImg" alt="logo" />
        <div className="filters">
          <select
            className="select"
            name="filterbytypes"
            onClick={(e) => handleTypeFilter(e)}
          >
            <option value="todos">Todos</option>
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

          <select
            className="select"
            name="filterByOrigin"
            onClick={(e) => handleOriginFilter(e)}
          >
            <option value="api">Api</option>
            <option value="created">Database</option>
          </select>

          <select
            className="select"
            name="sort"
            onChange={(e) => handleSort(e)}
          >
            <option value="asc">Ascendent</option>
            <option value="des">Descendent</option>
          </select>

          <select
            className="select"
            name="sortByAttack"
            onClick={(e) => handleSortByAttack(e)}
          >
            <option value="more">More strong</option>
            <option value="less">Less strong</option>
          </select>
        </div> 
        <button className="reload" onClick={(e)=>handleClick(e)}>
          Reload
        </button>       
        <SearchBar />
      </div>

      <div className="paginated">
        <Pagination
          cardsPerPage={cardsPerPage}
          allPokemons={allPokemons.length}
          pagination={pagination}
        />
      </div>
      <div className="cardsContainer">
      {loading ? <Loading/> : <CardsContainer pokemons={currentPokemons} />}
      </div>
    </div>
  );
};

export default Home;
