import React from 'react';
import Carrousellogin from './Carrousellogin';
import axios from 'axios';
import { useState } from 'react';

function Registro() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);
    // const [confirmarPassword, setConfirmarPassword] = useState('');
  
    const handleRegistro = async () => {
      // Crear un objeto con los datos a enviar al backend
      const datosRegistro = {
        nombre,
        email,
        password,
        // confirmarPassword
      };
  
      // Realizar una solicitud POST al backend utilizando axios
      await axios.post('https://8d2b-2800-484-9f86-4eec-8517-9e27-63f7-f7bf.ngrok-free.app/api/usuarios/', datosRegistro)
        .then(response => {
          // Manejar la respuesta del backend si es necesario
          alert(response.data.msg);
          setIsRegistered(true);
          console.log(response.data);
        })
        .catch(error => {
          // Manejar errores de la solicitud si es necesario
          console.error(error);
        });
    };

  return (
    <div className="container my-5 ">
      <div className="card">
        <div className="row g-0 align-items-center justify-content-center">
          <div className="col-md-5">
            <Carrousellogin/>
          </div>
          <div className="col-md-7 reescalado">
            <div className="card-body d-flex flex-column align-items-center">
              <div className="d-flex flex-row mt-2">
                <i className="fas fa-cubes fa-3x me-3" style={{ color: '#ff6219' }}></i>
                <h1 className="h1 fw-bold mb-0">-logito- Don Alquiles</h1>
              </div>
              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Regístrate</h5>
              
              <div className="mb-4">
                <input type="text" className="form-control form-control-lg" id="nombre" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
              </div>
              <div className="mb-4">
                <input type="email" className="form-control form-control-lg" id="email" placeholder="Correo electrónico" onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="mb-4">
                <input type="password" className="form-control form-control-lg" id="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}/>
              </div>
              {/* <div className="mb-4">
                <input type="password" className="form-control form-control-lg" id="confirmarPassword" placeholder="Confirmar contraseña" onChange={(e) => setConfirmarPassword(e.target.value)}/>
              </div> */}

              <button className="btn btn-dark btn-lg mb-4 px-5" onClick={handleRegistro}>Registrarse</button>
              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>¿Ya tienes una cuenta? <a href="/react-ecommerce-template#/" style={{ color: '#393f81' }}>Inicia sesión aquí</a></p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
