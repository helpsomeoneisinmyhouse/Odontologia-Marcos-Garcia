import React from "react";
import {TituloAzul,TituloNaranja} from "./Titulo";
import styled from 'styled-components';

const Aula = () => {
    const name = "Blatooo";
    const color = "blue"
    const clase = "blah blah blah"
    const instructor = ["pedro","maria","jhon","pepardo"]

  return (
      <>
        <TituloAzul/>
        <TituloNaranja/>
        <h1 style={{color:color}}>el pendejo se llama {name}</h1>
        <Parrafo>agarralo y potemking bustereao</Parrafo>
        {clase && <p>lo siguiente que dire es: {clase}</p>}
        <h4>estos son los profesores:</h4>
        <ul>
          {instructor.map((instructor, index)=>{return <li key={index}>{instructor}</li>})}
        </ul>
      </>
  );
}
const Parrafo = styled.p`
  margin: 10px 0;
`;

export default Aula