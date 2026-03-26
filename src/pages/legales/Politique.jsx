import Banner from "../../components/ui/Banner";
import Title from "../../components/ui/Title";
import CardMentions from "../../components/ui/CardMentions";

function Politique() {
  return (
    <main>
      <Banner />
      <Title title="Politique de confidentialité" />
      <section className="py-5">
        <CardMentions
          cardId="politique-1"
          text={<>Dernière mise à jour : 26 mars 2026</>}
          articles={[
            {
              title: "1. Données personnelles que nous collectons",
              content: (
                <>
                  Lorsque vous naviguez sur notre site ou utilisez un formulaire
                  (contact, réservation, newsletter…), nous pouvons collecter
                  certaines informations personnelles vous concernant, comme :
                  <ul>
                    <li>Votre nom et prénom</li>
                    <li>Votre adresse e-mail</li>
                    <li>Votre numéro de téléphone</li>
                    <li>Votre message ou demande</li>
                    <li>
                      Toute autre information que vous nous fournissez
                      volontairement
                    </li>
                  </ul>
                  Nous recueillons également certaines données techniques
                  automatiquement, comme :
                  <ul>
                    <li>Votre adresse IP</li>
                    <li>Le type d{"'"}appareil ou de navigateur utilisé</li>
                    <li>Les pages visitées et le temps passé sur le site</li>
                    <li>Les interactions (clics, navigation…)</li>
                  </ul>
                </>
              ),
            },
            {
              title: "2. Finalités de la collecte",
              content: (
                <>
                  Nous collectons ces données pour :
                  <ul>
                    <li>
                      Répondre à vos demandes via le formulaire de contact
                    </li>
                    <li>Vous fournir les services proposés sur notre site</li>
                    <li>Améliorer l{"'"}expérience utilisateur</li>
                    <li>
                      Vous contacter à des fins d{"'"}information ou de
                      communication (ex. actualités, offres, suivi)
                    </li>
                    <li>
                      Garantir la sécurité et le bon fonctionnement du site
                    </li>
                    <li>Respecter nos obligations légales</li>
                  </ul>
                </>
              ),
            },
            {
              title: "3. Stockage et sécurité des données",
              content: (
                <>
                  Notre site est hébergé sur la plateforme Wix.com, qui stocke
                  vos données sur des serveurs sécurisés derrière un pare-feu.
                  <br />
                  <br />
                  Wix applique des mesures de sécurité conformes aux standards
                  de l{"'"}industrie, y compris pour les paiements en ligne si
                  ceux-ci sont activés.
                </>
              ),
            },
            {
              title: "4. Transmission à des tiers",
              content: (
                <>
                  Nous ne vendons, ne louons et ne partageons pas vos données
                  personnelles avec des tiers, sauf si cela est nécessaire pour
                  :
                  <ul>
                    <li>Répondre à vos demandes</li>
                    <li>
                      Fournir un service spécifique via un prestataire (ex.
                      email marketing, paiement sécurisé)
                    </li>
                    <li>Respecter la loi ou une obligation légale</li>
                  </ul>
                </>
              ),
            },
            {
              title: "5. Vos droits (RGPD)",
              content: (
                <>
                  Conformément au Règlement Général sur la Protection des
                  Données (RGPD), vous disposez des droits suivants :
                  <ul>
                    <li>Accès à vos données personnelles</li>
                    <li>
                      Rectification si les données sont incorrectes ou
                      incomplètes
                    </li>
                    <li>Suppression (droit à l{"'"}oubli)</li>
                    <li>Limitation du traitement de vos données</li>
                    <li>
                      Opposition au traitement, notamment à des fins de
                      prospection
                    </li>
                    <li>Portabilité de vos données vers un autre service</li>
                  </ul>
                  Pour exercer vos droits ou pour toute question concernant vos
                  données :
                  <br />
                  maud.paradispro@gmail.com
                  <br />
                  <br />
                  Nous vous répondrons dans un délai maximum de 30 jours.
                </>
              ),
            },
            {
              title: "6. Modifications de cette politique",
              content: (
                <>
                  Nous pouvons mettre à jour cette politique de confidentialité
                  à tout moment.
                  <br />
                  <br />
                  Nous vous invitons à la consulter régulièrement. Toute
                  modification importante sera indiquée sur cette page.
                </>
              ),
            },
            {
              title: "7. Contact",
              content: (
                <>
                  Pour toute demande concernant vos données personnelles,
                  contactez nous à : maud.paradispro@gmail.com
                </>
              ),
            },
          ]}
        />
      </section>
    </main>
  );
}

export default Politique;
