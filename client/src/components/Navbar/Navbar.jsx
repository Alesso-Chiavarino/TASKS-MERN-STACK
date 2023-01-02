import { Link } from 'react-router-dom';
import './Navbar.scss';
import {AiFillGithub} from 'react-icons/ai'

const Navbar = () => {
  return (
    <nav>
        <h1>Task Manager</h1>
        <ul className='links'>
            <li>
                <Link to={'/'}> Home </Link>
            </li>
            <li>
                <Link to={'/new'}> Create Task </Link>
            </li>
        </ul>
        <a target="_blank" href="https://github.com/Alesso-Chiavarino/TASKS-MERN-STACK"><AiFillGithub className='git-logo'/></a>
    </nav>
  )
}

export default Navbar;