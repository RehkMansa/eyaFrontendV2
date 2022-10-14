import Icon1 from "../../../assets/img/icons/icon-1.png";
import Icon2 from "../../../assets/img/icons/icon-2.png";
import Icon3 from "../../../assets/img/icons/icon-3.png";

type Props = { title: string; desc: string; img: string; idx: number };

const Card = ({ title, desc, img, idx }: Props) => (
    <div className="col-md-4">
        <div className="item">
            <a href="architecture.html">
                <img src={img} alt="" />
                <h5>{title}</h5>
                <div className="line" />
                <p>{desc}</p>
                <div className="numb">0{idx}</div>
            </a>
        </div>
    </div>
);

const options = [
    {
        idx: 1,
        title: "Just Some Words",
        desc: " Architecture bibendum eros eget lacus the vulputate sit amet vehicuta nibhen ulicera in the vitae miss.",
        img: Icon1,
    },
    {
        idx: 2,
        title: "Just Some Words",
        desc: " Architecture bibendum eros eget lacus the vulputate sit amet vehicuta nibhen ulicera in the vitae miss.",
        img: Icon2,
    },
    {
        idx: 3,
        title: "Just Some Words",
        desc: " Architecture bibendum eros eget lacus the vulputate sit amet vehicuta nibhen ulicera in the vitae miss.",
        img: Icon3,
    },
];

const OurServices = () => (
    <section className="services section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="section-title">
                        Our <span>Services</span>
                    </h2>
                </div>
            </div>
            <div className="row">
                {options.map(item => (
                    <Card key={item.idx} {...item} />
                ))}
            </div>
        </div>
    </section>
);

export default OurServices;
