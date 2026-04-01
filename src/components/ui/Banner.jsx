import bannerImg from "../../assets/images/banner/Laos-viewpoint-photo.webp";
import "../../styles/components/Banner.css";

function Banner() {
  return (
    <div className="banner-component">
      <img
        src={bannerImg}
        alt=""
        className="banner-img"
        fetchpriority="high"
        width="1920"
        height="160"
      />
    </div>
  );
}

export default Banner;
