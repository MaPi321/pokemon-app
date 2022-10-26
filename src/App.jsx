import { Navbar } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import FormPokemon from "./componenets/forms/FormPokemon";
import Layout from "./componenets/Layout";

import Pokemon from "./componenets/Pokemon";
import SearchPokemon from "./componenets/SearchPokemon";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Pokemon />}></Route>
          <Route path="pokemon" element={<Pokemon />}></Route>
          <Route path="search" element={<FormPokemon />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
