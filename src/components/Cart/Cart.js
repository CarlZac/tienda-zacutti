import CartItem from "../CartItem/CartItem";
import './Cart.css';

const Cart = ({ products }) => {
  return (
    <div className="cardContainer">
      {products.map(product => (<CartItem product={product} key={product.id} />))}
    </div>
  )
}

export default Cart;
