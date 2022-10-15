import { SwiperSlide } from "swiper/react";
import SwiperSection from "../../../blocks/SwiperSection";
import Quote from "../../../../assets/img/quot.png";
import BgImage from "../../../../assets/img/banner2.jpg";

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
            style={{ backgroundImage: `url(${BgImage})` }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="vid-area" />
                    </div>
                    <div className="col-md-5 offset-md-1">
                        <div
                            className="testimonials-box animate-box"
                            data-animate-effect="fadeInUp"
                        >
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
    </section>
);

export default Testimonials;
