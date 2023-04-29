import Image from "../../../src/landing/tejo-1.jpeg";
import { Link } from "react-router-dom";

function RelatedProduct3(props) {
  const price = 30000;
  let percentOff;
  let offPrice = `${price}$`;

  if (props.percentOff && props.percentOff > 0) {
    percentOff = (
      <div
        className="badge bg-dim py-2 text-white position-absolute"
        style={{ top: "0.5rem", right: "0.5rem" }}
      >
        {props.percentOff}% OFF
      </div>
    );

    offPrice = (
      <>
        <del>{price}$</del> {price - (props.percentOff * price) / 100}$
      </>
    );
  }

  return (
    <Link
      to="/products/1"
      className="col text-decoration-none"
      href="!#"
      replace
    >
      <div className="card shadow-sm">
        {percentOff}
        <img
          className="card-img-top bg-dark cover"
          height="200"
          alt=""
          src={Image}
        />
        <div className="card-body">
          <h5 className="card-title text-center text-dark text-truncate">
            Tejo o mini Tejo
          </h5>
          <p className="card-text text-center text-muted">{offPrice}</p>
        </div>
      </div>
    </Link>
  );
}

export default RelatedProduct3;