import { useRef, useEffect } from "react";
import profileImg from "../../assets/images/profile/profile-1.JPG";
import circleGold from "../../assets/svg/circle-gold.svg";
import "../../styles/stylescomponents/CardAbout.css";
import "../../styles/animation/CardAbout.animation.css";

function CardAbout({ title, children, photoSize = 433, photo = profileImg, objectPosition = "center 80%", grow = false, animated = false }) {
  const sectionRef = useRef(null);
  const wrapperSize = photoSize + 15;

  useEffect(() => {
    if (!animated) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".animate-from-left, .animate-from-right")
            .forEach((el) => el.classList.add("is-visible"));
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animated]);

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
        />
        <img src={circleGold} alt="" className="presentation-photo-circle" />
      </div>
      <div className={animated ? "animate-from-right" : ""}>
        {title && <h2 className="presentation-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

export default CardAbout;
