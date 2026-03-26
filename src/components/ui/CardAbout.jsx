import profileImg from "../../assets/images/profile/profile-1.JPG";
import circleGold from "../../assets/svg/circle-gold.svg";
import "../../styles/stylescomponents/CardAbout.css";

function CardAbout({ title, children, photoSize = 433, photo = profileImg, objectPosition = "center 80%", grow = false }) {
  const wrapperSize = photoSize + 15;
  return (
    <section className={`presentation d-flex align-items-center gap-5${grow ? " presentation-grow" : ""}`}>
      <div
        className="presentation-photo-wrapper"
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
      <div>
        {title && <h2 className="presentation-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

export default CardAbout;
