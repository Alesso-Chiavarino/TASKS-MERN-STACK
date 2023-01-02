import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to={'/'}> Home </Link>
            </li>
            <li>
                <Link to={'/new'}> Create Task </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar;