import { Link } from "react-router-dom";

const Card = ({ id, name, sprites, types }) => {
   return (
    <Link to={`/detail/${id}`}>
      <div class="flex flex-col justify-center items-center w-full max-w-xs h-full bg-yellow-300 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300">
        <img class="p-8 rounded-t-lg w-40 h-60 mb-2 hover" src={sprites} alt={name} />

        <div class="px-5 pb-5">
          <h3 class="text-3xl font-lato font-bold tracking-tight text-blue-800 dark:text-white">
            {name}
          </h3>

          <div class="flex items-center justify-between">
            <span class="text-normal font-lato font-semibold text-blue-800 dark:text-white">
              {types}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
