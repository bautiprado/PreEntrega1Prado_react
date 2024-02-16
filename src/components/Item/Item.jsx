import React from "react";
import './item.css';

function Item({ Titulo, Precio, Image, Alt, Id }) {
    return (
        <div className="banner-section">
        <h2 className="banner">{greeting}</h2>
        <section>
            <div className="row justify-content-start">
                {items.map((item, index) => (
                    <div className="col-lg-3 col-md-6 col-sm-12" key={Id}>
                        <div className="card mx-auto" style={{ width: '18rem', marginBottom: '30px', height: '94%' }}>
                            <img src={Image} alt={Alt} className="card-img-top" />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title text-center">{Titulo}</h5>
                                <p className="card-text text-dark">{Precio}</p>
                                <a href="#" className="btn btn-primary mt-auto">COMPRAR</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
    );
}

export default Item;