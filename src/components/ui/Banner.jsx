import bannerImg from "../../assets/images/banner/Laos-viewpoint-photo.jpg";

function Banner() {
  return (
    <div
      className="w-100"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "10rem",
      }}
    ></div>
  );
}

export default Banner;
