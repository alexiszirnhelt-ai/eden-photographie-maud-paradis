import Banner from "../../components/ui/Banner";
import Title from "../../components/ui/Title";
import CardPortfolio from "../../components/ui/CardPortfolio";
import photo1 from "../../assets/images/Photo-portfolio/chambre-hotel-gerardmer.webp";
import photo2 from "../../assets/images/Photo-portfolio/Luxembourg-chateau.webp";
import photo3 from "../../assets/images/Photo-portfolio/Photo-village-Brioude.webp";
import "../../styles/pages/Portfolio.css";

const hotelGlob = import.meta.glob("../../assets/images/hotel/*.webp");
const monumentGlob = import.meta.glob("../../assets/images/monuments/*.webp");
const paysageGlob = import.meta.glob("../../assets/images/paysages/*.webp");

async function loadGlob(glob) {
  const modules = await Promise.all(Object.values(glob).map((fn) => fn()));
  return modules.map((m) => m.default);
}

function Portfolio() {
  return (
    <main>
      <Banner />
      <Title title="Portfolio" />
      <section className="d-flex gap-4 justify-content-center px-5 py-5 portfolio-section">
        <CardPortfolio
          animationClass="card-anim-left"
          photo={photo1}
          title="Hôtels, et établissements touristiques"
          text="Découvrez mes reportages photo réalisés pour hôtels, gîtes, domaines, lodges, maisons d'hôtes et restaurants, mettant en valeur les lieux, l'ambiance et l'expérience client."
          modalId="modal-portfolio-1"
          photosLoader={() => loadGlob(hotelGlob)}
        />
        <CardPortfolio
          animationClass="card-anim-bottom"
          photo={photo2}
          title="Monuments & Patrimoine"
          text="Explorez mes photographies de monuments, villes et lieux emblématiques, capturant l'architecture et l'histoire des destinations."
          modalId="modal-portfolio-2"
          photosLoader={() => loadGlob(monumentGlob)}
        />
        <CardPortfolio
          animationClass="card-anim-right"
          photo={photo3}
          title="Paysages & Destinations"
          text="Découvrez mes photographies de paysages et destinations à travers le monde, entre nature, cultures et instants de vie qui font l'âme du voyage."
          modalId="modal-portfolio-3"
          photosLoader={() => loadGlob(paysageGlob)}
        />
      </section>
    </main>
  );
}

export default Portfolio;
