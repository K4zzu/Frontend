import BannerZero from "./tejo-reserva.png";
import BannerOne from "./billar-reserva.png";
import BannerTwo from "./futbol-reserva.png";


function BannerIncidator(props) {
  return (
    <button
      type="button"
      data-bs-target="#bannerIndicators"
      data-bs-slide-to={props.index}
      className={props.active ? "active" : ""}
      aria-current={props.active}
    />
  );
}

function BannerImage(props) {
  return (
    <div
      className={"carousel-item " + (props.active ? "active" : "")}
      data-bs-interval="3000"
    >
      <div
        className="ratio"
        style={{ "--bs-aspect-ratio": "115%", maxHeight: "687px" }}
      >
        <img
          className="d-block w-100 h-100 bg-dark cover"
          alt=""
          src={props.image}
        />
      </div>
      <div className="carousel-caption d-none d-lg-block">
        <h5>Tejo</h5>
        <p>Alquila las canchas y horas que quieras</p>
      </div>
    </div>
  );
}

function BannerImage2(props) {
  return (
    <div
      className={"carousel-item " + (props.active ? "active" : "")}
      data-bs-interval="3000"
    >
      <div
        className="ratio"
        style={{ "--bs-aspect-ratio": "115%", maxHeight: "687px" }}
      >
        <img
          className="d-block w-100 h-100 bg-dark cover"
          alt=""
          src={props.image}
        />
      </div>
      <div className="carousel-caption d-none d-lg-block">
        <h5>Billar</h5>
        <p>Mesas Pool o Tres bandas</p>
      </div>
    </div>
  );
}

function BannerImage3(props) {
  return (
    <div
      className={"carousel-item " + (props.active ? "active" : "")}
      data-bs-interval="3000"
    >
      <div
        className="ratio"
        style={{ "--bs-aspect-ratio": "115%", maxHeight: "687px" }}
      >
        <img
          className="d-block w-100 h-100 bg-dark cover"
          alt=""
          src={props.image}
        />
      </div>
      <div className="carousel-caption d-none d-lg-block">
        <h5>Fútbol sintetico</h5>
        <p>Alquila las horas y las canchas que quieras</p>
      </div>
    </div>
  );
}

function Carrouselreserva() {
  return (
    <div
      id="bannerIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ marginTop: "0px" }}
    >
      <div className="carousel-indicators">
        <BannerIncidator index="0" active={true} />
        <BannerIncidator index="1" />
        <BannerIncidator index="2" />
      </div>
      <div className="carousel-inner rounded w-100">
        <BannerImage image={BannerZero} active={true} />
        <BannerImage2 image={BannerOne} />
        <BannerImage3 image={BannerTwo} />
      </div>
    </div>
  );
}

export default Carrouselreserva;