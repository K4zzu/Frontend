import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../../template/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Logo from '../../landing/billar-icon.png';


const iconPath =
  "M18.571 7.221c0 0.201-0.145 0.391-0.29 0.536l-4.051 3.951 0.96 5.58c0.011 0.078 0.011 0.145 0.011 0.223 0 0.29-0.134 0.558-0.458 0.558-0.156 0-0.313-0.056-0.446-0.134l-5.011-2.634-5.011 2.634c-0.145 0.078-0.29 0.134-0.446 0.134-0.324 0-0.469-0.268-0.469-0.558 0-0.078 0.011-0.145 0.022-0.223l0.96-5.58-4.063-3.951c-0.134-0.145-0.279-0.335-0.279-0.536 0-0.335 0.346-0.469 0.625-0.513l5.603-0.815 2.511-5.078c0.1-0.212 0.29-0.458 0.547-0.458s0.446 0.246 0.547 0.458l2.511 5.078 5.603 0.815c0.268 0.045 0.625 0.179 0.625 0.513z";

function Inventario() {

  {/*const [selectedService, setSelectedService] = useState("");

  function handleSelectChange(event) {
    setSelectedService(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // código para manejar la submisión del formulario
  }*/}
  const [selectedService, setSelectedService] = useState('');
  const [selectedServicio, setSelectedServicio] = useState('');
  const [tableData, setTableData] = useState([]);
  const [clickear, setClickear] = useState(false);
  const [newRow, setNewRow] = useState({ nombre: '', cantidad: 0, precioUnitario: 0, servicio: '' });


  const handleSelectChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleServicio = (event) => {
    const selectedServicio = event.target.value;
    setNewRow((prevRow) => ({
      ...prevRow,
      servicio: selectedServicio
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`http://ec2-3-82-214-192.compute-1.amazonaws.com:3000/api/inventario/servicios/${selectedService}`, {
      method: "GET",
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
    const data = await response.json();
    console.log(response);
    setTableData(data);
  };

      // useEffect(() => {
      //   const response = fetch(`http://ec2-3-82-214-192.compute-1.amazonaws.com:3000/api/inventario/`, {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // })
      //   .then(response => {
      //     // Aquí puedes manejar la respuesta del backend
      //     // Por ejemplo, si la actualización fue exitosa, puedes realizar alguna acción
      //     // actualizarDatosEnTiempoReal();
          
      //   })
      //   .catch(error => {
      //     // Aquí puedes manejar los errores en caso de que ocurra alguno
      //   });
      // },[])
      
      useEffect(() => {
        // Lógica para obtener los datos de la tabla desde el backend
        // Por ejemplo, puedes usar fetch() o axios para hacer una solicitud HTTP
        // y luego actualizar el estado local con los datos recibidos
    
        // Ejemplo utilizando fetch():
        fetch('http://ec2-3-82-214-192.compute-1.amazonaws.com:3000/api/inventario')
          .then(response => response.json())
          .then(data => {
            setTableData(data);
          })
          .catch(error => {
            console.error('Error al obtener los datos:', error);
          });
      }, []);

      const handleCrear = () => {
        // Lógica para agregar en el backend
        // Por ejemplo, puedes usar fetch() o axios para hacer una solicitud HTTP
    
        // Ejemplo utilizando fetch():
        fetch('http://ec2-3-82-214-192.compute-1.amazonaws.com:3000/api/inventario', {
          method: 'POST',
          body: JSON.stringify(newRow),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            // Aquí puedes manejar la respuesta del backend
            // Por ejemplo, si la creación fue exitosa, puedes realizar alguna acción
    
            // Actualizar la tabla nuevamente después de la creación
            fetch('http://ec2-3-82-214-192.compute-1.amazonaws.com:3000/api/inventario')
              .then(response => response.json())
              .then(data => {
                setTableData(data);
              })
              .catch(error => {
                console.error('Error al obtener los datos:', error);
              });
          })
          .catch(error => {
            // Aquí puedes manejar los errores en caso de que ocurra alguno
          });
          console.log(newRow)
      };
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setNewRow(prevRow => ({ ...prevRow, [name]: value }));
      };

    const handleAgregar = (row) => {
      // Aquí puedes hacer la llamada al backend para actualizar los datos
      // utilizando la información de la fila (row)
      // Por ejemplo, puedes usar fetch() o axios para hacer una solicitud HTTP

      // Ejemplo utilizando fetch():
      const response = fetch(`http://ec2-3-82-214-192.compute-1.amazonaws.com:3000/api/inventario/${row._id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...row, cantidad: row.cantidad + 1 }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          // Aquí puedes manejar la respuesta del backend
          // Por ejemplo, si la actualización fue exitosa, puedes realizar alguna acción
          // actualizarDatosEnTiempoReal();
          setClickear(true);
        })
        .catch(error => {
          // Aquí puedes manejar los errores en caso de que ocurra alguno
        });
    };
    const handleRestar = (row) => {
      // Aquí puedes hacer la llamada al backend para actualizar los datos
      // utilizando la información de la fila (row)
      // Por ejemplo, puedes usar fetch() o axios para hacer una solicitud HTTP

      // Ejemplo utilizando fetch():
      const response = fetch(`http://ec2-3-82-214-192.compute-1.amazonaws.com:3000/api/inventario/${row._id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...row, cantidad: row.cantidad - 1 }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          // Aquí puedes manejar la respuesta del backend
          // Por ejemplo, si la actualización fue exitosa, puedes realizar alguna acción
          // actualizarDatosEnTiempoReal();
          setClickear(true);
        })
        .catch(error => {
          // Aquí puedes manejar los errores en caso de que ocurra alguno
        });
    };
    const handleEliminar = (row) => {
      // Aquí puedes hacer la llamada al backend para actualizar los datos
      // utilizando la información de la fila (row)
      // Por ejemplo, puedes usar fetch() o axios para hacer una solicitud HTTP

      // Ejemplo utilizando fetch():
      const response = fetch(`http://ec2-3-82-214-192.compute-1.amazonaws.com:3000/api/inventario/${row._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          // Aquí puedes manejar la respuesta del backend
          // Por ejemplo, si la actualización fue exitosa, puedes realizar alguna acción
          // actualizarDatosEnTiempoReal();
          setClickear(true);
        })
        .catch(error => {
          // Aquí puedes manejar los errores en caso de que ocurra alguno
        });
    };

  return (
    <div>
      <div className="container mt-4 py-5 px-xl-5">
        <ScrollToTopOnMount />

        <nav aria-label="breadcrumb" className="bg-custom-light rounded mb-4">
          <ol className="breadcrumb p-3">
            <li className="breadcrumb-item">
              <Link className="text-decoration-none link-secondary" to="/incio">
                Inicio
              </Link>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              Inventario
            </li>
          </ol>
        </nav>

        <div class="row">
          <div class="col-md-8 mx-auto">
            <div class="card">
              <div class="card-header bg-custom-dark text-black">
                <h4 class="mb-0">Insumos e Inventario</h4>
              </div>
              <div class="card-body">

                <h1 className="h1 fw-bold mb-0 " style={{ display: 'flex', justifyContent: 'center' }}>
                  <img src={Logo} alt="Logo de Don Alquiles" style={{ width: '50px', height: 'auto', marginRight: '5px' }} /> Don Alquiles
                </h1>

                <form onSubmit={handleSubmit}>

                  <div class="md-6 mb-3">
                    <div className="mb-3">
                      <label htmlFor="servicio" className="form-label">Servicio</label>
                      <select className="form-select" id="servicio" name="servicio" value={selectedService} onChange={handleSelectChange}>
                        <option value="">Selecciona el servicio</option>
                        <option value="futbol">Fútbol</option>
                        <option value="tejo">Tejo</option>
                        <option value="billar">Billar</option>
                      </select>
                    </div>
                  </div>

                  <div class="row">

                    <div class="col-md-2 mb-3">
                      <div className="col">
                        <button type="submit" className="btn btn-dark py-2 w-100" onClick={handleSubmit}>Buscar</button>
                      </div>
                    </div>

                    <div class="col-md-2 mb-3">
                      <div className="col">
                        <button type="submit" className="btn btn-secondary py-2 w-100">Actualizar</button>
                      </div>
                    </div>

                    <div class="col-md-8 mb-3">
                      <div className="col text-end">
                        <button type="submit" className="btn btn-success py-2 w-50">Guardar</button>
                      </div>
                    </div>

                  </div>

                </form>

                {tableData.length > 0 && (
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Servicio</th>
                        <th>Precio</th>
                        <th></th>
                        <th>Acciones</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.nombre}</td>
                          <td>{row.cantidad}</td>
                          <td>{row.servicio}</td>
                          <td>{row.precioUnitario}</td>

                          <td>
                            <button type="button" className="btn btn-primary" onClick={() => handleAgregar(row)}>+</button>
                          </td>

                          <td>
                            <button type="button" className="btn btn-warning" onClick={() => handleRestar(row)}>-</button>
                          </td>
                          <td>
                            <button type="button" className="btn btn-danger" onClick={() => handleEliminar(row)}>x</button>
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td>
                          <input type="text" name="nombre" value={newRow.nombre} style={{ width: '120px'}} onChange={handleChange} />
                        </td>
                        <td>
                          <input type="number" name="cantidad" value={newRow.cantidad} style={{ width: '120px'}} onChange={handleChange} />
                        </td>
                        <td>
                          <select className="form-select" name="servicio" value={newRow.servicio} style={{ width: '120px', height: '32px' }} onChange={handleServicio}>
                            <option value="">Selecciona el servicio</option>
                            <option value="futbol">Fútbol</option>
                            <option value="tejo">Tejo</option>
                            <option value="billar">Billar</option>
                      </select>
                        </td>
                        <td>
                          <input type="number" name="precioUnitario" value={newRow.precioUnitario} style={{ width: '120px'}} onChange={handleChange} />
                        </td>
                        <td>
                          <button type="button" className="btn btn-success" onClick={handleCrear}>Agregar</button>
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                )}

              </div>
            </div>
          </div>
        </div>
        

      </div>

      <div id="contactenos" className="d-flex flex-column bg-white py-4">
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

export default Inventario;