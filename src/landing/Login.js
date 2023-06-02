import React from 'react';
import Carrousellogin from './Carrousellogin';
import { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Logo from '../../src/landing/billar-icon.png';


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoged, setIsLoged] = useState(false);
  const [redirectToInicio, setRedirectToInicio] = useState(false);

  const handleLogin = async () => {
    // Crear un objeto con los datos a enviar al backend
    const datosLogin = {
      email,
      password,
      // confirmarPassword
    };

    
    // Realizar una solicitud POST al backend utilizando axios
    try {
      const response = await axios.post('http://ec2-3-82-214-192.compute-1.amazonaws.com:3000/api/usuarios/login', datosLogin);
      if (response.status === 200) {
        localStorage.setItem('rol',response.data.rol);
        setIsLoged(true);
        // alert('Ha iniciado sesión satisfactoriamente!');
        setRedirectToInicio(true);
      } else {
        alert('Ocurrió un error en el inicio de sesión.');
      }
    } catch (error) {
      console.error(error);
      alert('Ocurrió un error en la solicitud.');
    }

  };

      if (redirectToInicio) {
        return <Redirect to="/inicio" />;
      }

  return (
    <div className="container my-5 ">
      {/* <div className="card" style={{ background: 'red' }}> */}
        <div className="card">
          <div className="row g-0 align-items-center justify-content-center">
            <div className="col-md-5">
              {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="rounded-start w-100" /> */}
              <Carrousellogin/>
            </div>
            <div className="col-md-7 reescalado">
              <div className="card-body d-flex flex-column align-items-center">
                <div className="d-flex flex-row mt-2">
                  <i className="fas fa-cubes fa-3x me-3" style={{ color: '#ff6219' }}></i>
                  {/* <h1 className="h1 fw-bold mb-0">-logito- Don Alquiles</h1> */}
                  <h1 className="h1 fw-bold mb-0">
                    <img src={Logo} alt="Logo de Don Alquiles" style={{ width: '70px', height: 'auto' }} /> Don Alquiles
                  </h1>


                </div>
                <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Accede a tu cuenta</h5>
                
                <div className="mb-4">
                  <input type="email" className="form-control form-control-lg" id="email" placeholder="Correo electronico" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mb-4">
                  <input type="password" className="form-control form-control-lg" id="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <button className="btn btn-dark btn-lg mb-4 px-5" onClick={handleLogin}>Login</button>
                {/* <a className="small text-muted" href="/react-ecommerce-template#/">Olvidaste la contraseña?</a> */}
                <p className="mb-5 pb-lg-2" style={{ color: '#393f81', letterSpacing: '1px' }}>No tienes una cuenta? <a href="/react-ecommerce-template#/registro" style={{ color: '#393f81', letterSpacing: '1px', textDecoration: "none", fontWeight: "bold" }}>Registrate aqui</a></p>
                
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default Login;



