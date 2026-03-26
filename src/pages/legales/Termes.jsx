import Banner from "../../components/ui/Banner";
import Title from "../../components/ui/Title";
import CardMentions from "../../components/ui/CardMentions";

function Termes() {
  return (
    <main>
      <Banner />
      <Title title="Termes et conditions" />
      <section className="py-5">
        <CardMentions
          cardId="termes-1"
          title="Conditions Générales de Vente"
          text={
            <>
              Tout versement d{"'"}un acompte implique que vous ayez pris
              connaissance des CGV ci-dessous et que vous les acceptiez.
              <br />
              <br />
              Le site Internet eden-photographie.fr est la propriété de Maud
              Paradis Schindler.
              <br />
              Propriétaire : Maud Paradis Schindler, micro entrepreneur,
              domiciliée en Meurthe-et-Moselle.
              <br />
              Numéro de Siret : 944073782 00012
            </>
          }
          articles={[
            {
              title: "Article 1 - Objet",
              content: (
                <>
                  Les conditions générales de vente (ci-après nommées « CGV »)
                  créent un accord légal et s{"'"}appliquent à toutes les
                  commandes de prestations et de produits conclues entre le
                  Client (ci-après nommé « le client ») et Maud Paradis
                  Schindler (ci-après nommée « la photographe »). Toute
                  réservation de séance ou commande de produits entraîne l{"'"}
                  entière adhésion aux présentes CGV, sauf conditions
                  particulières consenties par écrit entre la photographe et le
                  client.
                </>
              ),
            },
            {
              title: "Article 2 - Tarifs",
              content: (
                <>
                  Les prix de vente, indiqués en euros, correspondent à ceux en
                  vigueur lors de la réservation d{"'"}une séance ou de la
                  commande de produits. Les tarifs peuvent être modifiés à tout
                  moment, sans préavis. Toutefois, tout changement tarifaire ne
                  s{"'"}appliquera pas aux réservations ou commandes confirmées
                  avant l{"'"}entrée en vigueur des nouveaux tarifs.
                </>
              ),
            },
            {
              title: "Article 3 - TVA",
              content: (
                <>
                  La TVA est non applicable, en vertu de l{"'"}article 293 B du
                  CGI.
                </>
              ),
            },
            {
              title:
                "Article 4 - Réservation d'une prestation et délais de rétractation",
              content: (
                <>
                  La réservation d{"'"}une prestation devient effective dès
                  validation écrite du devis par le Client, accompagnée de la
                  mention « Bon pour accord ».
                  <br />
                  <br />
                  Aucune réservation n{"'"}est considérée comme confirmée sans
                  cette validation préalable.
                  <br />
                  <br />
                  Le Prestataire ne demande pas le versement d{"'"}un acompte.
                  Toutefois, la validation du devis engage pleinement le Client
                  quant à l{"'"}exécution de la prestation et au respect des
                  présentes Conditions Générales de Vente.
                  <br />
                  <br />
                  En cas d{"'"}annulation par le Client après validation du
                  devis :
                  <ul>
                    <li>
                      Si l{"'"}annulation intervient plus de 7 jours avant la
                      date prévue de la prestation, aucune pénalité ne sera
                      appliquée.
                    </li>
                    <li>
                      Si l{"'"}annulation intervient entre 7 jours et 72 heures
                      avant la prestation, le Prestataire se réserve le droit de
                      facturer jusqu{"'"}à 30 % du montant total de la
                      prestation.
                    </li>
                    <li>
                      Si l{"'"}annulation intervient moins de 72 heures avant la
                      prestation, ou en cas de non-présentation du Client, la
                      totalité de la prestation pourra être facturée.
                    </li>
                  </ul>
                  Toute demande de report de prestation devra être formulée par
                  écrit dans les meilleurs délais.
                  <br />
                  <br />
                  Pour trouver les conditions de report de prestation, veuillez
                  vous rendre à l{"'"}Article 6 - Report ou Annulation.
                </>
              ),
            },
            {
              title: "Article 5 - Paiement",
              content: (
                <>
                  <strong>Émission des factures :</strong> Pour chaque
                  prestation, une facture distincte sera émise, indiquant le
                  montant dû et la date limite de paiement. Ces factures seront
                  transmises au client par voie électronique et doivent être
                  réglées à réception et dans un délai maximum de 7 jours
                  calendaire.
                  <br />
                  <br />
                  <strong>
                    Retards de paiement et intérêts de retard :
                  </strong>{" "}
                  En cas de retard de paiement, des intérêts de retard seront
                  automatiquement appliqués à compter du premier jour suivant la
                  date d{"'"}échéance de la facture. Le taux d{"'"}intérêt
                  applicable sera de 3,2 %, conformément au taux d{"'"}intérêt
                  légal en vigueur. Ces intérêts seront calculés sur le montant
                  total de la facture impayée jusqu{"'"}au paiement complet de
                  la somme due.
                  <br />
                  <br />
                  <strong>
                    Clause de résiliation et suspension de prestation :
                  </strong>{" "}
                  En cas de non-paiement dans un délai de 30 jours après la date
                  d{"'"}échéance de la facture, l{"'"}entreprise se réserve le
                  droit de suspendre toute prestation en cours et/ou d{"'"}
                  annuler toute commande, sans préjudice des intérêts de retard
                  et indemnités mentionnés ci-dessus.
                  <br />
                  <br />
                  <strong>Frais de recouvrement supplémentaires :</strong> Si le
                  recouvrement de la créance nécessite l{"'"}intervention d{"'"}
                  une société de recouvrement ou de voies légales, le client s
                  {"'"}engage à rembourser tous les frais occasionnés par cette
                  procédure.
                  <br />
                  <br />
                  <strong>Conditions de livraison des photos :</strong> La
                  livraison des photographies, qu{"'"}il s{"'"}agisse de la
                  galerie de sélection ou des images retouchées, interviendra
                  uniquement après le règlement complet de la somme due. Aucune
                  image ne sera transmise avant la réception de l{"'"}
                  intégralité du paiement.
                </>
              ),
            },
            {
              title: "Article 6 - Report ou annulation",
              content: (
                <>
                  <strong>Demande de modification :</strong> Toute demande de
                  changement de date ou d{"'"}heure de la séance doit être
                  effectuée par le client au plus tard 3 jours avant la date
                  prévue. Passé ce délai, aucune modification ne sera garantie.
                  <br />
                  <br />
                  <strong>Responsabilité en cas de report :</strong> En cas de
                  report, la photographe décline toute responsabilité quant à l
                  {"'"}impossibilité de reproduire les conditions initiales
                  (météo, saison, cadre, ou restrictions sanitaires). Toute
                  différence liée à ces facteurs sera à la charge du client.
                  <br />
                  <br />
                  <strong>Annulation par le client :</strong> En cas d{"'"}
                  annulation par le client, l{"'"}acompte reste définitivement
                  acquis à la photographe, couvrant ainsi les frais de
                  préparation et la perte de revenus. Conformément à la loi, le
                  solde reste dû et exigible.
                  <br />
                  <br />
                  <strong>Nombre maximum de reports :</strong> Le client peut
                  reporter la séance 1 fois. Au-delà, l{"'"}acompte sera perdu.
                  Une nouvelle réservation nécessitera le paiement d{"'"}un
                  nouvel acompte.
                </>
              ),
            },
            {
              title: "Article 7 - Déroulement d'une séance",
              content: (
                <>
                  Le client s{"'"}engage à être à l{"'"}heure au rendez-vous
                  fixé pour la séance. Le client s{"'"}engage à faciliter le
                  travail de la photographe lors de l{"'"}exécution de la
                  prestation.
                  <br />
                  <br />
                  La photographe ne pourra pas être tenue responsable d{"'"}une
                  moindre qualité des photos en cas de manque de coopération d
                  {"'"}un des participants de la séance.
                </>
              ),
            },
            {
              title: "Article 8 - Livraison des photos",
              content: (
                <>
                  Les photos sélectionnées par le client sont livrées sous forme
                  de galerie numérique sous 10 à 14 jours (sauf indication
                  contraire). La retouche est effectuée selon le style du
                  Photographe ; aucune retouche supplémentaire non prévue ne
                  sera réalisée sans frais additionnel. Les photos sont
                  conservées 6 mois après la livraison.
                </>
              ),
            },
            {
              title: "Article 9 - Problème technique",
              content: (
                <>
                  <strong>
                    Problème technique ou accident pendant la prestation :
                  </strong>{" "}
                  En cas de problème technique avec le matériel photographique
                  ou d{"'"}un accident empêchant la réalisation complète des
                  prises de vue, la photographe s{"'"}engage à reprogrammer la
                  séance dans les meilleurs délais afin d{"'"}assurer la
                  prestation convenue dans des conditions optimales.
                  <br />
                  <br />
                  <strong>
                    Perte de données ou fichiers inexploitables :
                  </strong>{" "}
                  Malgré toutes les précautions prises dans la gestion des
                  fichiers numériques, des incidents exceptionnels peuvent
                  survenir (erreur de manipulation, destruction accidentelle,
                  carte mémoire défaillante ou panne informatique). En cas de
                  perte totale ou partielle des photographies, la photographe s
                  {"'"}engage à offrir au client une nouvelle séance, sans frais
                  supplémentaires, afin de compenser cet incident indépendant de
                  sa volonté.
                </>
              ),
            },
            {
              title: "Article 10 - Responsabilité",
              content: (
                <>
                  Le client est responsable de lui-même et des personnes l{"'"}
                  accompagnant à la séance. En cas de détérioration ou de casse
                  du matériel par le(s) client(s), celui-ci devra rembourser au
                  prix du neuf. Si l{"'"}accident est du fait de la photographe,
                  son assurance civile professionnelle sera déclenchée.
                </>
              ),
            },
            {
              title:
                "Article 11 - Post-production et conservation des fichiers numériques",
              content: (
                <>
                  <strong>Style artistique et évolution du travail :</strong> Le
                  client reconnaît être familier avec le portfolio de la
                  photographe et sollicite ses services en connaissance de son
                  style artistique. Il comprend que le travail de la photographe
                  est en constante évolution et que chaque prestation est unique
                  et artistique. Par conséquent, les photographies livrées
                  peuvent différer de celles réalisées précédemment.
                  <br />
                  <br />
                  <strong>Vision artistique de la photographe :</strong> Le
                  client accepte que la vision artistique de la photographe
                  puisse différer de la sienne et que les photographies ne
                  peuvent être rejetées en fonction de goûts ou de critères
                  esthétiques personnels.
                  <br />
                  <br />
                  <strong>Mise en page des images :</strong> La photographe est
                  seule juge de la mise en page des images lors de la
                  réalisation d{"'"}un livre ou d{"'"}autres produits
                  photographiques.
                  <br />
                  <br />
                  <strong>Fichiers numériques :</strong> Par défaut, aucun
                  fichier brut (RAW) ne sera livré au client. Seules les
                  photographies sélectionnées et retouchées par la photographe
                  seront fournies au format JPEG de haute qualité. Toutefois, le
                  client a la possibilité d{"'"}acquérir l{"'"}intégralité des
                  fichiers RAW moyennant un supplément de 300 € TTC.
                  <br />
                  <br />
                  <strong>Conservation des photographies :</strong> La
                  photographe s{"'"}engage à conserver les fichiers numériques
                  pendant une durée de 8 mois à compter de la date de la séance.
                  Passé ce délai, et sauf en cas de force majeure, la
                  photographe se réserve le droit de détruire les fichiers.
                </>
              ),
            },
            {
              title: "Article 12 - Impression des photos",
              content: (
                <>
                  Si le client choisit d{"'"}imprimer lui-même les photographies
                  à partir des fichiers numériques fournis, la photographe
                  décline toute responsabilité quant à la qualité des tirages
                  réalisés par des laboratoires tiers. Il est recommandé de
                  faire appel à des professionnels qualifiés pour garantir un
                  rendu fidèle aux fichiers originaux.
                </>
              ),
            },
            {
              title: "Article 13 - Propriété intellectuelle",
              content: (
                <>
                  <strong>Droits d{"'"}auteur :</strong> Les photographies
                  réalisées lors des séances sont protégées par le Code de la
                  propriété intellectuelle, notamment les articles L.121-1 et
                  suivants. Même après la remise des fichiers numériques, la
                  photographe conserve l{"'"}intégralité des droits d{"'"}auteur
                  sur les œuvres, à l{"'"}exception du droit à l{"'"}image du
                  client.
                  <br />
                  <br />
                  <strong>Utilisation commerciale :</strong> Toute utilisation
                  commerciale des photographies par le client est strictement
                  interdite sans un accord écrit préalable de la photographe.
                  Toutefois, une cession spécifique des droits d{"'"}
                  exploitation commerciale peut être envisagée dans le cadre d
                  {"'"}un devis signé entre les parties.
                  <br />
                  <br />
                  <strong>Défense des droits d{"'"}auteur :</strong> Toute
                  utilisation non autorisée des photographies constitue une
                  contrefaçon, délit puni par l{"'"}article L.335-2 du Code de
                  la propriété intellectuelle de trois ans d{"'"}emprisonnement
                  et de 300 000 euros d{"'"}amende.
                  <br />
                  <br />
                  <strong>Interdiction spécifique :</strong> Le client s{"'"}
                  engage à ne pas modifier les photographies sans consentement
                  préalable de la photographe.
                  <br />
                  <br />
                  <strong>Droits du client :</strong> Pour toute diffusion
                  publique, le client doit mentionner le pseudonyme de la
                  photographe (@l.eden.photographie) sous chaque image en
                  incluant un lien vers son compte Instagram.
                </>
              ),
            },
            {
              title: "Article 14 - Droit à l'image et autorisation de diffusion",
              content: (
                <>
                  Dans le cadre de l{"'"}exécution de la prestation, le Client autorise le Prestataire à réaliser des prises de vues (photographies et/ou vidéos) incluant, le cas échéant, des personnes, des biens, des lieux, ainsi que tout élément identifiable.
                  <br /><br />
                  Le Client déclare être titulaire des droits nécessaires ou avoir obtenu l{"'"}ensemble des autorisations requises auprès des tiers concernés (notamment les personnes physiques, propriétaires de lieux privés, ou détenteurs de droits), permettant la captation et l{"'"}exploitation des images réalisées. Le Prestataire ne pourra être tenu responsable en cas de défaut d{"'"}autorisation préalable.
                  <br /><br />
                  Sauf mention contraire explicitement formulée par écrit avant la réalisation de la prestation, le Client autorise le Prestataire à utiliser, reproduire et diffuser les images réalisées dans le cadre de sa communication professionnelle et promotionnelle, sur tous supports, notamment :
                  <ul>
                    <li>site internet,</li>
                    <li>réseaux sociaux,</li>
                    <li>supports commerciaux,</li>
                    <li>portfolio,</li>
                    <li>publications print ou digitales.</li>
                  </ul>
                  Cette autorisation est accordée à titre gratuit, sans limitation de durée, et pour le monde entier.
                  <br /><br />
                  Le Prestataire s{"'"}engage à ne pas faire un usage des images susceptible de porter atteinte à la réputation ou à la vie privée des personnes ou du Client.
                  <br /><br />
                  En cas de refus de diffusion par le Client, celui-ci devra en informer le Prestataire par écrit avant la réalisation de la prestation. Ce refus pourra faire l{"'"}objet d{"'"}une majoration tarifaire, en raison de la perte de valorisation commerciale pour le Prestataire.
                </>
              ),
            },
            {
              title: "Article 15 - Localisation et trajet",
              content: (
                <>
                  Les prestations sont réalisables dans tout Nancy ou dans un
                  rayon de 20 km sans frais de déplacement supplémentaires.
                  <br />
                  <br />
                  <strong>
                    Prestations dans toute la France et à l{"'"}international :
                  </strong>{" "}
                  La photographe est disponible pour des prestations à l{"'"}
                  international. Les frais seront indiqués dans le devis en
                  fonction de la demande et du contrat qui aura été entendu
                  entre les deux parties.
                </>
              ),
            },
            {
              title: "Article 16 - Loi applicable",
              content: (
                <>
                  Les présentes conditions de vente en ligne sont soumises à la
                  loi française. En cas de litige, la compétence est attribuée
                  aux tribunaux compétents de Nancy, nonobstant pluralité de
                  défendeurs ou appel en garantie.
                </>
              ),
            },
            {
              title: "Article 17 - Service client",
              content: (
                <>
                  Pour toute question ou assistance, vous pouvez contacter Maud
                  Paradis Schindler par :
                  <ul>
                    <li>E-mail : Maud.paradispro@gmail.com</li>
                    <li>Instagram (DM) : @l.eden.photographie</li>
                    <li>Whatsapp : 06.65.58.82.92</li>
                  </ul>
                </>
              ),
            },
          ]}
        />
      </section>
    </main>
  );
}

export default Termes;
