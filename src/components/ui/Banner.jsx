import bannerImg from "../../assets/images/banner/Laos-viewpoint-photo.jpg";
import "../../styles/stylescomponents/Banner.css";

function Banner() {
  return (
    <div
      className="banner-component"
      style={{ backgroundImage: `url(${bannerImg})` }}
    ></div>
  );
}

export default Banner;
