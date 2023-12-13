import { Link } from 'react-router-dom';

import './Header.css';
import Menu from './Menu';
import Navigation from './Navigation';

function Header() {
  return (
    <div className='header-container'>
      <div className='header'>
        <h1 className='header-title'>
          <Link to='/'>mov clothing</Link>
        </h1>
        <Navigation />
        <Menu />
      </div>
    </div>
  );
}

export default Header;
