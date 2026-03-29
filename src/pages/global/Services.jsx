import Banner from "../../components/ui/Banner";
import Title from "../../components/ui/Title";
import CardServices from "../../components/ui/CardServices";
import photo1 from "../../assets/images/hotel/3959.jpg";
import photo2 from "../../assets/images/Photo-services/Chateau-haroue-photo.jpg";
import photo3 from "../../assets/images/Photo-services/service-profile-3.jpg";
import diapo1 from "../../assets/images/Diapo-service/airbnb-studio-nancy.jpg";
import diapo2 from "../../assets/images/Diapo-service/chammbre-hotel-vosges.jpg";
import diapo3 from "../../assets/images/Diapo-service/photo-appartement-gerardmer.jpg";
import diapo4 from "../../assets/images/Diapo-service/spa-photo-hotel.jpg";
import "../../styles/responsive/Services.responsive.css";
import "../../styles/responsive-tablet/Services.responsive-tablet.css";

function Services() {
  return (
    <main>
      <Banner />
      <Title title="Services" />
      <section className="d-flex gap-4 justify-content-center px-5 py-5 services-section">
        <CardServices
          animationClass="card-anim-left"
          photo={photo1}
          title="Photographie"
          text="Valorisez votre établissement avec une banque d'image de photos professionnelles prêtes à être utilisées pour votre communication digitale."
          modalId="modal-service-1"
          modalPhoto={photo1}
          carouselImages={[diapo1, diapo2, diapo3, diapo4]}
          section1Title="Photographie"
          section1Text={<>
            Je réalise des reportages photo sur mesure pour vos hôtels, gîtes, domaines, lodges, maisons d{"'"}hôtes, chambres d{"'"}hôtes, restaurants, cafés, agences de voyage, offices de tourisme, mairies et collectivités territoriales.<br /><br />
            Chaque séance est pensée pour mettre en valeur vos espaces, l{"'"}ambiance, la décoration, la gastronomie et les expériences proposées, en fonction du pack choisi. Je propose différents packs de banque d{"'"}images adaptés à vos besoins : du reportage photo ciblé à la création complète de contenu pour vos réseaux sociaux et supports digitaux.<br /><br />
            Les images sont livrées en haute qualité sous 10 à 14 jours, prêtes à être publiées sur vos réseaux sociaux, site web ou supports de communication.
          </>}
          section2Title="Tarif"
          section2Text="À partir de 400€"
        />
        <CardServices
          animationClass="card-anim-bottom"
          photo={photo2}
          title="Vidéographie"
          text="Créez des vidéos engageantes pour présenter votre établissement touristique et séduire vos clients sur vos supports digitaux et réseaux sociaux."
          modalId="modal-service-2"
          modalPhoto={photo2}
          section1Title="Vidéographie"
          section1Text={<>
            Je réalise des vidéos sur mesure pour vos hôtels, gîtes, domaines, lodges, maisons d{"'"}hôtes, chambres d{"'"}hôtes, restaurants, cafés, agences de voyage, offices de tourisme, mairies et collectivités territoriales.<br /><br />
            Chaque projet est pensé pour mettre en valeur vos espaces, l{"'"}ambiance, vos services et expériences, avec un montage dynamique et un storytelling adapté au format choisi.<br /><br />
            <u>Je propose différents packs vidéo :</u><br /><br />
            Social media (Reels / TikTok) : vidéos courtes de 15 à 30 secondes, montées et prêtes à publier, avec couleurs harmonisées et musique libre de droit.<br /><br />
            Site internet : vidéos horizontales de 30 secondes à 1 minute, adaptées à vos besoins, avec couleurs et musique choisies pour sublimer votre établissement.<br /><br />
            Des rushes courts (6 à 12 sec) peuvent être inclus en complément dans le cadre d{"'"}une prestation complète, avec toutes les vidéos livrées en haute qualité, prêtes à être utilisées sur vos réseaux sociaux et supports digitaux.
          </>}
          section2Title="Tarif"
          section2Text="À partir de 250 €"
          imageHeight="12rem"
          modalWidth="70rem"
        />
        <CardServices
          animationClass="card-anim-right"
          photo={photo3}
          title="Community Manager"
          text="Bénéficiez d'une communication digitale clé en main complète et stratégique avec création de contenu professionnel, optimisation des réseaux sociaux et gestion de votre présence en ligne."
          modalId="modal-service-3"
          modalPhoto={photo3}
          section1Title="Community Manager"
          section1Text={<>
            Bénéficiez d{"'"}une gestion complète de votre communication digitale pour vos hôtels, gîtes, domaines, lodges, maisons d{"'"}hôtes, chambres d{"'"}hôtes, restaurants, cafés, agences de voyage, offices de tourisme, mairies et collectivités territoriales.<br /><br />
            Chaque prestation est conçue sur mesure en fonction de vos objectifs et besoins. Je mets en place un plan éditorial stratégique, avec calendrier éditorial, création de contenus visuels, publication, gestion des commentaires et suivi des statistiques, toujours en respectant votre identité visuelle et une véritable stratégie digitale pour atteindre vos objectifs.<br /><br />
            Ma particularité : je me déplace sur place pour réaliser photos et vidéos, afin que vos contenus soient authentiques, qualitatifs et professionnels, parfaitement adaptés à votre communication et à vos réseaux. Les photos et vidéos réalisées sont directement intégrées à votre stratégie de communication afin de garantir une présence en ligne cohérente et professionnelle.
          </>}
          section2Title="Tarif"
          section2Text="À partir de 500 €/mois"
          imageHeight="12rem"
          modalWidth="70rem"
        />
      </section>
    </main>
  );
}

export default Services;
