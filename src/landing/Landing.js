import Banner from "./Banner";
import FeatureProduct from "./FeatureProduct";
import FeatureProduct2 from "./FeatureProduct2";
import FeatureProduct3 from "./FeatureProduct3";
import ScrollToTopOnMount from "../template/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Landing() {
  console.log(localStorage.getItem('rol'));
  return (
    <>
      <ScrollToTopOnMount />
      <Banner />
      <div className="d-flex flex-column bg-white py-4">
        <p className="text-center px-5">
          Dispóngase a pasar tiempo de recreación en nuestras instalaciones en los horarios de atencion de lunes a domingo
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/products" className="btn btn-primary" replace>
            API
          </Link>
        </div>


      </div>
      <h2 className="text-muted text-center mt-4 mb-3">LO MÁS DESTACADO!</h2>
      <div className="container pb-5 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
          {Array.from({ length: 1 }, (_, i) => {
            return <FeatureProduct key={i} />;
          })}
          {Array.from({ length: 1 }, (_, i) => {
            return <FeatureProduct2 key={i} />;
          })}
          {Array.from({ length: 1 }, (_, i) => {
            return <FeatureProduct3 key={i} />;
          })}
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
      
    </>
  );
}

export default Landing;
