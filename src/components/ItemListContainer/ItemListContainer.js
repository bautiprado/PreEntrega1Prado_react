import './itemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return (
        <div class="marquee">
            <h1>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer;