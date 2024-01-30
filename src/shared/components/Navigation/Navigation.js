import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';
import SubNavigation from './SubNavigation';

function Navigation({ setIsSubNavigationOpen }) {
  const [selectedNavigation, setSelectedNavigation] = useState(null);

  const showSubNavigationHandler = (e) => {
    setSelectedNavigation(e.target.textContent);
    setIsSubNavigationOpen(true);
  };

  const removeSubNavigationHandler = () => {
    setSelectedNavigation(null);
    setIsSubNavigationOpen(false);
  };

  return (
    <>
      <ul className='navigation'>
        <li onMouseOver={showSubNavigationHandler}>
          <NavLink to='/products/new'>New Arrivals</NavLink>
        </li>
        <li onMouseOver={showSubNavigationHandler}>
          <NavLink to='/products/women'>Women</NavLink>
        </li>
        <li onMouseOver={showSubNavigationHandler}>
          <NavLink to='/products/men'>Men</NavLink>
        </li>
        <li onMouseOver={showSubNavigationHandler}>
          <NavLink to='/aboutus'>About Us</NavLink>
        </li>
        <li onMouseOver={showSubNavigationHandler}>
          <NavLink to='/magazine'>Magazine</NavLink>
        </li>
      </ul>
      {selectedNavigation && (
        <SubNavigation
          navigation={selectedNavigation}
          onMouseLeave={removeSubNavigationHandler}
        />
      )}
    </>
  );
}

export default Navigation;
