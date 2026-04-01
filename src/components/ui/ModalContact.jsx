import { useNavigate } from "react-router-dom";
import "../../styles/components/ModalContact.css";

function ModalContact() {
  const navigate = useNavigate();

  return (
    <div className="modal fade" id="modalContact" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modal-contact-content text-center p-4">
          <div className="modal-body d-flex flex-column align-items-center gap-3">
            <i className="bi bi-check-circle modal-contact-icon"></i>
            <h4 className="modal-contact-title">Message envoyé !</h4>
            <p className="modal-contact-text">
              Votre message a bien été envoyé. Maud vous répondra dans les plus brefs délais.
            </p>
            <button
              className="modal-contact-btn"
              data-bs-dismiss="modal"
              onClick={() => navigate("/")}
            >
              Retour à l{"'"}accueil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalContact;
