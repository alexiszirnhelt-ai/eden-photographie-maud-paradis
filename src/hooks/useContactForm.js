import { useState } from "react";

function useContactForm() {
  const [nom, setNom] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!nom || !tel || !email || !sujet || !message) {
      setError(true);
    } else {
      setError(false);
    }
  }

  return {
    nom, setNom,
    tel, setTel,
    email, setEmail,
    sujet, setSujet,
    message, setMessage,
    error,
    handleSubmit,
  };
}

export default useContactForm;
