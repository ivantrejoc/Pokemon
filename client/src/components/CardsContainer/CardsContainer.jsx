import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";
import "./cardsContainer.css";
import { useSelector } from "react-redux";

const CardsContainer = ({ pokemons }) => {
  const [loading, setLoading] = useState(true); // Estado para controlar si está cargando la información
  const pokemonByName = useSelector((state) => state.pokemonByName);
  const pokemonList = pokemonByName.length > 0 ? pokemonByName : pokemons;

  useEffect(() => {
    if (pokemonList.length > 0) {
      setLoading(false); // Cambia el estado a "false" cuando la información está cargada
    }
  }, [pokemonList]);
  //OJO TYPES ESTÁN LLEGANDO EN NULL
  return (
    <div class="grid grid-rows-3 grid-flow-col gap-7 ml-auto mr-auto mb-12">
      {loading ? (
        <Loading />
      ) : (
        pokemonList?.map((pokemon) => (
          <div key={pokemon.id}>
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              sprites={pokemon.sprites}
              types={pokemon.types.join(" - ")}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default CardsContainer;
