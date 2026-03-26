import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/Design-Logo.png";
import "../../styles/stylescomponents/Header.css";
import "../../styles/responsive/Header.responsive.css";
import "../../styles/responsive-tablet/Header.responsive-tablet.css";

function Header() {
  return (
    <header className="navbar navbar-expand-md" style={{ paddingLeft: "6.75rem", paddingRight: "6.75rem" }}>
      <NavLink to="/" className="navbar-brand">
        <img src={logo} alt="Eden Photographie" width="144" height="144" />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
        aria-controls="navMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navMenu">
        <nav className="d-flex gap-4 ms-auto flex-wrap nav-menu">
          <NavLink to="/" end className="nav-link">Accueil</NavLink>
          <NavLink to="/about" className="nav-link">À propos</NavLink>
          <NavLink to="/services" className="nav-link">Services</NavLink>
          <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
