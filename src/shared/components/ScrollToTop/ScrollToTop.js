import { useState } from 'react';
import { BsChevronCompactUp } from 'react-icons/bs';

import './ScrollToTop.css';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisible);

  const clickHandler = () => {
    window.scrollTo({ top: '-8rem', behavior: 'smooth' });
  };

  return (
    <button
      className='scroll-to-top'
      onClick={clickHandler}
      style={{ display: visible ? 'inline' : 'none' }}
    >
      <BsChevronCompactUp />
    </button>
  );
}

export default ScrollToTop;
