import React, { useState } from "react";
import SearchPokemon from "../SearchPokemon";

function FormPokemon() {
  const [partialName, setPartialName] = useState("");
  const [name, setName] = useState("picachu");

  return (
    <div className="container text-center ">
      <h1>Buscar Pokemon</h1>

      <form>
        <label>Ingrese el pokemon</label>
        <br />
        <input
          type="text"
          placeholder="nombre"
          value={partialName}
          onChange={(e) => {
            setPartialName(e.target.value);
          }}
        />
        <br />
        <br />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            if (partialName.length == 0) return;
            setName(partialName);
          }}
        >
          submit
        </button>
      </form>
      <div className="justify-content-center">
        <SearchPokemon nombre={name.toLocaleLowerCase()} />
      </div>
    </div>
  );
}

export default FormPokemon;
