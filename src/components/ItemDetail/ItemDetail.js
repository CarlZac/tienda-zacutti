import Counter from '../Counter/Counter';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
    const handleOnAdd = (quantity) => {
        alert('Se agregaron ' + quantity + ' productos al Carrito!');
        console.log('Se agregaron ' + quantity + ' productos al Carrito!');
    }

    return (
        <div className='font'>
            <div className='cardDetail'>
                <img className='imgCard' src={product.img}/>
                <div className=''>
                    <h2 className='title'>{product.name}</h2>
                    <p className='description'>{product.description}</p>
                </div>
                <div className='side'>
                    <Counter stock={product.stock} initial={0} onAdd={handleOnAdd}/>
                    <div className='data'>
                        <p>Volúmen: {product.vol}ml</p>
                        <p>Precio: ${product.price}</p>
                        <p>Stock: {product.stock}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;