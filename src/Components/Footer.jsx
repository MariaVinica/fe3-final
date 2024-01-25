import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-divider">© Copyright</div>
      <div className="footer-content">
        <a href="https://www.facebook.com/digitalhouseschool/" target="_blank" rel="noopener noreferrer">
          <img src="./images/ico-facebook.png" alt="Facebook logo" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/_digitalhouse/" target="_blank" rel="noopener noreferrer">
          <img src="./images/ico-instagram.png" alt="Instagram logo" className="social-icon" />
        </a>
        <a href="https://twitter.com/_digitalhouse" target="_blank" rel="noopener noreferrer">
          <img src="./images/ico-x.png" alt="Twitter logo" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="./images/ico-whatsapp.png" alt="LinkedIn logo" className="social-icon" />
        </a>
        <img src="./images/DH.png" alt="DH-logo" className="dh-logo" />
      </div>
    </footer>
  );
};

export default Footer;


