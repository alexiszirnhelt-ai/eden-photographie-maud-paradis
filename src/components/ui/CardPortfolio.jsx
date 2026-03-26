import ModalPortfolio from "./ModalPortfolio";
import "../../styles/stylescomponents/CardPortfolio.css";
import "../../styles/responsive/CardPortfolio.responsive.css";

function CardPortfolio({ photo, title, text, modalId, photos }) {
  return (
    <>
      <div className="card-portfolio d-flex flex-column">
        <img src={photo} alt={title} className="card-portfolio-img" />
        <div className="d-flex flex-column flex-grow-1 p-3 gap-3">
          <h3 className="card-portfolio-title mb-0">{title}</h3>
          <p className="card-portfolio-text flex-grow-1 mb-0">{text}</p>
          <div className="text-center">
            <button
              className="card-portfolio-btn"
              data-bs-toggle="modal"
              data-bs-target={`#${modalId}`}
            >
              Cliquez ici
            </button>
          </div>
        </div>
      </div>
      <ModalPortfolio modalId={modalId} photos={photos} />
    </>
  );
}

export default CardPortfolio;
