import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 My Awesome Website. All rights reserved.</p>
      <div className="social-icons">
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
      </div>
    </footer>
  );
}