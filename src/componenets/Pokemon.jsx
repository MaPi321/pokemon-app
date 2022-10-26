import React, { useState } from "react";
import Cards from "./cards/Cards";
import FetchCharacters from "./FetchCharacters";

const Pokemon = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  const estado = FetchCharacters(url);

  const { cargando, data } = estado;

  return (
    <div className="container">
      <h1 className="text-center m-auto ">Lista De Pokemones</h1>
      <div className="container m-auto text-center">
        <button
          onClick={() => setUrl(data.previous)}
          className="m-2 btn btn-dark "
        >
          Anterior
        </button>
        <button onClick={() => setUrl(data.next)} className="btn btn-dark">
          Siguiente
        </button>
      </div>

      {cargando ? (
        <h1></h1>
      ) : (
        <div>
          <Cards results={data.results}></Cards>

          <div className="container m-auto text-center">
            <button
              onClick={() => setUrl(data.previous)}
              className="m-2 btn btn-dark"
            >
              Anterior
            </button>
            <button onClick={() => setUrl(data.next)} className="btn btn-dark">
              Siguiente
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
