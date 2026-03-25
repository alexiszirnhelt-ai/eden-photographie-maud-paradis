import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/Design-Logo.png";
import "../../styles/stylescomponents/Header.css";

function Header() {
  return (
    <header className="navbar" style={{ paddingLeft: "6.75rem", paddingRight: "6.75rem" }}>
      <NavLink to="/" className="navbar-brand">
        <img src={logo} alt="Eden Photographie" width="144" height="144" />
      </NavLink>
      <nav className="d-flex gap-4">
        <NavLink to="/" end className="nav-link">Accueil</NavLink>
        <NavLink to="/about" className="nav-link">À propos</NavLink>
        <NavLink to="/services" className="nav-link">Services</NavLink>
        <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
