import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../../template/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carrouselreserva from "../../landing/Carrouselreserva";
import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';


const iconPath =
  "M18.571 7.221c0 0.201-0.145 0.391-0.29 0.536l-4.051 3.951 0.96 5.58c0.011 0.078 0.011 0.145 0.011 0.223 0 0.29-0.134 0.558-0.458 0.558-0.156 0-0.313-0.056-0.446-0.134l-5.011-2.634-5.011 2.634c-0.145 0.078-0.29 0.134-0.446 0.134-0.324 0-0.469-0.268-0.469-0.558 0-0.078 0.011-0.145 0.022-0.223l0.96-5.58-4.063-3.951c-0.134-0.145-0.279-0.335-0.279-0.536 0-0.335 0.346-0.469 0.625-0.513l5.603-0.815 2.511-5.078c0.1-0.212 0.29-0.458 0.547-0.458s0.446 0.246 0.547 0.458l2.511 5.078 5.603 0.815c0.268 0.045 0.625 0.179 0.625 0.513z";

function Reserva() {
  function changeRating(newRating) { }

  const [telefono, setTelefono] = useState('');
  const [fecha, setFecha] = useState('');
  const [horaEntrada, setHoraEntrada] = useState('');
  const [duracion, setDuracion] = useState(0);
  
  const [precio, setPrecio] = useState(0);
  const [selectedService, setSelectedService] = useState('');

  const handleSelectChange = (event) => {
    setSelectedService(event.target.value);
  };
  
  const precioServicios = {
    billar: 20000,
    tejo: 15000,
    futbol: 50000,
  }

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const form = document.getElementById('myForm');

  //   const formData = new FormData(form);
  //   console.log(formData);
  //   try {
  //     console.log(localStorage.getItem('token'))
  //     const response = await axios.post(
  //       'http://ec2-3-82-214-192.compute-1.amazonaws.com:3000/api/reservas/',
  //       formData,
  //       {
  //         headers: {
            
  //           "Authorization": "Bearer " + localStorage.getItem('token'),
            
  //         },
  //       }
  //     );
  //     console.log(response);
  //     // Aquí puedes realizar cualquier otra acción después de enviar los datos
  //     alert('Tu reserva se ha agendado satisfactoriamente');
  //   } catch (error) {
  //     console.error(error);
  //   }

  // };
      const handleSubmit = async (event) => {
        event.preventDefault();
        const form = document.getElementById('myForm');
        console.log(fecha);
        const formData = new FormData(form);
        console.log(formData);
        const response = await fetch(`http://ec2-3-82-214-192.compute-1.amazonaws.com:3000/api/reservas/crear`, {
          method: "POST",
          headers: {
            'Access-Control-Allow-Origin': '*',
            'id_usuario': localStorage.getItem('id_usuario')
          }, body: formData
        });
        const data = await response.json();
        console.log(response);
        alert('Tu reserva se ha agendado satisfactoriamente');
      };

    const handleCalcular = (event) => {
      event.preventDefault();
      for (let precioServicio in precioServicios) {
        if(selectedService == precioServicio) {
            const precio = duracion * precioServicios[precioServicio];
            setPrecio(precio)
        }

    }
    }
  const handleSelectHora = (event) => {
    setHoraEntrada(event.target.value);
  }

    const handleSelectServicio = (event) => {
      setSelectedService(event.target.value);
    };

    const handleSelectDuracion = (event) => {
      setDuracion(event.target.value);
    };

    const handleTelefono = (event) => {
      setTelefono(event.target.value);
    }
  return (
    <div>
      <div className="container mt-5 py-4 px-xl-5">
        <ScrollToTopOnMount />

        <nav aria-label="breadcrumb" className="bg-custom-light rounded mb-4">
          <ol className="breadcrumb p-3">
            <li className="breadcrumb-item">
              <Link className="text-decoration-none link-secondary" to="/inicio">
                Inicio
              </Link>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              Reserva
            </li>

          </ol>
        </nav>
        <div className="row mb-4">



          <div className="col-lg-6">
            <Carrouselreserva />
            {/*<div className="row">
            <div className="col-12 mb-4">
              <img
                className="border rounded ratio ratio-1x1"
                alt=""
                src={tejo}
              />
            </div>
          </div>*/}
          </div>


          <div className="col-lg-5">
            <div className="d-flex flex-column h-100">
              <h2 className="mb-1">Detalles de la reserva</h2>


              <hr />
              
              

              <form id='myForm' onSubmit={handleSubmit}>

                  <div class="md-6 mb-3">
                    <div className="mb-3">
                      <label htmlFor="servicio" className="form-label">Servicio</label>
                      <select className="form-select" id="servicio" name="servicio" value={selectedService} onChange={handleSelectServicio}>
                        <option value="">Selecciona el servicio</option>
                        <option value="futbol">Fútbol</option>
                        <option value="tejo">Tejo</option>
                        <option value="billar">Billar</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label value={fecha} className="form-label">Fecha</label>
                    <input type="date" className="form-control" id="fecha" name="fecha" />
                  </div>

                  <div className="mb-3">
                  <label value={duracion} className="form-label">Duración</label>
                  <select className="form-select" value={duracion} id="duracion" name="duracion" onChange={handleSelectDuracion}>
                    <option value="">Selecciona una duración</option>
                    <option value="1">1 Hora</option>
                    <option value="2">2 Hora</option>
                    <option value="3">3 Hora</option>
                    <option value="4">4 Hora</option>
                    <option value="5">5 Hora</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Hora entrada</label>
                  <input type="time" className="form-control" id="hora" name="hora" value={horaEntrada} onChange={handleSelectHora}/>
                </div>

                  <div className="mb-3">
                  <label  className="form-label">Teléfono</label>
                  <input type="tel" value={telefono} className="form-control" id="telefono" name="telefono" onChange={handleTelefono}/>
                </div>

                <div className="mb-3 d-flex">
                  <input type="text" className="form-control" id="precio" value={precio} name="precio" placeholder="Precio" defaultValue="Precio" disabled />
                  <button className="btn btn-primary" id="calcularPrecio" style={{ width: '200px', height: 'auto', marginLeft: '5px' }} onClick={handleCalcular}>Calcular precio</button>
                </div>

                  <div class="row">

                    <div class="col-md-8 mb-3">
                      <div className="col text-end">
                        <button type="submit" className="btn btn-success py-2 w-50"onClick={handleSubmit}>Reservar</button>
                      </div>
                    </div>

                  </div>

                  </form>

              
             
            </div>
          </div>
        </div>

      </div>

      <div id="contactenos" className="d-flex flex-column bg-white py-4 ">
        <h5 className="text-center mb-3">Sigue nuestras páginas</h5>
        <div className="d-flex justify-content-center">

          <a href="!#" className="me-3">
            <a href="https://facebook.com">
              <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
            </a>
          </a>
          <a href="!#">
            <a href="https://instagram.com">
              <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
            </a>
          </a>
          <a href="!#" className="ms-3">
            <a href="https://twitter.com">
              <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
            </a>
          </a>
        </div>
      </div>

    </div>
  );

}

export default Reserva;