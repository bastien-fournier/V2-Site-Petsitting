import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Peach from "../assets/images/Peach.png";
import Snow from "../assets/images/Snow.png";
import Dax from "../assets/images/Dax.png";

export default function PetPictures() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className="max-w-xs mx-auto mt-20">
      <h2 className="text-2xl font-bold text-center mb-10">
        Ils m'ont fait confiance
      </h2>
      <Slider
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        autoplay={settings.autoplay}
        autoplaySpeed={settings.autoplaySpeed}
        fade={settings.fade}
      >
        <div className="text-center">
          <img src={Peach} alt="Peach" className="w-full h-auto rounded-lg" />
          <p className=" mt-2">Peach</p>
        </div>
        <div className="text-center">
          <img src={Snow} alt="Snow" className="w-full h-auto rounded-lg" />
          <p className=" mt-2">Snow</p>
        </div>
        <div className="text-center">
          <img src={Dax} alt="Dax" className="w-full h-auto rounded-lg" />
          <p className=" mt-2">Dax</p>
        </div>
      </Slider>
    </div>
  );
}
