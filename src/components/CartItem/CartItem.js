import { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';
import './CartItem.css';

const CartItem = ({ product }) => {
  const { removeProduct } = useContext(CartContext)
  const remove = (id) => {
    removeProduct(id)
  }
  
  return (
    <div key={product.id} className="cardCart">
      <div className='cardCartDiv'>
        <h2 className='prodName'>{product.name}</h2>
        <p className='data'>Precio: {product.price} $</p>
        <p className='data'>Cantidad: {product.quantity}</p>
        <p className='data'>Total: {product.price * product.quantity}</p>
      </div>
      <div>
        <button className='btnCardCart' onClick={() => remove(product.id)}>Quitar del carrito</button>
      </div>
    </div>
  )
}

export default CartItem;
