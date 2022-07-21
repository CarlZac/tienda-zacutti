import Counter from '../Counter/Counter';
import './Item.css';

const Item = ({ product }) => {
    const handleOnAdd = (quantity) => {
        alert('Se agregaron ' + quantity + ' productos al Carrito!');
        console.log('Se agregaron ' + quantity + ' productos al Carrito!');
    }
    
    return (
        <div key={product.id} className='font'>
            <div className='combo'>
                <div className='card'>
                    <h2>{product.name}</h2>
                    <img src={product.img}/>
                    <p>{product.description}</p>
                    <p>{product.vol}ml - ${product.price}</p>
                </div>
                <Counter stock={10} initial={0} onAdd={handleOnAdd}/>
            </div>
        </div>
    )
}

export default Item;