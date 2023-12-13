import { NavLink } from 'react-router-dom';

import './Navigation.css';
import SideDrawer from './SideDrawer';

function Navigation() {
  return (
    <ul className='navigation'>
      <li>
        <NavLink to='/products/new'>New Arrivals</NavLink>
      </li>
      <li>
        <NavLink to='/'>Women</NavLink>
      </li>
      <li>
        <NavLink to='/'>Men</NavLink>
      </li>
      <li>
        <NavLink to='/'>About Us</NavLink>
      </li>
      <li>
        <NavLink to='/'>Magazine</NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
