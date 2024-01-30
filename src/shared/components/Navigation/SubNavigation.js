import { useEffect, useState } from 'react';
import './SubNavigation.css';

function SubNavigation({ navigation, onMouseLeave }) {
  const [subNavigation, setSubNavigation] = useState({});

  useEffect(() => {
    switch (navigation) {
      case 'New Arrivals':
        setSubNavigation({
          row1: ['WOMEN', 'New Arrivals', 'New Accessories'],
          row2: ['MEN', 'New Arrivals', 'New Accessories'],
        });
        break;
      case 'Women':
        setSubNavigation({
          row1: [
            'New Arrivals',
            'Sweaters & Cardigans',
            'Coats & Jackets',
            'Dresses & Jumpsuits',
            'Tops',
            'Pants',
            'Shirts & Blouses',
            'T-shirts',
            'Jeans',
            'Skirts',
            'Suits & Tailoring',
            'Blazers',
            'Matching Sets',
          ],
          row2: [
            'All Womenswear',
            'New Accessories',
            'Bags',
            'Shoes',
            'Jewelry',
            'Hats & Scarves',
            'Capes & Hybrids',
            'Socks & Tights',
            'Sunglasses',
          ],
          row3: ['All Accessories', 'Most Loved'],
        });
        break;
      case 'Men':
        setSubNavigation({
          row1: [
            'New Arrivals',
            'Coats & Jackets',
            'Sweaters & Cardigans',
            'Sweatshirts & Hoodies',
            'Jeans',
            'Shirts',
            'Pants',
            'Suits & Tailoring',
            'T-shirts',
            'All Menswear',
          ],
          row2: [
            'New Accessories',
            'Bags & Wallets',
            'Hats & Scarves',
            'Socks & Underwear',
            'Shoes',
            'Belts',
            'All Accessories',
          ],
          row3: ['Most Loved'],
        });
        break;
      case 'About Us':
        setSubNavigation({
          row1: ['About mov', 'Sustainability'],
        });
        break;
      case 'Magazine':
        setSubNavigation({ row1: ['Read the latest', 'Collections'] });
        break;
      default:
        setSubNavigation(null);
    }
  }, [navigation]);

  const renderedSubNavigation = subNavigation && (
    <>
      <ul className='sub-navigation-col'>
        {subNavigation.row1?.map((category, idx) => (
          <li key={idx} className='sub-navigation-item'>
            {category}
          </li>
        ))}
      </ul>
      <ul className='sub-navigation-col'>
        {subNavigation.row2?.map((category, idx) => (
          <li key={idx} className='sub-navigation-item'>
            {category}
          </li>
        ))}
      </ul>
      <ul className='sub-navigation-col'>
        {subNavigation.row3?.map((category, idx) => (
          <li key={idx} className='sub-navigation-item'>
            {category}
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <div className='sub-navigation' onMouseLeave={onMouseLeave}>
      {renderedSubNavigation}
    </div>
  );
}

export default SubNavigation;
