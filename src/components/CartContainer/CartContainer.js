import '../CartContainer/CartContainer.css';
import { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext';
import Cart from '../Cart/Cart'

import { Link } from 'react-router-dom';

const CartContainer = () => {
  const { cart, getQuantity, getFinalPrice, clearCart } = useContext(CartContext)
  const totalQuantity = getQuantity()
  const total = getFinalPrice()

  if (totalQuantity === 0) {
    return (
      <div className='cartContainerGeneral'>
        <h1 className='titleNoProd'>Tu carrito está vacío...</h1>
        <div className='animation'>
          <img src='images/miel.png' className='imgMiel' alt='honey-spinner' />
          <img src='images/abeja.png' className='imgAbeja' alt='bee-spinner' />
        </div>
        <Link className='btnCart' to='/'>Ver Productos</Link>
      </div>
    )
  }

  return (
    <div>
      <h1 className='titleProd'>¡Este es tu carrito!</h1>
      <div>
        <Cart products={cart} />
      </div>
      <h3 className='total'>Total Carrito: ${total}</h3>
      <div>
        <button className='btnCart' onClick={() => clearCart()}>Limpiar Carrito</button>
        <button className='btnCart'>Comprar</button>
      </div>
    </div>
  )
};

export default CartContainer;
