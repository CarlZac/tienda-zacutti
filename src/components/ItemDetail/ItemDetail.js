import { useContext, useState } from 'react';
import { CartContext } from '../../Contexts/CartContext';
import Counter from '../Counter/Counter';
import './ItemDetail.css';

import { Link } from 'react-router-dom';

const ItemDetail = ({ id, name, img, category, description, vol, price, stock }) => {
  const [quantity, setQuantity] = useState(0);
  const { addProduct, getProductQuantity } = useContext(CartContext);
  const quantityAdded = getProductQuantity(id);

  const handleOnAdd = (quantity) => {
    setQuantity(quantity);
    addProduct({ id, name, price, quantity })
  }

  return (
    <div>
      <div className='font'>
        <div className='cardDetail'>
          <img className='imgCard' src={img} alt={name} />
          <div>
            <h2 className='title'>{name}</h2>
            <p className='description'>{description}</p>
          </div>
          <div className='side'>
            {quantity > 0
              ? <Link className='btnBack' to='/cart'>Ir al Carrito</Link>
              : <Counter stock={stock} initial={quantityAdded} onAdd={handleOnAdd} />}
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
