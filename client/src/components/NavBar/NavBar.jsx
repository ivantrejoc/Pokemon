import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {

  const location = useLocation();
  return (
    <div className="navCont">
      {location.pathname !== "/home" && <Link className="navButtons" to="/home">Home</Link>}
      {location.pathname !== "/create" && <Link className="navButtons" to="/create">Create Pokemon</Link>}
      
    </div>
  );
};


export default NavBar;