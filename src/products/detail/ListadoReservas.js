import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../../template/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carrouselreserva from "../../landing/Carrouselreserva";
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


const iconPath =
  "M18.571 7.221c0 0.201-0.145 0.391-0.29 0.536l-4.051 3.951 0.96 5.58c0.011 0.078 0.011 0.145 0.011 0.223 0 0.29-0.134 0.558-0.458 0.558-0.156 0-0.313-0.056-0.446-0.134l-5.011-2.634-5.011 2.634c-0.145 0.078-0.29 0.134-0.446 0.134-0.324 0-0.469-0.268-0.469-0.558 0-0.078 0.011-0.145 0.022-0.223l0.96-5.58-4.063-3.951c-0.134-0.145-0.279-0.335-0.279-0.536 0-0.335 0.346-0.469 0.625-0.513l5.603-0.815 2.511-5.078c0.1-0.212 0.29-0.458 0.547-0.458s0.446 0.246 0.547 0.458l2.511 5.078 5.603 0.815c0.268 0.045 0.625 0.179 0.625 0.513z";

function ListadoReservas() {

  const [selectedService, setSelectedService] = useState('');
  const [tableData, setTableData] = useState([]);
  const [agregarResponse, setAgregarResponse] = useState(null);
  const [clickear, setClickear] = useState(false);
  const [newRow, setNewRow] = useState({ creador: '', telefono: '', fecha: '', horaEntrada: '', duracion: 0, servicio: ''});
  
  const handleSelectChange = (event) => {
    setSelectedService(event.target.value);
  };

  useEffect(() => {
    // Lógica para obtener los datos de la tabla desde el backend
    // Por ejemplo, puedes usar fetch() o axios para hacer una solicitud HTTP
    // y luego actualizar el estado local con los datos recibidos

    // Ejemplo utilizando fetch():
    fetch('http://ec2-3-82-214-192.compute-1.amazonaws.com:3000/api/reservas')
      .then(response => response.json())
      .then(data => {
        setTableData(data);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://ec2-3-82-214-192.compute-1.amazonaws.com:3000/api/reservas`, {
      method: "GET",
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
    const data = await response.json();
    console.log(response);
    setTableData(data);
  };

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
              Listado reservas
            </li>

          </ol>
        </nav>
        
        <div class="row">
          <div class="col-md-8 mx-auto">
            <div class="card">
              <div class="card-header bg-custom-dark text-black">
                <h4 class="mb-0">Listado de reservas</h4>
              </div>
              <div class="card-body">

                    {/* <div class="col-md-2 mb-3">
                      <div className="col">
                        <button type="submit" className="btn btn-dark py-2 w-100" onClick={handleSubmit}>Buscar</button>
                      </div>
                    </div> */}

        {tableData.length > 0 && (
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Cliente</th>
                        <th>Servicio</th>
                        <th>Duracion</th>
                        <th>Telefono</th>
                        <th>Fecha</th>
                        <th>Hora entrada</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.creador.nombre}</td>
                          <td>{row.servicio}</td>
                          <td>{row.duracion}</td>
                          <td>{row.telefono}</td>
                          <td>{row.fecha}</td>
                          <td>{row.horaEntrada}</td>

                        </tr>
                      ))}
                      
                    </tbody>
                  </table>
                )}

                </div>
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

export default ListadoReservas;