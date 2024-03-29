import { Pagination, A11y } from "swiper";
import { Swiper } from "swiper/react";
import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";

const Wrapper = styled.main`
    & .swiper-pagination-bullet-active {
        background-color: #b19777;
    }
`;

type Props = { slidesPerView: number; children: ReactNode; mobileSlides?: number };

const SwiperSection = ({ slidesPerView: slides, children, mobileSlides }: Props) => (
    <Wrapper>
        <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={mobileSlides || 1}
            slidesPerGroup={mobileSlides || 1}
            pagination={{ clickable: true }}
            breakpoints={{
                576: {
                    slidesPerView: slides,
                    slidesPerGroup: slides,
                },
            }}
        >
            {children}
        </Swiper>
    </Wrapper>
);

SwiperSection.defaultProps = { mobileSlides: null };

export default SwiperSection;
