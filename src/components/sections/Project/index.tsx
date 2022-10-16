import { Link } from "react-router-dom";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import Property1 from "../../../assets/img/projects/1.jpg";
import Property2 from "../../../assets/img/projects/2.jpg";
import Property3 from "../../../assets/img/projects/3.jpg";
import Property4 from "../../../assets/img/projects/4.jpg";
import SwiperSection from "../../blocks/SwiperSection";

type Props = { title: string; desc: string; img: string };

const Image = styled.img`
    height: 350px;
    object-fit: cover;

    @media screen and (max-width: 576px) {
        height: 300px;
    }
`;

const ProjectSlide = ({ title, desc, img }: Props) => (
    <div className="item">
        <div className="position-re o-hidden">
            <Image src={img} alt="" />
        </div>
        <div className="con">
            <h6>
                <Link to="/properties">{title}</Link>
            </h6>
            <h5>
                <Link to="/properties">{desc}</Link>
            </h5>
            <div className="line" />
            <Link to="/properties">
                <i className="ti-arrow-right" />
            </Link>
        </div>
    </div>
);

const propertiesOptions = [
    {
        idx: 0,
        title: "SEMI FINISHED BUNGALOW",
        desc: "Price: ₦22 Million",
        img: Property1,
    },
    {
        idx: 1,
        title: "CARCASS FOR TERRACE DUPLEX",
        desc: "Price: ₦16 Million",
        img: Property2,
    },
    {
        idx: 2,
        title: "LAND PRICE FOR SEMI-DETACHED DUPLEX",
        desc: "Price: ₦3.5 Million",
        img: Property3,
    },
    {
        idx: 3,
        title: "LAND PRICE FOR FULLY-DETACHED DUPLEX ",
        desc: "Price: ₦5.5 Million",
        img: Property4,
    },
];

const ProjectSection = () => (
    <section className="projects section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="section-title">
                        Our <span>Properties</span>
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="owl-carousel owl-theme">
                        <SwiperSection slidesPerView={2}>
                            {propertiesOptions.map(item => (
                                <SwiperSlide key={item.idx}>
                                    <ProjectSlide {...item} />
                                </SwiperSlide>
                            ))}
                        </SwiperSection>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default ProjectSection;
