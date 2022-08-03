import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import './ItemDetail.css';

const ItemDetail = ({ id, name, img, category, description, vol, price, stock }) => {
    const handleOnAdd = (quantity) => {
        alert('Se agregaron ' + quantity + ' productos al Carrito!');
        console.log('Se agregaron ' + quantity + ' productos al Carrito!');
    }

    return (
        <div>
            <div className='font'>
                <div className='cardDetail'>
                    <img className='imgCard' src={img}/>
                    <div className=''>
                        <h2 className='title'>{name}</h2>
                        <p className='description'>{description}</p>
                    </div>
                    <div className='side'>
                        <Counter stock={stock} initial={0} onAdd={handleOnAdd}/>
                        <div className='data'>
                            <p>Categoría: {category}</p>
                            <p>Volúmen: {vol}ml</p>
                            <p>Precio: ${price}</p>
                            <p>Stock: {stock}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Link className='btnBack' to='/'>Volver</Link>
        </div>
    )
}

export default ItemDetail;