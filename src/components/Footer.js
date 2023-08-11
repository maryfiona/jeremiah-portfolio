import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram, faBehance, faDribbble, faFacebook, faFigma, faMedium  } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 
import { faTable } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="contact-section">
        <h3>Want to Get in touch?</h3>
        <h4 className='more'>Send me a mail📩 </h4>
        
        <ul className="social-icons">
          
          <li><a href="/"><FontAwesomeIcon className='lkdn' icon={faLinkedin} /></a></li>
          <li><a href="/"><FontAwesomeIcon className='titer' icon={faTwitter} /></a></li>
          <li><a href="/"><FontAwesomeIcon className='istan' icon={faInstagram} /></a></li>
          <li><a href="/"><FontAwesomeIcon className='beh' icon={faBehance} /></a></li>
          <li><a href="/"><FontAwesomeIcon className='dri' icon={faDribbble} /></a></li>
          <li><a href="/"><FontAwesomeIcon className='fb' icon={faFacebook} /></a></li>
          <li><a href="/"><FontAwesomeIcon className='fg' icon={faFigma} /></a></li>
          <li><a href="/"><FontAwesomeIcon className='med' icon={faMedium} /></a></li>
          <li><a href="/"><FontAwesomeIcon className='tab' icon={faTable} /></a></li>
        </ul>
        <h4>2023 (c) All Rights Reserved. FioCodeTech</h4>
      </div>
    </footer>
  );
};

export default Footer;
