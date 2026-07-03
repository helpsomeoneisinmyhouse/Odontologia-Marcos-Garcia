import React, { useState } from 'react';
import styles from '../styles/components.module.css'; // Importante: importar los estilos

const AppointmentForm = ({ user, onSuccess }) => {

  const [formData, setFormData] = useState({
    id_paciente: '',
    name_paciente: '',
    genre_paciente: '',
    birth_paciente: '',
    dir_paciente: '',
    telf_paciente: '',
    date_cita: '',
    time_cita: '',
    desc_cita: '',
    id_user:'',
    name_user:'',
    email_user:'',
    key_user:'',
    logic_user:'',
    
  });

  async function fetchCitaCompleta(params) {
    const API = 'http://127.0.0.1:8080/api/citaCompleta' 
     
    const name_user = document.getElementById('name_user').value
    const email = document.getElementById('email_user').value
    const key = document.getElementById('key_user').value
    const name_paciente = document.getElementById('name_paciente').value
    const genre = document.getElementById('genre_paciente').value
    const birth = document.getElementById('birth_paciente').value
    const dir = document.getElementById('dir_paciente').value
    const telf = document.getElementById('telf_paciente').value
    const date = document.getElementById('date_cita').value
    const time = document.getElementById('time_cita').value
    const desc = document.getElementById('desc_cita').value

    const response = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name_user: name_user,
          email_user: email,
          key_user: key,
          fk_rol: 1,
          logic_user: 'A',      
          name_paciente : name_paciente,
          genre_paciente : genre,
          birth_paciente : birth,
          dir_paciente : dir,
          telf_paciente : telf,
          logic_paciente: 'A',
          fk_doctor: 1,
          date_cita : date,
          time_cita : time,
          desc_cita : desc,
          status_cita : 'PENDIENTE',
          logic_cita: 'A'

        })
      });

      const data = await response.json();
      console.log(data)
      if (!response.ok) throw new Error('Error creating User')
        
       
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
          fetchCitaCompleta(e)
        } catch (error) {
            console.error("ERROR!:", error);
        }

    console.log("Registrando cita para:", formData.name_paciente);
    onSuccess(); 
  };

  return (
    <div className={styles.card}> {/* Aplica el contenedor de tarjeta blanca [2] */}
      <h2>Agenda una cita!</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Cada campo debe ir en un div 'formControl' para que se vea ordenado */}
        <div className={styles.formControl}>
          <label>Nombre completo</label>
          <input 
            id='name_paciente'
            type="text" 
            placeholder="tu nombre" 
            required 
            onChange={(e) => setFormData({...formData, name_paciente: e.target.value})} 
          />
        </div>

        <div className={styles.formControl}>
          <label>Sexo del paciente</label>
          <select id='genre_paciente' required onChange={(e) => setFormData({...formData, genre_paciente: e.target.value})}>
            <option value="">Select...</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>
        </div>

        <div className={styles.formControl}>
          <label>Fecha de nacimiento</label>
          <input 
            id='birth_paciente'
            type="date" 
            required 
            onChange={(e) => setFormData({...formData, birth_paciente: e.target.value})} 
          />
        </div>

        <div className={styles.formControl}>
          <label>Dirección</label>
          <input
            id='dir_paciente' 
            type="text" 
            placeholder="dirección de su hogar" 
            onChange={(e) => setFormData({...formData, dir_paciente: e.target.value})} 
          />
        </div>

        <div className={styles.formControl}>
          <label>Teléfono</label>
          <input
            id='telf_paciente'
            type="tel" 
            placeholder="XXXX-XXXXXXX" 
            onChange={(e) => setFormData({...formData, telf_paciente: e.target.value})} 
          />
        </div>

        <hr className={styles.divider} />
        <h3>Selecciona tu cita</h3>

        <div className={styles.formControl}>
          <label>Fecha deseada</label>
          <input 
            id='date_cita'
            type="date" 
            required 
            onChange={(e) => setFormData({...formData, date_cita: e.target.value})} 
          />
        </div>

        <div className={styles.formControl}>
          <label>Hora</label>
          <select id='time_cita' required onChange={(e) => setFormData({...formData, time_cita: e.target.value})}>
            <option value="">Select...</option>
            <option value="60">1 hora</option>
            <option value="120">2 horas</option>
          </select> 
        </div>

        <hr className={styles.divider} />
        <h3>Crea tu usuario</h3>

        <div className={styles.formControl}>
          <label>Nombre del Usuario</label>
          <input
            id='name_user' 
            type="text" 
            required 
            onChange={(e) => setFormData({...formData, name_user: e.target.value})} 
          />
        </div>

        <div className={styles.formControl}>
          <label>Correo Electronico</label>
          <input
            id='email_user' 
            type="email" 
            required 
            onChange={(e) => setFormData({...formData, email_user: e.target.value})} 
          />
        </div>

        <div className={styles.formControl}>
          <label>Contrasena</label>
          <input
            id='key_user' 
            type="password" 
            required 
            onChange={(e) => setFormData({...formData, key_user: e.target.value})} 
          />
        </div>

        <hr className={styles.divider} />
        <h3>describenos, para que quieres la cita?</h3>
        <div className={styles.formControl}>
          <label>descripcion de tu problema</label>
          <input
            id='desc_cita' 
            type="text" 
            required 
            className={styles.textarea}
            onChange={(e) => setFormData({...formData, desc_cita: e.target.value})} 
          />
        </div>

        <button type="submit" className={styles.btnPrimary}>
          Agendar Cita
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;