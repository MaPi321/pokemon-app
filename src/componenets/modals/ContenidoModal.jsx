import React from "react";

const ContenidoModal = ({ imagen, nombre, peso, tipo, habilidad }) => {
  return (
    <>
      <img src={imagen} alt="pokemon" />
      <h6>CARACTERISTICAS</h6>
      <ol>
        <li>Nombre: {nombre}</li>
        <li>Peso: {peso / 10} kg</li>
        <li>Tipo: {tipo}</li>
        <li>Habilidad principal: {habilidad}</li>
      </ol>
    </>
  );
};

export default ContenidoModal;
