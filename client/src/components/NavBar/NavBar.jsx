import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import logoPokemon from "../../assets/pokemon-logo.png";

const NavBar = () => {
  const location = useLocation();
  return (
    <div>
      <nav class="bg-red-600 dark:bg-blue-400 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <img src={logoPokemon} class="h-20 ml-0 mr-10" alt="Pokemon logo" />

          <div class="flex md:order-2 items-end">
            <SearchBar />
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 md:p-0 mt-4   md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                {location.pathname !== "/home" && (
                  <Link
                    className="text-m text-white text-2xl  hover:font-bold font-lato"
                    to="/home"
                  >
                    Home
                  </Link>
                )}
              </li>
              <li>
                {location.pathname !== "/create" && (
                  <Link
                    className="text-m text-white text-2xl hover:font-bold font-lato"
                    to="/create"
                  >
                    Create Pokemon
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
