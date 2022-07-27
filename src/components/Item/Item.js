import './Item.css';

const Item = ({ product }) => {
    return (
        <div key={product.id} className='font'>
                <div className='card'>
                    <h2>{product.name}</h2>
                    <img src={product.img}/>
                    <button>Más Info</button>
                </div>
        </div>
    )
}

export default Item;