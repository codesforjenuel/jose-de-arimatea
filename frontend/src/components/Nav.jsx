import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav-container">
      {/* Brand Logo Left */}
      <div className="nav-logo">
        <Link to="/" onClick={closeMenu}>
          <img
            src="https://res.cloudinary.com/dkaeetuud/image/upload/v1759993239/jose%20de%20arimatea/jose_de_arimatea_logo_egvwsx.png"
            alt="José de Arimatea Logo"
          />
        </Link>
      </div>

      {/* Hamburger Toggle (Mobile Only) */}
      <button 
        className={`hamburger ${isOpen ? "active" : ""}`} 
        onClick={toggleMenu} 
        aria-label="Menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Navigation Links ONLY */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
        <li><Link to="/about-us" onClick={closeMenu}>Quiénes Somos</Link></li>
        <li><Link to="/mission" onClick={closeMenu}>Misión</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>Contacto</Link></li>
      </ul>

      {/* Single CTA Button Far Right */}
      <div className="nav-cta">
        <a
          href="https://buy.stripe.com/cNi3cve058sU4HS50iasg01"
          target="_blank"
          rel="noopener noreferrer"
          className="donation-btn-gold"
          onClick={closeMenu}
        >
          Donar
        </a>
      </div>
    </nav>
  );
}