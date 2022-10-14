import Property1 from "../../../assets/img/projects/1.jpg";
import Property2 from "../../../assets/img/projects/2.jpg";
import Property3 from "../../../assets/img/projects/3.jpg";
import Property4 from "../../../assets/img/projects/4.jpg";

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
        name: "Mansion",
        desc: "Just a house",
        img: Property1,
    },
    {
        idx: 1,
        name: "Mansion",
        desc: "Just a house",
        img: Property2,
    },
    {
        idx: 2,
        name: "Mansion",
        desc: "Just a house",
        img: Property3,
    },
    {
        idx: 3,
        name: "Mansion",
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
                    <div className="owl-carousel owl-theme"></div>
                </div>
            </div>
        </div>
    </section>
);

export default ProjectSection;
