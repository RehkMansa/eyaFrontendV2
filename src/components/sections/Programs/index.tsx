import { SwiperSlide } from "swiper/react";
import SwiperSection from "../../blocks/SwiperSection";
import RewardsImg from "../../../assets/img/eyahomes/8.jpg";
import HouseDeals from "../../../assets/img/eyahomes/6.jpg";
import Partnership from "../../../assets/img/eyahomes/7.jpg";
import styled from "styled-components";

type Props = { name: string; img: string; meta: string };

const Wrapper = styled.div`
    max-height: 360px;
`;

const SingleProgram = ({ name, img, meta }: Props) => (
    <div className="">
        <div className="item">
            <Wrapper className="position-re o-hidden">
                <img src={img} alt="" />
            </Wrapper>
            <div className="con">
                <span className="category">{meta}</span>
                <h5>
                    <a href="post.html">{name}</a>
                </h5>
            </div>
        </div>
    </div>
);

const swiperOptions = [
    {
        idx: 0,
        meta: "500k cash grab for our top agent",
        img: RewardsImg,
        name: "Monthly rewards for agents",
    },
    {
        idx: 1,
        meta: "Affordable deals on all properties",
        img: HouseDeals,
        name: "Monthly rewards for agents",
    },
    {
        idx: 2,
        meta: "Become a partner",
        img: Partnership,
        name: "Partnership deal",
    },
];

const Programs = () => (
    <section className="eyahomes-blog section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="section-title">
                        Ongoing <span>Programs</span>
                    </h2>
                </div>
            </div>
            <div className="">
                <SwiperSection mobileSlides={2} slidesPerView={2}>
                    {swiperOptions.map(item => (
                        <SwiperSlide key={item.idx}>
                            <SingleProgram
                                meta={item.meta}
                                img={item.img}
                                name={item.name}
                            />
                        </SwiperSlide>
                    ))}
                </SwiperSection>
            </div>
        </div>
    </section>
);

export default Programs;
