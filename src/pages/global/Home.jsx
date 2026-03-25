import { NavLink } from "react-router-dom";
import bannerImg from "../../assets/images/banner/Laos-viewpoint-photo.jpg";
import profileImg from "../../assets/images/profile/profile-1.JPG";
import circleGold from "../../assets/svg/circle-gold.svg";
import "../../styles/stylespages/Home.css";

function Home() {
  return (
    <main>
      <section
        className="banner d-flex flex-column align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(229, 213, 197, 0.5), rgba(229, 213, 197, 0.5)), url(${bannerImg})`,
        }}
      >
        <h1 className="banner-title">L'Eden Photographie</h1>
        <p className="banner-subtitle">
          Photographe, vidéaste et community manager tourisme
        </p>
        <NavLink to="/contact" className="btn banner-btn mt-3">
          Avoir un devis
        </NavLink>
      </section>

      <section className="presentation d-flex align-items-center gap-5 py-5 px-section">
        <div className="presentation-photo-wrapper">
          <img
            src={profileImg}
            alt="Maud Paradis"
            className="presentation-photo"
          />
          <img src={circleGold} alt="" className="presentation-photo-circle" />
        </div>
        <div>
          <h2 className="presentation-title">Maud Paradis</h2>
          <p className="presentation-text">
            Je suis photographe, vidéaste et community manager spécialisée dans
            le tourisme, basée à Nancy dans le Grand Est.
          </p>
          <p className="presentation-text">
            Passionnée par la photographie depuis mon plus jeune âge, j'ai
            choisi d'en faire mon métier. Formée professionnellement en
            photographie et vidéo, et certifiée en social media management,
            j'accompagne les entreprises du secteur du tourisme de manière
            complète dans leur communication digitale au-delà de la simple
            création de contenus visuels.
          </p>
          <p className="presentation-text">
            J'aide les hôtels, maisons d'hôtes, gîtes, lodges, restaurants,
            cafés, agences de voyage et offices de tourisme à développer leur
            visibilité grâce à des photos et vidéos professionnelles, adaptées
            aux réseaux sociaux et aux supports de communication digitale.
          </p>
          <p className="presentation-text">
            Ma particularité : proposer des offres clés en main combinant
            photographie, vidéo et gestion des réseaux sociaux, pour une
            communication cohérente, professionnelle et impactante. Je ne me
            contente pas de produire des images : je vous aide à les utiliser
            efficacement sur Instagram, Facebook ou LinkedIn pour valoriser
            votre établissement et attirer de nouveaux clients.
          </p>
          <p className="presentation-text">
            Chaque projet est pensé pour valoriser ce qui rend votre
            établissement unique, renforcer votre image de marque et séduire vos
            futurs clients.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
