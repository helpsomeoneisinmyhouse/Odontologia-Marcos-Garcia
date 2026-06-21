import React, {useState} from "react";
import styles from '../styles/components.module.css'

const Login = (props) => {
    const [usuario, cambiarUsuario] = useState('');
    const [clave, cambiarClave] = useState('');
    const [specific, cambiarPaginaEspecifica] = useState('');
    //const [isAuthenticated, setIsAuthenticated] = useState(false);

    const cambiarEstado = (evento) => {
        if (evento.target.name === "usuario"){
            cambiarUsuario(evento.target.value)
        } else if (evento.target.name === "clave"){
            cambiarClave(evento.target.value)
        }else if (evento.target.name === "specific"){
            cambiarPaginaEspecifica(evento.target.value)
        }}
        
    const validar = (evento) => {
        evento.preventDefault();

        if (usuario === "clase" && clave === "clase") {

            props.onLogin(specific, { nombre: usuario });
        } else {
            alert("Datos Incorrectos");
            cambiarUsuario("");
            cambiarClave("");
        }
};

    
    return(
        <div>
            <form action="" onSubmit={validar} className={styles.card}>
            <div>
              <h3>Inicia sesion!</h3>
                <label htmlFor="usuario">Usuario</label>
                <input 
                    type="text" 
                    name="usuario" 
                    id="usuario" 
                    value={usuario}
                    onChange={cambiarEstado}
                />
            </div>
            <div>
                <label htmlFor="clave">Clave</label>
                <input 
                type="password" 
                name="clave" 
                id="clave"
                value={clave}
                onChange={cambiarEstado}
                />
            </div>
            <div>
                <label htmlFor="specific">Pagina Especifica</label><br/>
                <input type="radio" id="doctor" name="specific" value="doctor" onChange={cambiarEstado}/>
                <label for="doctor">DOCTOR</label><br/>
                <input type="radio" id="cliente" name="specific" value="cliente" onChange={cambiarEstado}/>
                <label for="cliente">CLIENTE</label><br/>
                <input type="radio" id="secretaria" name="specific" value="secretaria" onChange={cambiarEstado}/>
                <label for="secretaria">SECRETARIA</label>
            </div>
            <button type="submit">Iniciar Sesion</button>
        </form>
        </div>
        
    );
}

export default Login