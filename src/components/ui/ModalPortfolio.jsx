import "../../styles/stylescomponents/ModalPortfolio.css";
import "../../styles/responsive/ModalPortfolio.responsive.css";

function ModalPortfolio({ modalId, photos = [] }) {
  return (
    <div className="modal fade" id={modalId} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content modal-portfolio-content">
          <div className="modal-body p-3">
            <div className="text-end mb-2">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Fermer"
              ></button>
            </div>
            <div className="modal-portfolio-grid">
              {photos.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`portfolio-${index}`}
                  className="modal-portfolio-img"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalPortfolio;
