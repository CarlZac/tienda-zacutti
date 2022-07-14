import logoTripp from './logo-tripp.svg';
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () =>{
    return (
        <nav className='navbar'>
            <div>
                <a>
                <img src={logoTripp} className='logoTripp' alt='logo Trippelheim'/>
                </a>
            </div>
            <div>
                <ul>
                    <li>
                        <a>Hidromieles</a>
                    </li>
                    <li>
                        <a>Aperitivos</a>
                    </li>
                    <li>
                        <a>Licores</a>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
}

export default Navbar;