import { NavLink } from "react-router-dom";
import "../../styles/components/Footer.css";

function Footer() {
  return (
    <footer className="footer py-5">
      <div className="px-footer">
        <div className="d-flex justify-content-center flex-wrap" style={{ gap: "6rem" }}>

          <div>
            <h5 className="footer-title">Suivez l'aventure sur nos réseaux sociaux :</h5>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <a href="https://www.instagram.com/l.eden.photographie" target="_blank" rel="noreferrer" className="footer-link footer-icon">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61576324495698" target="_blank" rel="noreferrer" className="footer-link footer-icon">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="https://fr.linkedin.com/in/maud-paradis-78a248167" target="_blank" rel="noreferrer" className="footer-link footer-icon">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </div>

          <div>
            <h5 className="footer-title">Liens utiles :</h5>
            <ul className="list-unstyled mt-3">
              <li><NavLink to="/" className="footer-link">Accueil</NavLink></li>
              <li><NavLink to="/about" className="footer-link">À propos</NavLink></li>
              <li><NavLink to="/services" className="footer-link">Services</NavLink></li>
              <li><NavLink to="/portfolio" className="footer-link">Portfolio</NavLink></li>
              <li><NavLink to="/contact" className="footer-link">Contact</NavLink></li>
            </ul>
          </div>

          <div>
            <h5 className="footer-title">Informations légales :</h5>
            <ul className="list-unstyled mt-3">
              <li><NavLink to="/mentions-legales" className="footer-link">Mentions légales</NavLink></li>
              <li><NavLink to="/politique-de-confidentialite" className="footer-link">Politique de confidentialité</NavLink></li>
              <li><NavLink to="/termes-et-conditions" className="footer-link">Termes et conditions</NavLink></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
