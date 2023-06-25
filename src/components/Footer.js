import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLinkedin, faTwitter, faInstagram, faBehance, faDribbble, faFacebook, faFigma, faMedium  } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import the CSS file for styling
import { faTable } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="contact-section">
        <h3>Want to Get in touch?</h3>
        <h4>Send me a mail 📩</h4>
        <ul className="social-icons">
          <li><a href="/"><FontAwesomeIcon icon={faEnvelope} /></a></li>
          <li><a href="/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li><a href="/"><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href="/"><FontAwesomeIcon icon={faBehance} /></a></li>
          <li><a href="/"><FontAwesomeIcon icon={faDribbble} /></a></li>
          <li><a href="/"><FontAwesomeIcon icon={faFacebook} /></a></li>
          <li><a href="/"><FontAwesomeIcon icon={faFigma} /></a></li>
          <li><a href="/"><FontAwesomeIcon icon={faMedium} /></a></li>
          <li><a href="/"><FontAwesomeIcon icon={faTable} /></a></li>
        </ul>
        <h4>2023 (c) All Rights Reserved. Maginations</h4>
      </div>
    </footer>
  );
};

export default Footer;
