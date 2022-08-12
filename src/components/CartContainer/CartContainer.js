import '../CartContainer/CartContainer.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { CartContext } from '../../Contexts/CartContext';
import Cart from '../Cart/Cart'

const CartContainer = () => {
    const { cart, getQuantity, getFinalPrice, clearCart} = useContext(CartContext)

    const totalQuantity = getQuantity()
    const total = getFinalPrice()

    if(totalQuantity === 0) {
        return (
            <div className='cartContainerGeneral'>
                <h1 className='titleNoProd'>Tu carrito está vacío...</h1>
                <div className='animation'>
                    <img src='images/miel.png' className='imgMiel' alt='honey-spinner'/>
                    <img src='images/abeja.png' className='imgAbeja' alt='bee-spinner'/>
                </div>
                <Link className='btnCart' to='/'>Sumá los estilos que más te gusten!</Link>
            </div>
        )
    }

    return (
        <div>
            <h1 className='titleProd'>¡Este es tu carrito!</h1>
            <div>
                <Cart products={cart}/>
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