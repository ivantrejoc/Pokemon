import "./card.css";
import { Link } from "react-router-dom";

const Card = ({id, name, sprites, types}) => {
   
  
  return (
    // <div className="card" >
    //   
    //     <p className="name"> {name}</p>
    //     <img className="image" src={sprites} alt={name} />
    //   <p className="types"> {types}</p>
    //   
      
    // </div>


<Link to={`/detail/${id}`}>
  
<div class="w-full max-w-sm h-full bg-yellow-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <img class="p-8 rounded-t-lg w-60 h-60 mb-2" src={sprites} alt={name} />
    
    <div class="px-5 pb-5">
       
            <h3 class="text-3xl font-lato font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>

        
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>
</Link>





  );
}; //pruebas

export default Card;
