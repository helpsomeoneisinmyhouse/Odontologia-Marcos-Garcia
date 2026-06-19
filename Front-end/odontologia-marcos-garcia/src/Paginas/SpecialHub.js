import React, {useState} from "react";
import {TituloAzul,TituloNaranja} from "../componentes/Titulo"
//import MainLine from "./mainline";
import styled from 'styled-components';
//import Hub from "./Hub";
import styles from '../index.module.css'
import Boton from '../elementos/boton';
import FormularioInicioSesion from "../componentes/FormularioInicioSesion";


const SpecialHub = () => {
  const [sesion, cambiarEstadoSesion]= useState(false);
  return(
    <div className={styles.contenedor}>
    {sesion === true ?
      <>
      <p>aca irian las paginas especiales para clientes, secretarias y doctores</p>
      <Boton rojo onClick={()=> cambiarEstadoSesion(false)}>cerrar sesion</Boton>
      </>
      :
      <>
        <h1>No has iniciado sesion</h1>
        <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion}/>
        {/*<Boton verde anchocompleto onClick={()=> cambiarEstadoSesion(true)}>iniciar sesion</Boton>*/}
      </>
    }
    </div>
  )
}
const Parrafo = styled.p`
  margin: 10px 0;
`;

export default SpecialHub