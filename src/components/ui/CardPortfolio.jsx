import { useRef, useEffect, useState } from "react";
import ModalPortfolio from "./ModalPortfolio";
import "../../styles/stylescomponents/CardPortfolio.css";
import "../../styles/responsive/CardPortfolio.responsive.css";
import "../../styles/responsive-tablet/Portfolio.responsive-tablet.css";
import "../../styles/animation/CardPortfolio.animation.css";

function CardPortfolio({ photo, title, text, modalId, photosLoader, animationClass }) {
  const cardRef = useRef(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (!animationClass) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [animationClass]);

  async function handleOpenModal() {
    if (photos.length === 0 && photosLoader) {
      const loaded = await photosLoader();
      setPhotos(loaded);
    }
  }

  return (
    <>
      <div ref={cardRef} className={`card-portfolio d-flex flex-column${animationClass ? ` ${animationClass}` : ""}`}>
        <img src={photo} alt={title} className="card-portfolio-img" loading="lazy" />
        <div className="d-flex flex-column flex-grow-1 p-3 gap-3">
          <h3 className="card-portfolio-title mb-0">{title}</h3>
          <p className="card-portfolio-text flex-grow-1 mb-0">{text}</p>
          <div className="text-center">
            <button
              className="card-portfolio-btn"
              data-bs-toggle="modal"
              data-bs-target={`#${modalId}`}
              onClick={handleOpenModal}
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
