import styled from "styled-components";
import { TfiControlPlay } from "react-icons/tfi";
import { SwiperSlide } from "swiper/react";
import SwiperSection from "../../../blocks/SwiperSection";
import Quote from "../../../../assets/img/quot.png";
import BgImage from "../../../../assets/img/banner2.jpg";

const Section = styled.section`
    .play-button {
        position: relative;
        z-index: 100;
    }
    .play-icon svg {
        width: 50px;
        position: absolute;
        left: 0%;
        transform: translateX(50%);
    }
`;

type Props = { testimonial: string; name: string; desc: string };

const Card = ({ testimonial, name, desc }: Props) => (
    <div className="item text-center">
        <span className="quote">
            <img src={Quote} alt="" />
        </span>
        <p>{testimonial}</p>
        <div className="info">
            <div className="cont">
                <h6>{name}</h6>
                <span>{desc}</span>
            </div>
        </div>
    </div>
);

const options = [
    {
        idx: 1,
        testimonial:
            "I love the energy given by the team when showing properties. The prices for their houses are very affordable",
        name: "Tochukwu Rapheal",
        desc: "Estate Services",
    },
    {
        idx: 2,
        testimonial:
            "I patronized their services in getting a home for myself, it was really worth, the design and structure were nice",
        name: "Onu Chidera",
        desc: "Housing",
    },
    {
        idx: 3,
        testimonial:
            "I'm currently a long time partner and investor. I'm very happy with their investment returns on properties.",
        name: "Ile Idoko",
        desc: "Partnership",
    },
];

const Testimonials = () => (
    <Section className="testimonials">
        <div
            className="background bg-img bg-fixed section-padding pb-0"
            data-background="img/banner2.jpg"
            data-overlay-dark="8"
            style={{ backgroundImage: `url(${BgImage})` }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="vid-area">
                            <div className="vid-icon">
                                <a
                                    className="play-button vid"
                                    href="https://youtu.be/bOd0peiTiFY"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <svg className="circle-fill">
                                        <circle
                                            cx="43"
                                            cy="43"
                                            r="39"
                                            stroke="#fff"
                                            strokeWidth={0.5}
                                        />
                                    </svg>
                                    <svg className="circle-track">
                                        <circle
                                            cx="43"
                                            cy="43"
                                            r="39"
                                            stroke="none"
                                            strokeWidth={1}
                                            fill="none"
                                        />
                                    </svg>
                                    <span className="polygon">
                                        <div className="ti-control-play play-icon">
                                            <TfiControlPlay height={48} width={45} />
                                        </div>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-1">
                        <div className="testimonials-box animate-box">
                            <div className="head-box text-center">
                                <h4>What Client's Say?</h4>
                            </div>
                            <div className="owl-carousel owl-theme">
                                <SwiperSection slidesPerView={1}>
                                    {options.map(item => (
                                        <SwiperSlide key={item.idx}>
                                            <Card {...item} />
                                        </SwiperSlide>
                                    ))}
                                </SwiperSection>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
);

export default Testimonials;
