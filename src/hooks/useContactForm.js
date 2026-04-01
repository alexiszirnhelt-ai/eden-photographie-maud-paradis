import { useState } from "react";
import { EMAILJS_CONFIG } from "../config/emailjs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^(\+33|0033|0)[1-9]([ .-]?\d{2}){4}$/;

function useContactForm() {
  const [nom, setNom] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  function validate() {
    const e = {};
    if (!nom.trim()) e.nom = "Ce champ est obligatoire.";
    if (!tel.trim()) e.tel = "Ce champ est obligatoire.";
    else if (!PHONE_REGEX.test(tel.trim())) e.tel = "Numéro de téléphone invalide.";
    if (!email.trim()) e.email = "Ce champ est obligatoire.";
    else if (!EMAIL_REGEX.test(email.trim())) e.email = "Adresse e-mail invalide.";
    if (!sujet) e.sujet = "Veuillez choisir un sujet.";
    if (!message.trim()) e.message = "Ce champ est obligatoire.";
    return e;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSending(true);

    const { default: emailjs } = await import("@emailjs/browser");

    emailjs
      .send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          name: nom,
          phone: tel,
          email: email,
          subject: sujet,
          message: message,
        },
        EMAILJS_CONFIG.publicKey
      )
      .then(() => {
        setSuccess(true);
        setSending(false);
        setNom("");
        setTel("");
        setEmail("");
        setSujet("");
        setMessage("");
      })
      .catch(() => {
        setSending(false);
      });
  }

  return {
    nom, setNom,
    tel, setTel,
    email, setEmail,
    sujet, setSujet,
    message, setMessage,
    errors,
    success,
    sending,
    handleSubmit,
  };
}

export default useContactForm;
