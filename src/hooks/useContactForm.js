import { useState } from "react";
import { EMAILJS_CONFIG } from "../config/emailjs";

function useContactForm() {
  const [nom, setNom] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!nom || !tel || !email || !sujet || !message) {
      setError(true);
      return;
    }
    setError(false);
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
    error,
    success,
    sending,
    handleSubmit,
  };
}

export default useContactForm;
