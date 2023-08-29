import React from "react";
import "./pagination.css";

const Pagination = ({ cardsPerPage, allPokemons, pagination }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allPokemons / cardsPerPage); i++) {
    pageNumbers.push(i);
     }

  return (
    <div>
      <ul className="paginado">
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li className="items" key={number}>
              <button className="button" onClick={() => pagination(number)}>{number}</button>;
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Pagination;
