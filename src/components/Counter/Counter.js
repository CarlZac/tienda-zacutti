import { useState } from "react";
import './Counter.css';

const Counter = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
            setQuantity(quantity + 1);
    }

    const decrement = () => {
            setQuantity(quantity - 1);
    }

    return (
        <div>
            <p className="count">{quantity}</p>
            <div className="countBtn">
                <button
                    onClick={decrement}
                    disabled={quantity === initial ? true : null}
                >
                    -
                </button>
                <button
                    onClick={increment}
                    disabled={quantity === stock ? true : null}
                >
                    +
                </button>
            </div>
            <button
                className="countBtnAdd"
                onClick={() => onAdd(quantity)}
                disabled={quantity === initial ? true : null}
            >
                Agregar al Carrito
            </button>
        </div>
    )
}

export default Counter;