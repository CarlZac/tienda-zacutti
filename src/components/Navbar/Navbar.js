import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import NavCategory from '../NavCategory/NavCategory';
import { useAsyncFn } from "../../hooks/useAsync";

import { fetcher } from "../../utils/fetcher";
import { getProducts } from "../../services/firebase/firestore";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isLoading, data, error } = useAsyncFn(fetcher(getProducts));

  if (isLoading) {
    return (
      <div>
        <div className='animation'>
          <img src='images/abeja.png' className='imgAbejaNav' alt='bee-spinner-navbar' />
        </div>
      </div>
    )
  }

  if(error) {
    return <img src='/image/error-404.png' alt='error'/>
  }
  
  return (
    <nav className='navbar'>
      <div>
        <Link to='/'>
          <img src='/images/logotripp.svg' className='logoTripp' alt='logo Trippelheim' />
        </Link>
      </div>
      <div>
        {Array.from(new Set(data.map(product => product.category))).map(product => (
          <NavCategory key={product} category={product} />
        ))}
      </div>
      <CartWidget />
    </nav>
  )
}

export default Navbar;
