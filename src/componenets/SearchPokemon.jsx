import React from "react";
import FetchCharacters from "./FetchCharacters";

function SearchPokemon({ nombre }) {
  const estado = FetchCharacters(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
  const { cargando, data } = estado;
  return (
    <div>
      {cargando ? (
        <h1></h1>
      ) : (
        <div className="card " style={{ width: "20rem" }}>
          <div className="card-header">
            <h3 className="card-text text-capitalize">{data.forms[0].name}</h3>
          </div>
          <div className="card-body">
            <img src={data.sprites.front_default} alt="pokemon" />
            <h6>CARACTERISTICAS</h6>
            <ol>
              <li>Nombre: {data.forms[0].name}</li>
              <li>Peso: {data.weight / 10} kg</li>
              <li>Tipo: {data.types[0].type.name}</li>
              <li>Habilidad principal: {data.abilities[0].ability.name}</li>
            </ol>
          </div>
          <div className="card-footer">
            <p>ポケモン Pokemon</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPokemon;
