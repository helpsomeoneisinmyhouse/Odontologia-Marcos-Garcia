import React, {useState} from "react";

const FormularioInicioSesion = (props) => {
    const [usuario, cambiarUsuario] = useState('');
    const [clave, cambiarClave] = useState('');
    const cambiarEstado = (evento) => {
        if (evento.target.name === "usuario"){
            cambiarUsuario(evento.target.value)
        } else if (evento.target.name === "clave"){
            cambiarClave(evento.target.value)
        }}
    const validar = (evento) => {
        evento.preventDefault();
        if (usuario === "clase" && clave === "clase"){
            props.cambiarEstadoSesion(true);
        }else{
            alert("Datos Incorrectos");
            cambiarUsuario("")
            cambiarUsuario("")
        }
    }
    return(
        <form action="" onSubmit={validar}>
            <div>
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
            <button type="submit">Iniciar Sesion</button>
        </form>
    );
}

export default FormularioInicioSesion