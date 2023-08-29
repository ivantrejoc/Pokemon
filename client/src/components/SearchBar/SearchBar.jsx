import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../redux/actions";
import Loading from "../Loading/Loading";
import "./searchBar.css";

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
  
  
  const handleSearch= () => {
    if(!nameTosearch) {
      alert("You must type a pokemon name")
    }else{
      setSearching(true); // Inicia la búsqueda
      setPokemonFound(false); // Reinicia el estado de Pokémon encontrado

      dispatch(getPokemonByName(nameTosearch))
      .then(()=> {
        setSearching(false);
        setPokemonFound(true);
      })
      .catch((error)=>{
        setSearching(false);
        alert("Pokemon not found")
      })
    }  

     };

      

  return (
    <div className="searchCont">
      
        <input
        className="searchInput"
          type="search"
          
          onChange={handleInputChange}
          placeholder="Search Pokemon..."
        />
        <button className="searchButton" onClick={handleSearch}>Search</button>
     
    </div>
  );
};

export default SearchBar;
