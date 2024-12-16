import React from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import "./NAvbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-dot"><img src="/white logo-02.png" alt="Logo" /></span> 
      </div>
      
      <div className="navbar-links">
        <Link to="hero" smooth={true} duration={800}>Home</Link>
        <Link to="agency" smooth={true} duration={800}>Agency</Link>
        <Link to="process" smooth={true} duration={800}>Process</Link>
        <Link to="services" smooth={true} duration={800}>Section</Link>
        <Link to="testimonials" smooth={true} duration={800}>Testimonial</Link>
        <Link to="contact" smooth={true} duration={800}>Contact</Link>
      </div>

      <div className="navbar-button">
        <button>Buy this template</button>
      </div>
    </nav>
  );
};

export default Navbar;
