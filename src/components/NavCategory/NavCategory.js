import { Link } from 'react-router-dom';

const NavCategory = ({ category }) => {
  return <Link className='navLinks' to={`/category/${category}`}>{category}</Link>
}

export default NavCategory;
