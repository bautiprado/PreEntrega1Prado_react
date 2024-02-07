import React from 'react';
import './navBarStyled.css';
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img src="/img/logo7.png" alt="7" className="img-fluid" id="logo" />
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="pages/indumentaria.html" target="_self">
                Indumentaria
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="pages/selecciones.html" target="_self">
                Selecciones
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="pages/ofertas.html" target="_self">
                Ofertas
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="pages/novedadesydestacados.html" target="_self">
                Novedades y destacados
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="pages/colección.html">
                Colección
                </a>
            </li>
            </ul>
        </div>
        <div className="lupa">
            <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <CartWidget number={7} />
        </div>
    </nav>
      {/* <Jumbotron /> */}
    <div className="jumbotron p-5 rounded">
        <h1><a href="pages/extra50offsale.html" target="_self">50% OFF SALE</a></h1>
    </div>
    </>
    );
}

export default Navbar;