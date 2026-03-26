import { useEffect, useState } from "react";
import borderTarif from "../../assets/svg/Border-tarif.svg";
import "../../styles/stylescomponents/ModalServices.css";
import "../../styles/responsive/ModalServices.responsive.css";

function ModalServices({
  modalId,
  title,
  photo,
  carouselImages,
  section1Title,
  section1Text,
  section2Title,
  section2Text,
  imageHeight = "22rem",
  modalWidth,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);

  useEffect(() => {
    if (!carouselImages) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        setPrevIndex(prev);
        return (prev + 1) % carouselImages.length;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselImages]);

  return (
    <div className="modal fade" id={modalId} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" style={modalWidth ? { maxWidth: modalWidth } : {}}>
        <div className="modal-content modal-services-content">
          <div className="modal-body p-0">
            <div style={{ position: "relative" }}>
              {carouselImages ? (
                <div style={{ position: "relative", height: imageHeight, overflow: "hidden" }}>
                  {prevIndex !== null && (
                    <img
                      key={`out-${prevIndex}`}
                      src={carouselImages[prevIndex]}
                      alt={`slide-out-${prevIndex}`}
                      className="carousel-slide-out modal-services-img"
                      style={{ height: imageHeight }}
                    />
                  )}
                  <img
                    key={`in-${currentIndex}`}
                    src={carouselImages[currentIndex]}
                    alt={`slide-${currentIndex}`}
                    className={`modal-services-img${prevIndex !== null ? " carousel-slide-in" : ""}`}
                    style={{ height: imageHeight }}
                  />
                </div>
              ) : (
                <img
                  src={photo}
                  alt={title}
                  className="modal-services-img"
                  style={{ height: imageHeight }}
                />
              )}
              <button
                type="button"
                className="btn-close btn-close-white modal-services-close-btn"
                data-bs-dismiss="modal"
                aria-label="Fermer"
              ></button>
            </div>
            <div className="d-flex gap-3 modal-services-body-inner">
              <div className="flex-1 w-50">
                <h6 className="text-center modal-services-section-title">{section1Title}</h6>
                <p className="mb-0 modal-services-section-text">{section1Text}</p>
              </div>
              <div
                className="flex-1 w-50 align-self-center modal-services-tarif"
                style={{ backgroundImage: `url(${borderTarif})` }}
              >
                <h6 className="text-center modal-services-section-title">{section2Title}</h6>
                <p className="mb-0 text-center modal-services-section-text">{section2Text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalServices;
