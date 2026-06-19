import React, {useState} from "react";
import {TituloAzul,TituloNaranja} from "../componentes/Titulo"
//import MainLine from "./mainline";
import styled from 'styled-components';
//import Hub from "./Hub";
import styles from '../index.module.css'
import Boton from '../elementos/boton';
import FormularioInicioSesion from "../componentes/FormularioInicioSesion";
import ClienteIndex from "./paginas_especificas/cliente-index";
import DoctorIndex from "./paginas_especificas/doctor-index";
import SecreIndex from "./paginas_especificas/secretaria-index";


const SignUp = () => {
  const [sesion, cambiarEstadoSesion]= useState(false);
  const [specific, cambiarPaginaEspecifica] = useState('cliente');
  return(
    <div className={styles.contenedor}>
    {sesion === true ?
      <>
      {/*<p>aca irian las paginas especiales para clientes, secretarias y doctores</p>*/}
        {(() => {
          switch(specific) {
            case "doctor": return <DoctorIndex/>;
            case "cliente": return <ClienteIndex/>;
            case "secretaria": return <SecreIndex/>;
            default: return <ClienteIndex/>
          }
        })()}
      <Boton rojo onClick={()=> cambiarEstadoSesion(false)}>cerrar sesion</Boton>
      </>
      :
      <>
        <h1>No has iniciado sesion</h1>
        <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion} cambiarPaginaEspecifica={cambiarPaginaEspecifica}/>
        {/*<Boton verde anchocompleto onClick={()=> cambiarEstadoSesion(true)}>iniciar sesion</Boton>*/}
      </>
    }
    </div>
  )
}
const Parrafo = styled.p`
  margin: 10px 0;
`;

export default SignUp