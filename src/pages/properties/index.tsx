import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Property1 from "../../assets/img/projects/1.jpg";
import Property2 from "../../assets/img/projects/2.jpg";
import Property3 from "../../assets/img/projects/3.jpg";
import Property4 from "../../assets/img/projects/4.jpg";
import AppContext from "../../context/AppContext";

const Image = styled.img`
    height: 370px;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        height: 300px;
    }

    @media screen and (max-width: 576px) {
        height: 250px;
    }
`;

export const propertiesArray = [
    {
        idx: 1,
        title: "SEMI FINISHED BUNGALOW",
        price: "Price: ₦22 Million",
        img: Property1,
        meta: "Estate",
    },
    {
        idx: 2,
        title: "CARCASS FOR TERRACE DUPLEX",
        price: "Price: ₦16 Million",
        img: Property2,
        meta: "Estate",
    },
    {
        idx: 3,
        title: "LAND PRICE FOR SEMI-DETACHED DUPLEX",
        price: "Price: ₦3.5 Million",
        img: Property3,
        meta: "Land",
    },
    {
        idx: 4,
        title: "LAND PRICE FOR FULLY-DETACHED DUPLEX ",
        price: "Price: ₦5.5 Million",
        img: Property4,
        meta: "Land",
    },
];

type Props = {
    title: string;
    price: string;
    img: string;
    id: string;
    idx: number;
};

const isEven = (idx: number) => idx % 2 === 0;

const Card = ({ img, title, price, idx, id }: Props) => (
    <div className={`projects4 animate-box animated ${isEven(idx) ? "left" : ""}`}>
        <figure>
            <Image src={img} alt="" className="img-fluid" />
        </figure>
        <div className="caption">
            <h6>Eya Properties</h6>
            <h4>{title}</h4>
            <p>{price}</p>
            <div className="butn-dark mt-15">
                <Link to={`/properties/${id}`}>
                    <span>View</span>
                </Link>
            </div>
        </div>
    </div>
);

const Properties = () => {
    const { properties } = useContext(AppContext);
    return (
        <section className="eyahomes-project section-padding2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-30 text-center animate-box fadeInUp animated">
                        <h2 className="section-title">
                            Our <span>Projects</span>
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {properties.map((property: any, idx) => (
                            <Card
                                key={property?.id}
                                idx={idx + 1}
                                {...property}
                                img={property?.images[0]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Properties;
