import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";


function Header() {

  const [openedDrawer, setOpenedDrawer] = useState(false)

  function toggleDrawer() {
    setOpenedDrawer(!openedDrawer);
  }

  function changeNav(event) {
    if (openedDrawer) {
      setOpenedDrawer(false)
    }
  }

  function handleScroll() {
    window.scroll({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <header>

      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/inicio" onClick={changeNav}>
            {/* <FontAwesomeIcon icon="fa-solid fa-pool-8-ball" className="ms-1" size="lg"/> */}
            <FontAwesomeIcon
              icon={["fab", "bootstrap"]}
              className="ms-1"
              size="lg"
            />
            <span className="ms-2 h5">Don Alquiles</span>
          </Link>

          <div className={"navbar-collapse offcanvas-collapse " + (openedDrawer ? 'open' : '')}>
            <ul className="navbar-nav me-auto mb-lg-0">
              {/* <li className="nav-item">
                <Link to="/products" className="nav-link" replace onClick={changeNav}>
                  Explora
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/products" className="nav-link" replace onClick={changeNav}>
                  API
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" replace onClick={handleScroll}>
                  Contáctenos
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/reserva" className="nav-link btn btn-primary bg-black " style={{ color: '#fff' }} replace onClick={changeNav}>
                  Reserva
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav">
              {localStorage.getItem('rol') === 'admin' ? (
                <li className="nav-item">
                  <Link
                    to="/inventario"
                    className="nav-link btn btn-primary ms-2 bg-black"
                    style={{ color: '#fff' }}
                    replace
                    onClick={changeNav}
                  >
                    Inventario
                  </Link>
                </li>
              ) : null}
            </ul>

            <ul className="navbar-nav">
              {localStorage.getItem('rol') === 'admin' ? (
                <li className="nav-item">
                  <Link
                    to="/listadoreservas"
                    className="nav-link btn btn-primary ms-2 bg-black"
                    style={{ color: '#fff' }}
                    replace
                    onClick={changeNav}
                  >
                    Ver reservas
                  </Link>
                </li>
              ) : null}
            </ul>

            <ul className="navbar-nav">
              {localStorage.getItem('token')  ? (
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link btn btn-danger ms-2 bg-black"
                    style={{ color: '#fff' }}
                    replace
                    onClick={changeNav}
                  >
                    LogOut
                  </Link>
                </li>
              ) : null}
            </ul>

          </div>

          <div className="d-inline-block d-lg-none">
            <button type="button" className="btn btn-outline-dark">
              <FontAwesomeIcon icon={["fas", "shopping-cart"]} />
              <span className="ms-3 badge rounded-pill bg-dark">0</span>
            </button>
            <button className="navbar-toggler p-0 border-0 ms-3" type="button" onClick={toggleDrawer}>
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
