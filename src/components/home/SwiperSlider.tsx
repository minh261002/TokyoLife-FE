import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSliders } from "@/services/SliderServices";
import type { Slider } from "@/types/Slider";

const SwiperSlider = () => {
  const [sliders, setSliders] = useState<Slider | null>(null);

  const fetchSliders = async () => {
    const data = await getSliders("home_slider");
    if (data) {
      setSliders(data);
    }
  };

  useEffect(() => {
    fetchSliders();
    const swiperHome = new Swiper(".swiper-home", {
      modules: [Navigation, Autoplay],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 5000,
      },
      loop: true,
      slidesPerView: 1,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
      },
    });
    return () => {
      swiperHome.destroy();
    };
  }, []);

  console.log(sliders?.items);
  return (
    <div className="w-full max-w-[1280px] relative">
      <div className="swiper-home">
        <div className="swiper-wrapper text-center">
          {sliders?.items && sliders.items.length > 0 ? (
            sliders.items.map((item) => (
              <div key={item.id} className="swiper-slide">
                <Link
                  to={item.link || "/"}
                  className="flex items-center justify-center gap-2"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[600px] object-cover rounded-xl"
                  />
                </Link>
              </div>
            ))
          ) : (
            <p>No sliders available</p>
          )}
        </div>
        <div className="swiper-button-prev absolute left-0 transform -translate-y-1/2 bg-white"></div>
        <div className="swiper-button-next absolute left-0 transform -translate-y-1/2 bg-white"></div>
      </div>
    </div>
  );
};

export default SwiperSlider;
