import { CiFacebook, CiInstagram, CiTwitter } from 'react-icons/ci';
import { PiPinterestLogoThin } from 'react-icons/pi';

import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <ul className='footer-list'>
        <li className='footer-item'>Order Status</li>
        <li className='footer-item'>Delivery Information</li>
        <li className='footer-item'>Returns & Refunds</li>
        <li className='footer-item'>Payment</li>
        <li className='footer-item'>FAQs</li>
        <li className='footer-item'>Contact Us</li>
        <li className='footer-item'>Policy</li>
      </ul>
      <ul className='footer-list'>
        <li className='footer-item'>
          <CiInstagram className='footer-icon' />
          Instagram
        </li>
        <li className='footer-item'>
          <PiPinterestLogoThin className='footer-icon' />
          Pinterest
        </li>
        <li className='footer-item'>
          <CiFacebook className='footer-icon' />
          Facebook
        </li>
        <li className='footer-item'>
          <CiTwitter className='footer-icon' />
          Twitter
        </li>
      </ul>
      <ul className='footer-list'>
        <li className='footer-item'>Store Locator</li>
      </ul>
    </div>
  );
}

export default Footer;
