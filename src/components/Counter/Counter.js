import { useState } from "react";
import './Counter.css';

const Counter = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    return (
        <div>
            <p className="count">{count}</p>
            <div className="countBtn">
                <button
                    onClick={decrement}
                    disabled={count === initial ? true : null}
                >
                    -
                </button>
                <button
                    onClick={increment}
                    disabled={count === stock ? true : null}
                >
                    +
                </button>
            </div>
            <button
                className="countBtnAdd"
                onClick={() => onAdd(count)}
                disabled={count === initial ? true : null}
            >
                Agregar al Carrito
            </button>
        </div>
    )
}

export default Counter;