import "./card.css";
import { Link } from "react-router-dom";

const Card = ({id, name, sprites, types}) => {
   
  
  return (
    <div className="card" >
      <Link to={`/detail/${id}`}>
        <p className="name"> {name}</p>
        <img className="image" src={sprites} alt={name} />
      <p className="types"> {types}</p>
      </Link>
      
    </div>
  );
};

export default Card;
