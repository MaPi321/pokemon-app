import React from "react";
import CardsPokemon from "./CardsPokemon";
import "./cards.css";

// export const Cards = () => {
//   re
// }

function Cards({ results }) {
  return (
    <div className="container">
      <ul className="cards">
        {results.map((pokemon) => (
          <li className="card-item" key={pokemon.name}>
            <CardsPokemon url={pokemon.url} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cards;
