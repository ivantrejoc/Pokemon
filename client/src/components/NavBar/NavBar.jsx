import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import logoPokemon from "../../assets/pokemon-logo.png";

const NavBar = () => {

  const location = useLocation();
  return ( 
      <div class= "bg-red-600 h-50 fixed top-0 left-0 w-full p-2 flex flex-row justify-items-auto border-blue">
        <img src={logoPokemon} class="h-20 ml-1 mr-10" alt="logo" />
        <ul class="flex flex-row justify-items-center mt-auto mb-auto justify-center">
          <li className="p-2 mr-5 ml-5 tracking-wider flex-none transition duration-200 hover:scale-110 mt-auto mb-auto">
          {location.pathname !== "/home" && <Link className="text-m text-white text-2xl fontPoppins hover:fontPoppinsB font-lato font-bold"
    to="/home">Home</Link>}


          </li>
          <li className="p-2 mr-5 ml-5 tracking-wider flex-none transition duration-200 hover:scale-110 mt-auto mb-auto">
          {location.pathname !== "/create" && <Link className="text-m text-white text-2xl fontPoppins hover:fontPoppinsB font-lato font-bold" to="/create">Create Pokemon</Link>}
          </li>
          <li class= "p-2 mr-5 ml-5 mt-auto mb-auto justify-self-end">
          <SearchBar/>
          </li>
        </ul>     
      
      
      
    </div> 


    



    
      
   
    






    
  );
};


export default NavBar;