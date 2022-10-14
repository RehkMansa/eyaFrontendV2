import { SwiperSlide } from "swiper/react";
import Property1 from "../../../assets/img/projects/1.jpg";
import Property2 from "../../../assets/img/projects/2.jpg";
import Property3 from "../../../assets/img/projects/3.jpg";
import Property4 from "../../../assets/img/projects/4.jpg";
import SwiperSection from "../../blocks/SwiperSection";

type Props = { title: string; desc: string; img: string };

const ProjectSlide = ({ title, desc, img }: Props) => (
    <div className="item">
        <div className="position-re o-hidden">
            <img src={img} alt="" />
        </div>
        <div className="con">
            <h6>
                <a href="cotton-house.html">{title}</a>
            </h6>
            <h5>
                <a href="cotton-house.html">{desc}</a>
            </h5>
            <div className="line" />
            <a href="cotton-house.html">
                <i className="ti-arrow-right" />
            </a>
        </div>
    </div>
);

const options = [
    {
        idx: 0,
        title: "Mansion 1",
        desc: "Just a house",
        img: Property1,
    },
    {
        idx: 1,
        title: "Mansion 2",
        desc: "Just a house",
        img: Property2,
    },
    {
        idx: 2,
        title: "Mansion 3",
        desc: "Just a house",
        img: Property3,
    },
    {
        idx: 3,
        title: "Mansion 4",
        desc: "Just a house",
        img: Property4,
    },
];

const ProjectSection = () => (
    <section className="projects section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="section-title">
                        Our <span>Projects</span>
                    </h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="owl-carousel owl-theme">
                        <SwiperSection slidesPerView={2}>
                            {options.map(item => (
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
