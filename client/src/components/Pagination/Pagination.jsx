import React from "react";


const Pagination = ({
  cardsPerPage,
  allPokemons,
  pagination,
  currentPage  
}) => {

  
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allPokemons / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  
  
  return (
    <div class="flex flex-row items-center -space-x-px h-10 mb-4 mt-2text-base">
      <ul class="flex items-center -space-x-px h-10 text-base">
     
          <button
            class="fle items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => pagination(currentPage-1)} disabled={currentPage === 1}>
         
            <span class="sr-only">Previous</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
      
        {pageNumbers?.map((number) => (
            <li key={number}>
              <button
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                key={number}
                onClick={() => pagination(number)} disabled ={pageNumbers === number}
              >
                {number}
              </button>
            </li>
          ))}

        <li>
          <button
            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={ ()=> pagination(currentPage+1) } disabled={currentPage === pageNumbers.length}
          >
            <span class="sr-only">Next</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>

      {/* <ul className="paginado">
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li className="items" key={number}>
              <button className="button" onClick={() => pagination(number)}>{number}</button>;
            </li>
          ))}
      </ul> */}
    </div>
  );
};

export default Pagination;
