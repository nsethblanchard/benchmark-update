import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-link-items">
        <Link className="footer-link-item" to="/case-studies">
          Case Studies
        </Link>
        <Link className="footer-link-item" to="/testimonials">
          Testimonials
        </Link>
        <Link className="footer-link-item" to="/faqs">
          FAQ
        </Link>
      </div>
    </div>
  );
}

export default Footer;
