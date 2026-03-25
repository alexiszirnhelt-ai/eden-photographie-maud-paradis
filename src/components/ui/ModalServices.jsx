import { useEffect, useState } from "react";
import borderTarif from "../../assets/svg/Border-tarif.svg";
import "../../styles/stylescomponents/ModalServices.css";

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
        <div
          className="modal-content"
          style={{
            backgroundColor: "#0b3d2e",
            color: "#e5d5c5",
            border: "0.25rem solid #c4a77d",
            borderRadius: "6.25rem",
            overflow: "hidden",
          }}
        >
          <div className="modal-body p-0">
            <div style={{ position: "relative" }}>
              {carouselImages ? (
                <div style={{ position: "relative", height: imageHeight, overflow: "hidden" }}>
                  {prevIndex !== null && (
                    <img
                      key={`out-${prevIndex}`}
                      src={carouselImages[prevIndex]}
                      alt={`slide-out-${prevIndex}`}
                      className="carousel-slide-out"
                      style={{ height: imageHeight, objectFit: "cover", objectPosition: "center", borderBottom: "0.25rem solid #c4a77d" }}
                    />
                  )}
                  <img
                    key={`in-${currentIndex}`}
                    src={carouselImages[currentIndex]}
                    alt={`slide-${currentIndex}`}
                    className={prevIndex !== null ? "carousel-slide-in" : ""}
                    style={{ width: "100%", height: imageHeight, objectFit: "cover", objectPosition: "center", borderBottom: "0.25rem solid #c4a77d" }}
                  />
                </div>
              ) : (
                <img
                  src={photo}
                  alt={title}
                  style={{ width: "100%", height: imageHeight, objectFit: "cover", borderBottom: "0.25rem solid #c4a77d" }}
                />
              )}
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Fermer"
                style={{
                  position: "absolute",
                  top: "0.75rem",
                  right: "0.75rem",
                  zIndex: 10,
                }}
              ></button>
            </div>
            <div className="d-flex gap-3" style={{ padding: "2rem 3rem" }}>
              <div className="flex-1 w-50">
                <h6 className="text-center" style={{ color: "#c4a77d", fontSize: "1.5rem" }}>
                  {section1Title}
                </h6>
                <p className="mb-0" style={{ fontFamily: "'Chau Philomene One', sans-serif" }}>
                  {section1Text}
                </p>
              </div>
              <div className="flex-1 w-50 align-self-center" style={{ backgroundImage: `url(${borderTarif})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "100% 100%", padding: "2rem 1.5rem" }}>
                <h6 className="text-center" style={{ color: "#c4a77d", fontSize: "1.5rem" }}>
                  {section2Title}
                </h6>
                <p className="mb-0 text-center" style={{ fontFamily: "'Chau Philomene One', sans-serif" }}>{section2Text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalServices;
