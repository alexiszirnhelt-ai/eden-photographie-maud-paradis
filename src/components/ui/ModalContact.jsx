import { useNavigate } from "react-router-dom";
import "../../styles/components/ModalContact.css";

function ModalContact() {
  const navigate = useNavigate();

  return (
    <div className="modal fade" id="modalContact" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modal-contact-content text-center p-4">
          <div className="modal-body d-flex flex-column align-items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="modal-contact-icon" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
            </svg>
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
