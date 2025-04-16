import React from 'react';

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore suscipit nisi non, laudantium delectus?</p>
        <div className="socail-links">
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-pinterest-p"></i>
        </div>
      </div>
      <hr />
      <div className="footer-bottom-content">
        <p>Designed By <a href="#">Da Great Codes</a></p>
        <div className="copyright">
          <p>&copy;Copyright <strong>Da Great Codes</strong>. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
