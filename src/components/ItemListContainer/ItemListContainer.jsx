import { useEffect, useState } from 'react';
import './itemListContainer.css';
import { getCamisetas } from '../../indumentaria/indumentaria';

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([])

useEffect(() => {
    getCamisetas().then((res) => {setItems(res);
    })
    .catch((error) => console.error('Error al obtener camisetas:', error));
}, []);



return (
    <div>
        <h2>{greeting}</h2>
        <section className="container-fluid">
            <div className="row justify-content-start">
                {items.map((item, index) => (
                    <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                        <div className="card mx-auto" style={{ width: '18rem', marginBottom: '30px', height: '94%' }}>
                            <img src={item.Image} alt={item.Alt} className="card-img-top" />
                            <div className="card-body d-flex flex-column align-items-center">
                                <h5 className="card-title text-center">{item.Titulo}</h5>
                                <p className="card-text text-dark">{item.Precio}</p>
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

export default ItemListContainer;