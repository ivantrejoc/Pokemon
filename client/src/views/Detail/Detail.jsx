import Loading from "../../components/Loading/Loading";
import React,{ useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById, clearDetail } from "../../redux/actions";
import "./detail.css";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch(); 
  
  useEffect(() => {
    dispatch(getPokemonById(id))
      .then(() => {
        setLoading(false); // Cambia el estado a "false" cuando los datos están cargados
      });

    return () => {
      dispatch(clearDetail());
    };
  }, [dispatch, id]);


  // useEffect(() => {
  //   dispatch(getPokemonById(id))
  //   return ()=> {
  //     dispatch(clearDetail());
  //   }
  // }, [dispatch]);

  const [loading, setLoading] = useState(true); // Estado para controlar si está cargando
  const pokemonDetail = useSelector((state) => state.pokemonById);
  const { name, sprites, life, attack, defense, speed, height, weight, type } = pokemonDetail; 

  const navigate = useNavigate();

  return (
    <div className="background">
     {loading ? <Loading/> : <div className="detailContent">
        <div className="main">
          <h1 className="detailName">{name}</h1>
          <img className="image" src={sprites} alt={name} />
        </div>

        <div className="cardDetail">
          <h2>Life: {life}</h2>
          <h2>Attack: {attack} </h2>
          <h2>Defense: {defense} </h2>
          <h2>Speed: {speed} </h2>
          <h2>Height: {height} </h2>
          <h2>Weight: {weight}</h2>
          <h2>Types: {type}</h2>
        </div>
      </div>
     }           

      <button
        className="buttonBack"
        onClick={() => {
          
          navigate("/Home");
        }}
      >
        Back to home
      </button>
    </div>
  );
};

export default Detail;
