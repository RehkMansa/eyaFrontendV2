import { SwiperSlide } from "swiper/react";
import SwiperSection from "../../../blocks/SwiperSection";
import Quote from "../../../../assets/img/quot.png";

type Props = { testimonial: string; name: string; desc: string };

const Card = ({ testimonial, name, desc }: Props) => (
    <div className="item">
        <span className="quote">
            <img src={Quote} alt="" />
        </span>
        <p>{testimonial}</p>
        <div className="info">
            <div className="author-img">{/* <img src="img/team/1.jpg" alt="" /> */}</div>
            <div className="cont">
                <h6>{name}</h6>
                <span>{desc}</span>
            </div>
        </div>
    </div>
);

const options = [
    {
        idx: 0,
        testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, laboriosam?",
        name: "John Doe",
        desc: "A doe man",
    },
    {
        idx: 0,
        testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, laboriosam?",
        name: "John Doe",
        desc: "A doe man",
    },
    {
        idx: 0,
        testimonial:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, laboriosam?",
        name: "John Doe",
        desc: "A doe man",
    },
];

const Testimonials = () => (
    <section className="testimonials">
        <div
            className="background bg-img bg-fixed section-padding pb-0"
            data-background="img/banner2.jpg"
            data-overlay-dark="3"
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="vid-area">
                            <div className="vid-icon">
                                <a
                                    className="play-button vid"
                                    href="https://youtu.be/RziCmLzpFNY"
                                >
                                    <svg className="circle-fill">
                                        <circle
                                            cx="43"
                                            cy="43"
                                            r="39"
                                            stroke="#fff"
                                            strokeWidth=".5"
                                        />
                                    </svg>
                                    <svg className="circle-track">
                                        <circle
                                            cx="43"
                                            cy="43"
                                            r="39"
                                            stroke="none"
                                            strokeWidth="1"
                                            fill="none"
                                        />
                                    </svg>
                                    <span className="polygon">
                                        <i className="ti-control-play" />
                                    </span>
                                </a>
                            </div>
                            <div className="cont mt-15 mb-30">
                                <h5>View promo video</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-1">
                        <div
                            className="testimonials-box animate-box"
                            data-animate-effect="fadeInUp"
                        >
                            <div className="head-box">
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
    </section>
);

export default Testimonials;
