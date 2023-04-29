import Image from "../futbol-0.jpg";
import { Link } from "react-router-dom";

function FeatureProduct3() {
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
            <h5 className="card-title text-center">Futbol 5 y 11 sintetico</h5>
            <p className="card-text text-center text-muted">$50.000 y $70.000 Hora</p>
            <div className="d-grid gap-2">
              <Link to="/products/3" className="btn btn-outline-dark" replace>
                Detalles
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default FeatureProduct3;