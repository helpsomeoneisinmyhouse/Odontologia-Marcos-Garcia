import React, { useState } from 'react';
import styles from '../styles/components.module.css'; // Importante: importar los estilos

const AppointmentForm = ({ user, onSuccess }) => {
  const [formData, setFormData] = useState({
    name_paciente: '',
    genre_paciente: '',
    birth_paciente: '',
    dir_paciente: '',
    telf_paciente: '',
    date_cita: '',
    time_cita: '',
    key_user: '',
    name_user: '',
    email_user: '',
    desc_cita: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí iría la lógica para conectar con el backend en PostgreSQL [3]
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
            type="text" 
            placeholder="tu nombre" 
            required 
            onChange={(e) => setFormData({...formData, name_paciente: e.target.value})} 
          />
        </div>

        <div className={styles.formControl}>
          <label>Sexo del paciente</label>
          <select required onChange={(e) => setFormData({...formData, genre_paciente: e.target.value})}>
            <option value="">Select...</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>
        </div>

        <div className={styles.formControl}>
          <label>Fecha de nacimiento</label>
          <input 
            type="date" 
            required 
            onChange={(e) => setFormData({...formData, birth_paciente: e.target.value})} 
          />
        </div>

        <div className={styles.formControl}>
          <label>Dirección</label>
          <input 
            type="text" 
            placeholder="dirección de su hogar" 
            onChange={(e) => setFormData({...formData, dir_paciente: e.target.value})} 
          />
        </div>

        <div className={styles.formControl}>
          <label>Teléfono</label>
          <input 
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
            type="date" 
            required 
            onChange={(e) => setFormData({...formData, date_cita: e.target.value})} 
          />
        </div>

        <div className={styles.formControl}>
          <label>Hora</label>
          <input 
            type="time" 
            required 
            onChange={(e) => setFormData({...formData, time_cita: e.target.value})} 
          />
        </div>

        <hr className={styles.divider} />
        <h3>Crea tu usuario</h3>

        <div className={styles.formControl}>
          <label>Nombre del Usuario</label>
          <input 
            type="text" 
            required 
            onChange={(e) => setFormData({...formData, name_user: e.target.value})} 
          />
        </div>

        <div className={styles.formControl}>
          <label>Correo Electronico</label>
          <input 
            type="email" 
            required 
            onChange={(e) => setFormData({...formData, email_user: e.target.value})} 
          />
        </div>

        <div className={styles.formControl}>
          <label>Contrasena</label>
          <input 
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