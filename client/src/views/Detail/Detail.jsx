import Loading from "../../components/Loading/Loading";
import React,{ useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById, clearDetail } from "../../redux/actions";
import Background from "../../assets/background2.jpg";

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



  const [loading, setLoading] = useState(true); // Estado para controlar si está cargando
  const pokemonDetail = useSelector((state) => state.pokemonById);
  const { name, sprites, life, attack, defense, speed, height, weight, type } = pokemonDetail; 

  const navigate = useNavigate();

  return (
    <div class="flex flex-col justify-center items-center bg-scroll bg-center absolute top-0 bottom-20 left-0 right-0 w-screen h-screen bg-no-repeat"
    style={{ backgroundImage: `url(${Background})` }}>
     {loading ? <Loading/> : <div class="flex flex-row justify-center items-center max-w-lg max-h-full mt-56 mb-auto ml-auto mr-auto bg-yellow-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150">
        <div className="main">
          <h1 className="text-6xl m-2 mt-2 font-lato font-bold tracking-tight text-blue-800 dark:text-white">{name}</h1>
          <img class="p-8 rounded-t-lg w-64 h-64 mt-0 mb-2 mr-0 items-center hover" src={sprites} alt={name} />
        </div>

        <div class="text-xl mr-3 ml-0 font-lato font-semibold text-blue-800 dark:text-white">
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
       type="button"
       class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-lato rounded-lg text-sm px-5 py-2.5 text-center mb-auto mt-2"
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
