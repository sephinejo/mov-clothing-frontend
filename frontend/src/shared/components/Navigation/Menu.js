import { NavLink } from 'react-router-dom';
import { CiHeart, CiSearch, CiShoppingCart } from 'react-icons/ci';

import './Menu.css';

function Menu() {
  return (
    <ul className='menu'>
      <li>
        <NavLink to='/'>
          <CiSearch className='menu-icon' />
          SEARCH
        </NavLink>
      </li>
      <li>
        <NavLink to='/'>SIGN IN</NavLink>
      </li>
      <li>
        <NavLink to='/'>SHIPPING TO: UNITED STATES</NavLink>
      </li>
      <li>
        <NavLink to='/'>
          <CiHeart className='menu-icon' />
        </NavLink>
      </li>
      <li>
        <NavLink to='/'>
          <CiShoppingCart className='menu-icon' />
        </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
