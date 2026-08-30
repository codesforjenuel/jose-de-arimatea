import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function CarouselComponent({carouselCss}) {
  return (
    <div style={{ maxWidth: "900px", margin: "2rem auto" }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img
            src="https://res.cloudinary.com/dkaeetuud/image/upload/v1763434255/jose%20de%20arimatea/IMG_4128_y9knfg.webp"
            alt="Slide 1"
            className={carouselCss}
          />
        </SwiperSlide>

      </Swiper>
    </div>
  );
}