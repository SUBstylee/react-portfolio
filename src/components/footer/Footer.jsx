import './Footer.scss';
// social icons
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>JJThrelfall</a>
      <ul className="permalinks">
        <li><a href="/#">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#experience">Experience</a></li>
        {/* <li><a href="/#services">Services</a></li> */}
        <li><a href="/#portfolio">Portfolio</a></li>
        <li><a href="/#testimonials">Testimonials</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/substylee" target='_blank' rel='noReferrer'><FaFacebookF/></a>
        <a href="https://www.instagram.com/jjthrelfall" target='_blank' rel='noReferrer'><FaInstagram/></a>
        <a href="https://twitter.com/jjthrelfall" target='_blank' rel='noReferrer'><FaTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; JJThrelfall - All rights reverved.</small>
      </div>
    </footer>
  );
};

export default Footer;