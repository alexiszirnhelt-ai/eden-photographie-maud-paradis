import Banner from "../../components/ui/Banner";
import Title from "../../components/ui/Title";
import CardAbout from "../../components/ui/CardAbout";
import aboutImg from "../../assets/images/profile/about-1.JPG";
import about2Img from "../../assets/images/profile/about-2.JPG";
import about3Img from "../../assets/images/profile/about-3.JPG";

function About() {
  return (
    <main>
      <Banner />
      <Title title="À propos" />
      <CardAbout grow photoSize={286} photo={aboutImg} objectPosition="center 50%">
        <p className="presentation-text">
          Depuis toute petite, j'ai toujours eu un appareil photo entre les
          mains. La photographie est une véritable passion qui ne m'a jamais
          quittée. En parallèle, j'ai travaillé pendant six ans dans
          l'hôtellerie, d'abord comme réceptionniste puis comme première de
          réception. Ces expériences m'ont permis de comprendre deux aspects
          essentiels : la proximité avec les clients et leurs besoins, et la
          dimension business d'un établissement. J'y ai appris l'importance du
          service client, des détails qui font la différence et de la
          valorisation d'un établissement du secteur du tourisme par une
          communication digitale stratégique. À la suite de quoi, j'ai décidé de
          vivre pleinement de ma passion et de fonder L'Eden Photographie.
        </p>
      </CardAbout>
      <CardAbout grow photoSize={286} photo={about2Img} objectPosition="center 100%">
        <p className="presentation-text">
          En observant le secteur, j'ai constaté que de nombreux établissements
          touristiques manquaient de présence en ligne et avaient du mal à
          communiquer efficacement. Pour répondre à ce besoin, je me suis formée
          au community management et j'ai développé des offres clés en main.
          Aujourd'hui, j'accompagne les hôtels, restaurants, cafés, gîtes,
          agences de voyage et offices de tourisme dans leur communication
          digitale, afin que chaque photo, vidéo et publication soit utilisée de
          manière stratégique pour attirer et fidéliser leurs clients.
        </p>
      </CardAbout>
      <CardAbout grow photoSize={286} photo={about3Img} objectPosition="center 30%">
        <p className="presentation-text">
          Créative et légèrement perfectionniste, j'aime repousser mes limites
          pour atteindre le meilleur résultat possible. Je travaille avec
          professionnalisme, organisation et bienveillance, en gardant toujours
          le sourire et la bonne humeur comme moteurs de chaque projet. Mon
          objectif est de créer des contenus visuels et publications impactants,
          de qualité, et de les intégrer dans une stratégie digitale efficace,
          pour valoriser l'établissement et renforcer sa visibilité sur les
          réseaux sociaux.
        </p>
      </CardAbout>
    </main>
  );
}

export default About;
