import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        {/* Background putih menggantikan teks "Roone" */}
        <div className="n-logo-background">
          <img src={`${process.env.PUBLIC_URL}/handayani.png`} alt="Handayani" />
          <img src={`${process.env.PUBLIC_URL}/unila.png`} alt="Unila" />
          <img src={`${process.env.PUBLIC_URL}/kampusmerdeka.png`} alt="Kampus Merdeka" />
          <img src={`${process.env.PUBLIC_URL}/ppkunila.png`} alt="PPK Unila" />
          <img src={`${process.env.PUBLIC_URL}/koperasiunila.png`} alt="Koperasi Unila" />
        </div>
      </div>

      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
