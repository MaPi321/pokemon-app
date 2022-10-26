import React, { useState } from "react";
import FetchCharacters from "../FetchCharacters";
import ContenidoModal from "../modals/ContenidoModal";
import { ModalPokemon } from "../modals/ModalPokemon";

function CardsPokemon({ url }) {
  const estado = FetchCharacters(url);
  const { cargando, data } = estado;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {cargando ? (
        <h1></h1>
      ) : (
        <div className="card" style={{ width: "14rem" }}>
          <div className="card-header">
            <h5 className="card-tittle">{data.id}</h5>
          </div>
          <div className="card-body">
            <img src={data.sprites.front_default} alt="pokemon" />
          </div>
          <div className="card-footer">
            <p className="card-text text-capitalize">{data.forms[0].name}</p>
          </div>
          <button className="btn btn-dark" type="submit" onClick={handleShow}>
            Ver detalle
          </button>
          <ModalPokemon
            show={show}
            handleClose={handleClose}
            titulo={data.forms[0].name}
            contenido={
              <ContenidoModal
                imagen={data.sprites.front_default}
                nombre={data.forms[0].name}
                peso={data.weight}
                tipo={data.types[0].type.name}
                habilidad={data.abilities[0].ability.name}
              />
            }
          />
        </div>
      )}
    </div>
  );
}

export default CardsPokemon;
