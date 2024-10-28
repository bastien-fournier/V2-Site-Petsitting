import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Peach from "../assets/images/Peach.png";
import Snow from "../assets/images/Snow.png";

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
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Galerie de Photos</h2>
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        autoplay={settings.autoplay}
        autoplaySpeed={settings.autoplaySpeed}
        fade={settings.fade}
      >
        <div className="relative">
          <img src={Peach} alt="Peach" className="w-full h-auto rounded-lg" />
          <p className="absolute bottom-0 left-0  text-third p-2 opacity-75">
            Peach
          </p>
        </div>
        <div className="relative">
          <img src={Snow} alt="Snow" className="w-full h-auto rounded-lg" />
          <p className="absolute bottom-0 left-0  text-third p-2 opacity-75">
            Snow
          </p>
        </div>
      </Slider>
    </div>
  );
}
