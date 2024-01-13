import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cartWidget.css';

function CartWidget({number}) {
    const handleClick = (event) => {
        console.log(event);
    };
    return (
        <div className="containerCart">
            <ShoppingCartIcon className="cartIcon" onClick={(event)=>{handleClick(event)}} />
            <span className="cartNumber">{number}</span>
        </div>
    );
}

export default CartWidget