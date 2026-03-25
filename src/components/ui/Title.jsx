import lineImg from "../../assets/svg/Line.svg";
import "../../styles/stylescomponents/Title.css";

function Title({ title }) {
  return (
    <div className="text-center" style={{ padding: "2rem" }}>
      <h2 className="title-text">{title}</h2>
      <img src={lineImg} alt="" className="d-block mx-auto w-100 title-line" />
    </div>
  );
}

export default Title;
