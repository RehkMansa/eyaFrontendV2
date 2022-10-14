import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css/bundle";
import { ReactNode } from "react";

type Props = { slidesPerView: number; children: ReactNode };

const SwiperSection = ({ slidesPerView: slides, children }: Props) => (
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={slides}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
    >
        {children}
    </Swiper>
);

export default SwiperSection;
