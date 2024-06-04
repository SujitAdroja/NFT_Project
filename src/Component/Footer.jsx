import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container flex-space-between">
        <h3 className="footer-heading">MARKETPLACE.</h3>
        <div className="social-icons ">
          <button className="icons" title="Facebook">
            <ion-icon name="logo-facebook"></ion-icon>
          </button>
          <button className="icons" title="Twitter">
            <ion-icon className="icons" name="logo-twitter"></ion-icon>
          </button>
          <button className="icons" title="Discord">
            <ion-icon className="icons" name="logo-discord"></ion-icon>
          </button>
          <button className="icons" title="Instagram">
            <ion-icon className="icons" name="logo-instagram"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
