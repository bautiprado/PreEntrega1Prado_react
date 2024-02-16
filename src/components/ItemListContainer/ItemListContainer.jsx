import { useEffect, useState } from 'react';
import './itemListContainer.css';
import { getCamisetas, getCamisetasByCategory } from '../../pages/inicio'
import {useParams} from 'react-router-dom';
import Spinner from '../Commons/Spinner/Spinner';

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([])
    const {categoryId} = useParams()
    const [isLoading, setIsLoading] = useState(false)


useEffect(() => {
    const fetchCamisetas = async () => { 
        const asyncFunc = greeting ? getCamisetasByCategory : getCamisetas
        setIsLoading(true);
        try {
            const res = await asyncFunc(greeting);
            setItems(res);
            setIsLoading(false)
        } catch (err) {
            console.log(err.message);
            setIsLoading(false)
        }
    };
    fetchCamisetas();
}, [greeting, setIsLoading]);

if (isLoading) return <Spinner isLoading={isLoading} />
return (
    <div className="banner-section">
        <h2 className="banner">{greeting}</h2>
        <section>
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