import { useNavigate } from "react-router-dom";
import videoPokemon from "../../assets/pokemon-video.mp4";
import logoPokemon from "../../assets/pokemon-logo.png";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="@apply relative w-screen h-screen top-0 inset-x-0; flex flex-row justify-center">
      <video
        autoPlay
        loop
        muted
        className="@apply w-screen h-screen object-cover fixed z-[-1] inset-0;"
      >
        <source src={videoPokemon} type="video/mp4" />
      </video>

      <div class="max-w-sm bg-[rgba(100,149,237,0.7)] border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 absolute mt-[10vh] mb-auto ml-auto mr-auto">
        <img class="rounded-t-lg" src={logoPokemon} alt="logoPokemon" />

        <div class="p-5">
          <h4 class="mb-2  text-3xl font-lato  font-bold tracking-tight text-white dark:text-white">
            ¡Gotta Catch 'Em all!
          </h4>

          <p class="mb-3 font-normal text-xl text-white dark:text-gray-400">
            Discover the fascinating world of pokemon.
          </p>

          <p class="mb-3 font-normal text-xl text-white dark:text-gray-400">
            Dive into an adventure with extraordinary creatures, epic battles,
            and unforgettable friendships.
          </p>

          <p class="mb-3 font-normal text-xl text-white dark:text-gray-400">
            Become in a pokemon master exploring all pokemon´s features and
            create your own Pokemons just in one site.
          </p>
          <a
            href="http://localhost:3000/home"
            class="inline-flex items-center px-3 py-2 text-sm font-normal font-lato text-center text-white bg-[#ff3f3f] rounded-lg hover:bg-[#d32f2f] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            ¡Let´s go!
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* <div
        class="flex flex-col items-center w-[33vw] h-fit bg-[rgba(100,149,237,0.7)] bg-center text-center transition-transform duration-[0.25s] ease-[ease-out] shadow-[-11px_11px_1px_rgba(0,0,0,0.3)] absolute mt-[10vh] mb-auto mx-[33vw] my-[30px] p-2.5 rounded-[25px] border-[solid] border-[215,0,0.7)_1.5px] -moz-osx-font-smoothing:grayscale
  overflow"
      >
        <img class="rounded-t-lg" src={logoPokemon} alt="logoPokemon" />

        <div class="p-5">
          <h3 class="mb-4 text-2xl font-lato leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
            ¡Gotta Catch 'Em all!
          </h3>

          <p class="mb-3 text-2xl font-lato text-white dark:text-gray-400">
            ¡Discover the fascinating world of pokemon!
            
          </p>
          <p class="mb-3 text-2xl font-lato text-white dark:text-gray-400">
            Dive into an adventure with extraordinary creatures, epic battles,
            and unforgettable friendships.
          </p>
          <p class="mb-3 text-2xl font-lato text-white dark:text-gray-400">
            Become in a pokemon master exploring all pokemon´s features and
            create your own Pokemons just in one site.
          </p>
          <div className="card-actions justify-center">
            <button
              className=" @apply flex flex-col bg-[#ff3f3f] hover:bg-[#d32f2f] text-[white] w-[10vw] h-[5vh] rounded items-center text-[medium] d cursor-pointer shadow-[inset_0_0_5px_#808080] mt-[5vh] px-5 py-2.5 border-[solid] border-[1px] font-lato "
              onClick={() => {
                navigate("/Home");
              }}
            >
              ¡Let´s go!
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Landing;
