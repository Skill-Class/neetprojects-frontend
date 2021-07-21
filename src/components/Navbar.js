import React from "react";
import { Link } from "react-router-dom";
import "../components/css/Navbar.css";
function Navbar() {
  return (
    <div className="navbarone">
      <div className="narvbarone__left">
        <Link to="/">Explore </Link>
        <Link to="/projects">Real Life Projects</Link>
        <Link to="/training">Interview</Link>
        <Link to="/">Hackathons</Link>
        <Link to="/">Discuss</Link>
        <Link to="/">Store</Link>
      </div>
      <div className="navbarone__right">
        <Link to="/">Contact Us</Link>
        <Link to="/">Premium</Link>
      </div>
    </div>
  );
}

export default Navbar;
