import { Outlet, Link } from "react-router-dom"
import { useState } from 'react';


export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
    return (
      <>
      <div className="mobile-nav" onClick={toggleNav}>
      </div>
      <nav className={`nav ${isOpen ? 'active' : ''}`} onClick={toggleNav}>
        <Link to="/" className="nav-item">HOME</Link>
        <a href="#" className="nav-item">ABOUT</a>
        <a href="#" className="nav-item">MENU</a>
        <Link to="/booking" className="nav-item">RESERVATIONS</Link>
        <a href="#" className="nav-item">ORDER ONLINE</a>
        <a href="#" className="nav-item">LOGIN</a>
      </nav>
      </>
    )
  }