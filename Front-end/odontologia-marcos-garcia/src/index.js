import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Aula from './componentes/Aula';
import styles from './index.module.css'
import Boton from './elementos/boton';
import FormularioInicioSesion from './componentes/FormularioInicioSesion';

const App = () => {
  const [sesion, cambiarEstadoSesion]= useState(false);
  return(
    <div className={styles.contenedor}>
    {sesion === true ?
      <>
      <Aula/>
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
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)




