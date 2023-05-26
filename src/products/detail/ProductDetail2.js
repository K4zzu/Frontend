import billar from "../../../src/landing/billar-0.jpg";
import RelatedProduct2 from "./RelatedProduct2";
import Ratings from "react-ratings-declarative";
import { Link } from "react-router-dom";
import ScrollToTopOnMount from "../../template/ScrollToTopOnMount";
import RelatedProduct3 from "./RelatedProduct3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const iconPath =
  "M18.571 7.221c0 0.201-0.145 0.391-0.29 0.536l-4.051 3.951 0.96 5.58c0.011 0.078 0.011 0.145 0.011 0.223 0 0.29-0.134 0.558-0.458 0.558-0.156 0-0.313-0.056-0.446-0.134l-5.011-2.634-5.011 2.634c-0.145 0.078-0.29 0.134-0.446 0.134-0.324 0-0.469-0.268-0.469-0.558 0-0.078 0.011-0.145 0.022-0.223l0.96-5.58-4.063-3.951c-0.134-0.145-0.279-0.335-0.279-0.536 0-0.335 0.346-0.469 0.625-0.513l5.603-0.815 2.511-5.078c0.1-0.212 0.29-0.458 0.547-0.458s0.446 0.246 0.547 0.458l2.511 5.078 5.603 0.815c0.268 0.045 0.625 0.179 0.625 0.513z";

function ProductDetail2() {
  function changeRating(newRating) {}

  return (
    <div>
    <div className="container mt-5 py-4 px-xl-5">
      <ScrollToTopOnMount/>
      <nav aria-label="breadcrumb" className="bg-custom-light rounded mb-4">
        <ol className="breadcrumb p-3">
          <li className="breadcrumb-item">
            <Link className="text-decoration-none link-secondary" to="/inicio">
              Inicio
            </Link>
          </li>
          <li className="breadcrumb-item">
            <a className="text-decoration-none link-secondary" href="!#">
              Mesas
            </a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Mesas de billar pool y billar tres bandas
          </li>
        </ol>
      </nav>
      <div className="row mb-4">
        {/*<div className="d-none d-lg-block col-lg-1">
          <div className="image-vertical-scroller">
            <div className="d-flex flex-column">
              {Array.from({ length: 10 }, (_, i) => {
                let selected = i !== 1 ? "opacity-6" : "";
                return (
                  <a key={i} href="!#">
                    <img
                      className={"rounded mb-2 ratio " + selected}
                      alt=""
                      src={billar}
                    />
                  </a>
                );
              })}
            </div>
          </div>
            </div>*/}
        <div className="col-lg-6">
          <div className="row">
            <div className="col-12 mb-4">
              <img
                className="border rounded ratio ratio-1x1"
                alt=""
                src={billar}
              />
            </div>
          </div>

          {/* <div className="row mt-2">
            <div className="col-12">
              <div
                className="d-flex flex-nowrap"
                style={{ overflowX: "scroll" }}
              >
                {Array.from({ length: 8 }, (_, i) => {
                  return (
                    <a key={i} href="!#">
                      <img
                        className="cover rounded mb-2 me-2"
                        width="70"
                        height="70"
                        alt=""
                        src={Image}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div> */}
        </div>

        <div className="col-lg-5">
          <div className="d-flex flex-column h-100">
            <h2 className="mb-1">Mesas de billar Pool y billar tres bandas</h2>
            <h4 className="text-muted mb-4">$4.000 Hora</h4>

            <div className="row g-3 mb-4">
              {/*<div className="col">
                <button className="btn btn-outline-dark py-2 w-100">
                  Add to cart
                </button>
              </div>*/}
              <div className="col">
                <button className="btn btn-dark py-2 w-100">Reservar</button>
              </div>
            </div>

            <h4 className="mb-0">Detalles</h4>
            <hr />
            <dl className="row">
              <dt className="col-sm-4">Código</dt>
              <dd className="col-sm-8 mb-3">02</dd>

              <dt className="col-sm-4">Categoria</dt>
              <dd className="col-sm-8 mb-3">Pool y tres bandas</dd>

              {/*<dt className="col-sm-4">Brand</dt>
              <dd className="col-sm-8 mb-3">iPhone X</dd>*/}

              {/*<dt className="col-sm-4">Manufacturer</dt>
              <dd className="col-sm-8 mb-3">Nillkin</dd>*/}

              <dt className="col-sm-4">Tipo de mesa</dt>
              <dd className="col-sm-8 mb-3">Mesa billar pool o Mesa billar 3 bandas</dd>

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
              Este juego se practica en una mesa de forma rectangular, realizada en madera y con un tapiz como superficie de juego.
              Consiste en hacer rodar unas bolas de colores impulsadas con un taco, 
              en algunos casos con el objetivo de meterlas en una serie de agujeros y en otras para hacer carambola entre ellas.
              La mesa de pool tiene una medida de 2,13 m largo x 1,07 m ancho x 0,78 m alto,
              con una superficie de juego de 193 x 96.5 cm aproximadamente

              </small>
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 mb-4">
          <hr />
          <h4 className="text-muted my-4">Productos relacionados</h4>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
            {Array.from({ length: 1 }, (_, i) => {
              return (
                <><RelatedProduct2 key={i} percentOff={i % 2 === 0 ? 15 : null} /><RelatedProduct3 key={i} percentOff={i % 2 === 0 ? 15 : null} /></>

              );
            })}
          </div>
        </div>
      </div>
      
      </div>

      <div id="contactenos" className="d-flex flex-column bg-white py-4">
        <h5 className="text-center mb-3">Sigue nuestras paginas</h5>
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

export default ProductDetail2;