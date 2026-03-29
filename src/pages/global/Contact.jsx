import { useEffect, useRef } from "react";
import { Modal } from "bootstrap";
import Banner from "../../components/ui/Banner";
import Title from "../../components/ui/Title";
import contactImg from "../../assets/images/profile/contact-1.JPG";
import useContactForm from "../../hooks/useContactForm";
import ModalContact from "../../components/ui/ModalContact";
import "../../styles/stylespages/Contact.css";
import "../../styles/responsive/Contact.responsive.css";
import "../../styles/responsive-tablet/Contact.responsive-tablet.css";
import "../../styles/animation/Contact.animation.css";

function Contact() {
  const { nom, setNom, tel, setTel, email, setEmail, sujet, setSujet, message, setMessage, error, success, sending, handleSubmit } = useContactForm();
  const sectionRef = useRef(null);

  useEffect(() => {
    if (success) {
      const modal = new Modal(document.getElementById("modalContact"));
      modal.show();
    }
  }, [success]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".contact-anim-left, .contact-anim-right")
            .forEach((el) => el.classList.add("is-visible"));
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <Banner />
      <Title title="Contact" />
      <section ref={sectionRef} className="contact-section d-flex gap-5 align-items-stretch">
        <div className="contact-photo-wrapper contact-anim-left" style={{ width: "22rem", flexShrink: 0 }}>
          <img
            src={contactImg}
            alt="Contact Eden Photographie"
            className="contact-photo"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="contact-anim-right d-flex flex-column justify-content-center w-100">
          <h2 className="contact-title mb-4">Envoyer-moi un message</h2>
          <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
            <div>
              <label className="contact-label mb-1 d-block">
                Nom et prénom ou entreprise : <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="contact-input form-control"
                placeholder="Écrivez votre nom et prénom ou entreprise ..."
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </div>
            <div>
              <label className="contact-label mb-1 d-block">
                Téléphone : <span className="text-danger">*</span>
              </label>
              <input
                type="tel"
                className="contact-input form-control"
                placeholder="Votre numéro de téléphone ..."
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
            </div>
            <div>
              <label className="contact-label mb-1 d-block">
                Adresse e-mail : <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="contact-input form-control"
                placeholder="Votre adresse e-mail ..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="contact-label mb-1 d-block">Sujet : <span className="text-danger">*</span></label>
              <select
                className="contact-input form-select"
                value={sujet}
                onChange={(e) => setSujet(e.target.value)}
              >
                <option value="" disabled>Choisissez un sujet ...</option>
                <option value="devis-photo">Devis photographie</option>
                <option value="devis-video">Devis vidéographie</option>
                <option value="devis-cm">Devis community manager</option>
                <option value="autre">Autre sujet</option>
              </select>
            </div>
            <div>
              <label className="contact-label mb-1 d-block">Message : <span className="text-danger">*</span></label>
              <textarea
                className="contact-input form-control"
                rows={5}
                placeholder="Écrivez votre message ici ..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div>
              <div className="text-center">
                <button type="submit" className="contact-btn" disabled={sending}>
                  {sending ? "Envoi en cours..." : "Envoyer"}
                </button>
              </div>
              <p className="text-danger mt-1 mb-0" style={{ fontSize: "0.9rem" }}>
                * Champs obligatoires
              </p>
              {error && (
                <p className="text-danger mb-0" style={{ fontSize: "0.9rem" }}>
                  Veuillez remplir tous les champs avant d'envoyer.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
      <ModalContact />
    </main>
  );
}

export default Contact;
