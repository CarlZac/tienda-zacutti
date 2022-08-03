import logoTripp from './logo-tripp.svg';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return (
        <nav className='navbar'>
            <div>
                <Link to='/'>
                <img src={logoTripp} className='logoTripp' alt='logo Trippelheim'/>
                </Link>
            </div>
            <div>
                        <Link className='navLinks' to='/category/hidromiel'>Hidromieles</Link>
                        <Link className='navLinks' to='/category/aperitivo'>Aperitivos</Link>
                        <Link className='navLinks' to='/category/licor'>Licores</Link>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar;