import { memo } from "react";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import profileImg from "../../assets/images/profile/profile-1.JPG?format=webp";
import circleGold from "../../assets/svg/circle-gold.svg";
import "../../styles/stylescomponents/CardAbout.css";
import "../../styles/animation/CardAbout.animation.css";

function CardAbout({ title, children, photoSize = 433, photo = profileImg, objectPosition = "center 80%", grow = false, animated = false }) {
  const sectionRef = useScrollAnimation({
    enabled: animated,
    selector: ".animate-from-left, .animate-from-right",
  });
  const wrapperSize = photoSize + 15;

  return (
    <section ref={sectionRef} className={`presentation d-flex align-items-center gap-5${grow ? " presentation-grow" : ""}`}>
      <div
        className={`presentation-photo-wrapper${animated ? " animate-from-left" : ""}`}
        style={{ width: wrapperSize, height: wrapperSize }}
      >
        <img
          src={photo}
          alt="Maud Paradis"
          className="presentation-photo"
          style={{ width: wrapperSize - 6, height: wrapperSize - 6, objectPosition }}
          loading="lazy"
        />
        <img src={circleGold} alt="" className="presentation-photo-circle" loading="lazy" />
      </div>
      <div className={animated ? "animate-from-right" : ""}>
        {title && <h2 className="presentation-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

export default memo(CardAbout);
