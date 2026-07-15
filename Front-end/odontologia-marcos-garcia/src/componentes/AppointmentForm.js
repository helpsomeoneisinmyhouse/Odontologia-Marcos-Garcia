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
    date_cita_1: '',
    date_cita_2: '',
    time_cita: '',
    desc_cita: '',
    id_user:'',
    name_user:'',
    email_user:'',
    key_user:'',
    logic_user:'',
    
  });

  async function postCitaCompleta(params) {
    const API = 'http://127.0.0.1:8080/api/citaCompleta' 
     
    const name_user = document.getElementById('name_user').value
    const email = document.getElementById('email_user').value
    const key = document.getElementById('key_user').value
    const name_paciente = document.getElementById('name_paciente').value
    const genre = document.getElementById('genre_paciente').value
    const birth = document.getElementById('birth_paciente').value
    const dir = document.getElementById('dir_paciente').value
    const telf = document.getElementById('telf_paciente').value
    const date1 = document.getElementById('date_cita_1').value
    const date2 = document.getElementById('date_cita_2').value
    const time = document.getElementById('time_cita').value
    const desc = document.getElementById('desc_cita').value

    const date = `${date1}T${date2}:00.000Z`

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
    let min = 8
    let max = 18
    let val = document.getElementById('date_cita_2').value

    val = val.replace(":00","")
    val = parseInt(val)

    console.log(min + " " + max + " " + val)

    if (val >= min && val <= max){
    
      try {
          postCitaCompleta(e)
        } catch (error) {
            console.error("ERROR!:", error);
        }

      console.log("Registrando cita para:", formData.name_paciente);
      onSuccess(); 

    } else {
      document.getElementById('date_cita_2').value = ""
      alert('el horario de trabajo va entre las 8:00 AM y las 6:00 PM')
    }

  };

  function enforceMinMax(el) {
    let min = el.target.min
    let max = el.target.max
    let val = el.target.value

    min = min.replace(":00","")
    max = max.replace(":00","")
    val = val.replace(":00","")

    console.log(min + " " + max + " " + val)

    if (parseInt(val) < parseInt(min)) {
      val = min;

      let finalValue = `${val}:00`
      return finalValue
    }
    if (parseInt(val) > parseInt(max)) {
      val = max;

      let finalValue = `${val}:00`
      return finalValue
    }
  }

  if (4 < 5) {
    console.log('SI')
  }

  return (
    <div className={styles.card}>
      <h2>Agenda una cita!</h2>
      
      <form onSubmit={handleSubmit}>
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
            id='date_cita_1'
            type="date" 
            required 
            onChange={(e) => setFormData({...formData, date_cita_1: e.target.value})} 
          />
          <input 
            id='date_cita_2'
            type="time" 
            required 
            onChange={(e) => {
              setFormData({...formData, date_cita_2: e.target.value})}} 
          />

        </div>

        <div className={styles.formControl}>
          <label>Hora</label>
          <select id='time_cita' required onChange={(e) => setFormData({...formData, time_cita: e.target.value})}>
            <option value="">Select...</option>
            <option value="1">1 hora</option>
            <option value="2">2 horas</option>
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
          <textarea
          id='desc_cita'
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