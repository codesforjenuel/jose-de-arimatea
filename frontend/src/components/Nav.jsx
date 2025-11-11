import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <ul className="nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about-us">About Us</Link></li>
      <li><Link to="/mission">Our Mission</Link></li>
      {/* <li><Link to="/how-we-help">How We Help</Link></li>
      <li><Link to="/testimonials">Testimonials</Link></li> */}
      <li><Link to="/contact">Contact</Link></li>
      <li><a
          href="https://buy.stripe.com/cNi3cve058sU4HS50iasg01"
          target="https://buy.stripe.com/cNi3cve058sU4HS50iasg01"
          className="donationButton"
        > Donate </a></li>
    </ul>
  );
}
