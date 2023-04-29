import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../../template/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carrouselreserva from "../../landing/Carrouselreserva";


const iconPath =
  "M18.571 7.221c0 0.201-0.145 0.391-0.29 0.536l-4.051 3.951 0.96 5.58c0.011 0.078 0.011 0.145 0.011 0.223 0 0.29-0.134 0.558-0.458 0.558-0.156 0-0.313-0.056-0.446-0.134l-5.011-2.634-5.011 2.634c-0.145 0.078-0.29 0.134-0.446 0.134-0.324 0-0.469-0.268-0.469-0.558 0-0.078 0.011-0.145 0.022-0.223l0.96-5.58-4.063-3.951c-0.134-0.145-0.279-0.335-0.279-0.536 0-0.335 0.346-0.469 0.625-0.513l5.603-0.815 2.511-5.078c0.1-0.212 0.29-0.458 0.547-0.458s0.446 0.246 0.547 0.458l2.511 5.078 5.603 0.815c0.268 0.045 0.625 0.179 0.625 0.513z";

function Reserva() {
  function changeRating(newRating) {}

  return (
    <div>
    <div className="container mt-5 py-4 px-xl-5">
      <ScrollToTopOnMount/>
      
      <nav aria-label="breadcrumb" className="bg-custom-light rounded mb-4">
        <ol className="breadcrumb p-3">
          <li className="breadcrumb-item">
            <Link className="text-decoration-none link-secondary" to="/">
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
        <form>

        <div className="mb-3">
            <label htmlFor="fecha" className="form-label">Fecha</label>
            <input type="date" className="form-control" id="fecha" name="fecha" />
        </div>

        <div className="mb-3">
            <label htmlFor="servicio" className="form-label">Servicio</label>
            <select className="form-select" id="servicio" name="servicio">
                <option value="">Selecciona el servicio</option>
                <option value="30">Tejo</option>
                <option value="60">Billar</option>
                <option value="90">Fútbol</option>
            </select>
        </div>


        <div className="mb-3">
            <label htmlFor="hora" className="form-label">Hora entrada</label>
            <input type="time" className="form-control" id="hora" name="hora" />
        </div>
        
        <div className="mb-3">
            <label htmlFor="duracion" className="form-label">Duración</label>
            <select className="form-select" id="duracion" name="duracion">
                <option value="">Selecciona una duración</option>
                <option value="60">1 hora</option>
                <option value="90">2 horas</option>
                <option value="120">3 horas</option>
                <option value="150">4 horas</option>
                <option value="180">5 horas</option>
            </select>
        </div>

        <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Teléfono</label>
            <input type="tel" className="form-control" id="telefono" name="telefono" />
        </div>

        <div className="mb-3">
            <label htmlFor="cliente" className="form-label">Cliente</label>
            <input type="text" className="form-control" id="cliente" name="cliente" />
        </div>

        <div className="mb-3">
            <input type="text" className="form-control" id="precio" name="precio" placeholder="Precio" defaultValue="Precio" disabled />
        </div>


        <div className="row g-3 mb-4">
            <div className="col">
                <button type="submit" className="btn btn-dark py-2 w-100">Reservar</button>
            </div>
        </div>
        
        </form>


           {/*<div className="row g-3 mb-4">
             
              <div className="col">
                <button className="btn btn-dark py-2 w-100">Reservar</button>
              </div>
            </div>*/}

            {/*<h4 className="mb-0">Detalles</h4>
            <hr />
            <dl className="row">
              <dt className="col-sm-4">Código</dt>
              <dd className="col-sm-8 mb-3">01</dd>

              <dt className="col-sm-4">Categoria</dt>
              <dd className="col-sm-8 mb-3">Tejo y Mini tejo</dd>

             

              <dt className="col-sm-4">Tipo de cancha</dt>
              <dd className="col-sm-8 mb-3">Cancha bajo techo y cancha sin techo</dd>

              <dt className="col-sm-4">Estatus</dt>
              <dd className="col-sm-8 mb-3">Disponible</dd>

              <dt className="col-sm-4">Rating</dt>
              <dd className="col-sm-8 mb-3">
                <Ratings
                  rating={4.5}
                  widgetRatedColors="rgb(253, 204, 13)"
                  changeRating={changeRating}
                  widgetSpacings="2px"
                >
                  {Array.from({ length: 5 }, (_, i) => {
                    return (
                      <Ratings.Widget
                        key={i}
                        widgetDimension="20px"
                        svgIconViewBox="0 0 19 20"
                        svgIconPath={iconPath}
                        widgetHoverColor="rgb(253, 204, 13)"
                      />
                    );
                  })}
                </Ratings>
              </dd>
            </dl>

            <h4 className="mb-0">Descripción</h4>
            <hr />
            <p className="lead flex-shrink-0">
              <small>
              El tejo es un deporte de competencia, en el cual se enfrentan jugadores en forma individual o conformando equipos. 
              El juego consiste en lazar el tejo desde una cancha a la otra, con el objetivo de enterrarlo dentro del bocín, 
              reventar una mecha o en su defecto, enterrarlo más cerca al bocín que los demás competidores.
              el campo de tejo es de 19.5 metros de largo, por 2.5 metros de ancho. La distancia entre las canchas es de 17.5 metros;
              el espacio definido para el lanzamiento es de 2.5 metros, a partir de la cancha.
              </small>
                </p>*/}
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

export default Reserva;