import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../redux/actions";


const SearchBar = (props) => {
  const [nameTosearch, setNameToSearch] = useState("");
  const [searching, setSearching] = useState(false);
  const [pokemonFound, setPokemonFound] = useState(false);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setNameToSearch(value);
  };

  const dispatch = useDispatch();

  const handleSearch = () => {
    if (!nameTosearch) {
      alert("You must type a pokemon name");
    } else {
      setSearching(true); // Inicia la búsqueda
      setPokemonFound(false); // Reinicia el estado de Pokémon encontrado

      dispatch(getPokemonByName(nameTosearch))
        .then(() => {
          setSearching(false);
          setPokemonFound(true);
        })
        .catch((error) => {
          setSearching(false);
          alert("Pokemon not found");
        });
    }
  };

  return (
    <div class="flex flex-row justify-end items-end">
      <input
        type="search"
        id="search-navbar"
        class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-10"
        onChange={handleInputChange}
        placeholder="Search Pokemon..."
      />

      <button
        type="button"
        class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-lato rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-auto mt-auto h-10 "
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
