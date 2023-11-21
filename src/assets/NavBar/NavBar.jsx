import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img className='LogoRomero' src={"../img/romero.png"} alt="Logo Romero's" />
      </Link>
      <nav>
        <ul>
          <li>
          <NavLink to="categoria/2">Pizzas</NavLink>
          </li>
          <li>
          <NavLink to="categoria/3">Empanadas</NavLink>
          </li>
          <li>
          <NavLink to="categoria/4">Postres</NavLink>
          </li>
         
        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar


