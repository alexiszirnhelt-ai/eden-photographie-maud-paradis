import { memo } from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import ModalServices from "./ModalServices";
import "../../styles/stylescomponents/CardServices.css";
import "../../styles/responsive/CardServices.responsive.css";
import "../../styles/responsive-tablet/Services.responsive-tablet.css";
import "../../styles/animation/CardServices.animation.css";

function CardServices({ photo, title, text, modalId, modalPhoto, carouselImages, section1Title, section1Text, section2Title, section2Text, imageHeight, modalWidth, animationClass }) {
  const cardRef = useScrollAnimation({ enabled: !!animationClass });

  return (
    <>
      <div ref={cardRef} className={`card-services d-flex flex-column${animationClass ? ` ${animationClass}` : ""}`}>
        <img src={photo} alt={title} className="card-services-img" loading="lazy" />
        <div className="d-flex flex-column flex-grow-1 p-3 gap-3">
          <h3 className="card-services-title mb-0">{title}</h3>
          <p className="card-services-text flex-grow-1 mb-0">{text}</p>
          <div className="text-center">
            <button
              className="card-services-btn"
              data-bs-toggle="modal"
              data-bs-target={`#${modalId}`}
            >
              Cliquez ici
            </button>
          </div>
        </div>
      </div>
      <ModalServices
        modalId={modalId}
        title={title}
        photo={modalPhoto}
        carouselImages={carouselImages}
        section1Title={section1Title}
        section1Text={section1Text}
        section2Title={section2Title}
        section2Text={section2Text}
        imageHeight={imageHeight}
        modalWidth={modalWidth}
      />
    </>
  );
}

export default memo(CardServices);
