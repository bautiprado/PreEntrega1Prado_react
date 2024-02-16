import React from 'react';
import './navBarStyled.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <Link to="/category/indumentaria">
        <img src="/img/logo7.png" alt="7" className="img-fluid" id="logo" />
        </Link>
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
                <Link className="nav-link" to="/category/indumentaria" target="_self">
                Indumentaria
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/category/selecciones" target="_self">
                Selecciones
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/category/ofertas" target="_self">
                Ofertas
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/category/novedadesydestacados" target="_self">
                Novedades y destacados
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/category/colección">
                Colección
                </Link>
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
        <h1><Link to="/category/extra50offsale" target="_self">EXTRA 50% OFF SALE</Link></h1>
    </div>
    </>
    );
}

export default Navbar;