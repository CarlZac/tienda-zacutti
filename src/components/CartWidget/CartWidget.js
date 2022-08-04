import './CartWidget.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Contexts/CartContext';

const CartWidget = () => {
    const { getQuantity } = useContext(CartContext);
    const quantity = getQuantity();

    return (
        <Link to='/cart' className='cart'>
            <img src='/images/cart.svg' alt="Trippelheim's Cart"/>
            {quantity}
        </Link>
    )
}

export default CartWidget;