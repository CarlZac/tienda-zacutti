import './Item.css';

import { Link } from 'react-router-dom'

const Item = ({ id, name, img }) => {
  return (
    <div key={id} className='font'>
      <div className='card'>
        <h2>{name}</h2>
        <img src={img} alt={name} />
        <Link className='btn' to={`/detail/${id}`}>Más Info</Link>
      </div>
    </div>
  )
}

export default Item;
