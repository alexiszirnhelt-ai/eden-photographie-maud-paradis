import Banner from "../../components/ui/Banner";
import Title from "../../components/ui/Title";
import CardPortfolio from "../../components/ui/CardPortfolio";
import photo1 from "../../assets/images/Photo-portfolio/chambre-hotel-gerardmer.jpg";
import photo2 from "../../assets/images/Photo-portfolio/Luxembourg-chateau.jpg";
import photo3 from "../../assets/images/Photo-portfolio/Photo-village-Brioude.jpg";
import paysage1 from "../../assets/images/paysages/Automne-haute-loire.jpg";
import paysage2 from "../../assets/images/paysages/KingKong-isle.jpg";
import paysage3 from "../../assets/images/paysages/Laos-waterfall.jpg";
import paysage4 from "../../assets/images/paysages/Luang-Prabang-view.jpg";
import paysage5 from "../../assets/images/paysages/Mer-fuerteventura-sunset.jpg";
import paysage6 from "../../assets/images/paysages/mer-ile-canaries.jpg";
import paysage7 from "../../assets/images/paysages/montagne-sunset-photo.jpg";
import paysage8 from "../../assets/images/paysages/panoramique-ile-canarie.jpg";
import paysage9 from "../../assets/images/paysages/Photo-Tamcoc-Vietnam.jpg";
import paysage10 from "../../assets/images/paysages/Photo-Vietnam.jpg";
import paysage11 from "../../assets/images/paysages/Plage-Cofete.jpg";
import paysage12 from "../../assets/images/paysages/Plage-fuerteventura.jpg";
import paysage13 from "../../assets/images/paysages/Prague-city-photo.jpg";
import paysage14 from "../../assets/images/paysages/Sunset-fuerteventura.jpg";
import paysage15 from "../../assets/images/paysages/TamCoc-photo.jpg";
import paysage16 from "../../assets/images/paysages/Vang-Vieng-Viewpoint.jpg";
import paysage17 from "../../assets/images/paysages/Vietnam-photo.jpg";
import paysage18 from "../../assets/images/paysages/Viewpoint-Laos.jpg";
import paysage19 from "../../assets/images/paysages/ViewPoint-Vang-Vieng-Laos.jpg";
import paysage20 from "../../assets/images/paysages/View-Sunset-Prague.jpg";
import paysage21 from "../../assets/images/paysages/village-haute-loire.jpg";
import monument1 from "../../assets/images/monuments/abbaye-moyenmoutier-vosges.jpg";
import monument2 from "../../assets/images/monuments/chateau-haroue-photo.jpg";
import monument3 from "../../assets/images/monuments/chateau-luxembourg.jpg";
import monument4 from "../../assets/images/monuments/chateau-photo-grandest.jpg";
import monument5 from "../../assets/images/monuments/Chateau-preish-photo.jpg";
import monument6 from "../../assets/images/monuments/focus-haroue.jpg";
import monument7 from "../../assets/images/monuments/Hanoi-Vietnam-pont.jpg";
import monument8 from "../../assets/images/monuments/Laos-temple.jpg";
import monument9 from "../../assets/images/monuments/Luang-prabang-temple.jpg";
import monument10 from "../../assets/images/monuments/Opera-hanoi-photo.jpg";
import monument11 from "../../assets/images/monuments/photo-chateau.jpg";
import monument12 from "../../assets/images/monuments/Pont-stviencent.jpg";
import monument13 from "../../assets/images/monuments/Prague-City-Charles.jpg";
import monument14 from "../../assets/images/monuments/Prague-city.jpg";
import monument15 from "../../assets/images/monuments/Prague-Republique-tcheque.jpg";
import monument16 from "../../assets/images/monuments/Rodemack-chateau.jpg";
import monument17 from "../../assets/images/monuments/Rodemack-ruelle.jpg";
import monument18 from "../../assets/images/monuments/Temple-Angkor.jpg";
import monument19 from "../../assets/images/monuments/Temple-Halong.jpg";
import monument20 from "../../assets/images/monuments/Temple-tamcoc-vietnam.jpg";
import monument21 from "../../assets/images/monuments/Temple-Vientiane.jpg";
import hotel1 from "../../assets/images/hotel/3744.jpg";
import hotel2 from "../../assets/images/hotel/3763.jpg";
import hotel3 from "../../assets/images/hotel/3779.jpg";
import hotel4 from "../../assets/images/hotel/3796.jpg";
import hotel5 from "../../assets/images/hotel/3819.jpg";
import hotel6 from "../../assets/images/hotel/3824.1.jpg";
import hotel7 from "../../assets/images/hotel/3836.jpg";
import hotel8 from "../../assets/images/hotel/3848.jpg";
import hotel9 from "../../assets/images/hotel/3856.jpg";
import hotel10 from "../../assets/images/hotel/3913.jpg";
import hotel11 from "../../assets/images/hotel/3959.jpg";
import hotel12 from "../../assets/images/hotel/3985.jpg";
import hotel13 from "../../assets/images/hotel/4013.jpg";
import hotel14 from "../../assets/images/hotel/4014.jpg";
import hotel15 from "../../assets/images/hotel/4028.jpg";
import hotel16 from "../../assets/images/hotel/4037.jpg";
import "../../styles/responsive/Portfolio.responsive.css";
import "../../styles/responsive-tablet/Portfolio.responsive-tablet.css";

function Portfolio() {
  return (
    <main>
      <Banner />
      <Title title="Portfolio" />
      <section className="d-flex gap-4 justify-content-center px-5 py-5 portfolio-section">
        <CardPortfolio
          photo={photo1}
          title="Hôtels, et établissements touristiques"
          text="Découvrez mes reportages photo réalisés pour hôtels, gîtes, domaines, lodges, maisons d'hôtes et restaurants, mettant en valeur les lieux, l'ambiance et l'expérience client."
          modalId="modal-portfolio-1"
          photos={[hotel1, hotel2, hotel3, hotel4, hotel5, hotel6, hotel7, hotel8, hotel9, hotel10, hotel11, hotel12, hotel13, hotel14, hotel15, hotel16]}
        />
        <CardPortfolio
          photo={photo2}
          title="Monuments & Patrimoine"
          text="Explorez mes photographies de monuments, villes et lieux emblématiques, capturant l'architecture et l'histoire des destinations."
          modalId="modal-portfolio-2"
          photos={[monument1, monument2, monument3, monument4, monument5, monument6, monument7, monument8, monument9, monument10, monument11, monument12, monument13, monument14, monument15, monument16, monument17, monument18, monument19, monument20, monument21]}
        />
        <CardPortfolio
          photo={photo3}
          title="Paysages & Destinations"
          text="Découvrez mes photographies de paysages et destinations à travers le monde, entre nature, cultures et instants de vie qui font l'âme du voyage."
          modalId="modal-portfolio-3"
          photos={[paysage1, paysage2, paysage3, paysage4, paysage5, paysage6, paysage7, paysage8, paysage9, paysage10, paysage11, paysage12, paysage13, paysage14, paysage15, paysage16, paysage17, paysage18, paysage19, paysage20, paysage21]}
        />
      </section>
    </main>
  );
}

export default Portfolio;
