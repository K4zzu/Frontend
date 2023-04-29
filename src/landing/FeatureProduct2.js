import Image from "../billar-1.webp";
import { Link } from "react-router-dom";

function FeatureProduct2() {
    return (
      <div className="col">
        <div className="card shadow-sm">
          <img
            className="card-img-top bg-dark cover"
            height="240"
            alt=""
            src={Image}
          />
          <div className="card-body">
            <h5 className="card-title text-center">Billar pool y billar 3 bandas</h5>
            <p className="card-text text-center text-muted">$4.000 Hora</p>
            <div className="d-grid gap-2">
              <Link to="/products/2" className="btn btn-outline-dark" replace>
                Detalles
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default FeatureProduct2;