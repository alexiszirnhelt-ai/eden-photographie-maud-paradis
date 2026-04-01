import lineImg from "../../assets/svg/Line.svg";
import "../../styles/components/Title.css";

function Title({ title }) {
  return (
    <div className="text-center title-animate" style={{ padding: "2rem" }}>
      <h2 className="title-text">{title}</h2>
      <img src={lineImg} alt="" className="d-block mx-auto w-100 title-line" loading="lazy" decoding="async" />
    </div>
  );
}

export default Title;
