import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo/Design-Logo.png";
import "../../styles/components/Header.css";

const routes = [
  { to: "/", label: "Accueil", end: true, preload: () => import("../../pages/global/Home") },
  { to: "/about", label: "À propos", preload: () => import("../../pages/global/About") },
  { to: "/services", label: "Services", preload: () => import("../../pages/global/Services") },
  { to: "/portfolio", label: "Portfolio", preload: () => import("../../pages/global/Portfolio") },
  { to: "/contact", label: "Contact", preload: () => import("../../pages/global/Contact") },
];

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
          {routes.map(({ to, label, end, preload }) => (
            <NavLink key={to} to={to} end={end} className="nav-link" onMouseEnter={preload}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
