import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-link-items">
        <Link className="footer-link-item" to="/">
          Support
        </Link>
        <Link className="footer-link-item" to="/">
          Destinations
        </Link>
        <Link className="footer-link-item" to="/">
          Sponsorships
        </Link>
      </div>
    </div>
  );
}

export default Footer;
