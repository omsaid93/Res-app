import { NavLink, } from 'react-router-dom';
import './NavBar.css'

function NavBar() {

  return (
    <header className='header-main'>
      <div className='container'>
        <div><img src='https://img.freepik.com/vecteurs-premium/logo-conception-nourriture-qualite-restauration_187482-593.jpg' alt='logo' className='logo' /> </div>
        <ul className='unorder-list'>
          <li><NavLink to={'/'} activeClassName='active'>Home</NavLink> </li>
          <li><NavLink to={'/reservation'} activeClassName='active'>Make a Reservation</NavLink>  </li>
          <li><NavLink to={'/list'} activeClassName='active'>Reservation list</NavLink> </li>
        </ul>
        <div></div>
      </div>
    </header>
  );
}

export default NavBar;