import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import Partner1 from "../../../../assets/img/clients/1.png";
import Partner2 from "../../../../assets/img/clients/2.png";
import Partner3 from "../../../../assets/img/clients/3.png";
import Partner4 from "../../../../assets/img/clients/4.png";
import Partner5 from "../../../../assets/img/clients/5.png";
import Partner6 from "../../../../assets/img/clients/6.png";
import SwiperSection from "../../../blocks/SwiperSection";

const Wrapper = styled.div`
    .swiper-pagination {
        display: none;
    }
`;

const partners = [
    {
        idx: 1,
        img: Partner1,
    },
    {
        idx: 2,
        img: Partner2,
    },
    {
        idx: 3,
        img: Partner3,
    },
    {
        idx: 4,
        img: Partner4,
    },
    {
        idx: 5,
        img: Partner5,
    },
    {
        idx: 6,
        img: Partner6,
    },
];

const Clients = () => (
    <section className="clients">
        <div className="container">
            <div className="row">
                <div className="col-md-7 owl-carousel owl-theme">
                    <Wrapper>
                        <SwiperSection mobileSlides={3} slidesPerView={4}>
                            {partners.map(partner => (
                                <SwiperSlide key={partner.idx}>
                                    <div className="clients-logo">
                                        <span>
                                            <img src={partner.img} alt="" />
                                        </span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </SwiperSection>
                    </Wrapper>
                </div>
            </div>
        </div>
    </section>
);

export default Clients;
