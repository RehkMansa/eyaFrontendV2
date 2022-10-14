import styled from "styled-components";
import Slider1 from "../../assets/img/slider/1.jpg";
import Slider2 from "../../assets/img/slider/2.jpg";
import CarouselSection from "../../components/blocks/CarouselSection";
import AboutSection from "../../components/sections/AboutSection";
import CTASection from "../../components/sections/CTASection";
import OurServices from "../../components/sections/OurServices";
import ProjectSection from "../../components/sections/Project";

const Wrapper = styled.div`
    height: 100vh;
    overflow: hidden;

    @media screen and (min-width: 100px) {
        & .carousel .slider-wrapper {
            height: 100vh;

            & img {
                height: 100vh;
                object-fit: cover;
            }
        }
    }

    @media screen and (max-width: 500px) {
        height: 90vh;

        & .carousel .slider-wrapper {
            height: 90vh;

            & img {
                height: 90vh;
            }
        }
    }
`;

const CarouselItem = () => (
    <div className="text-right item bg-img" data-overlay-dark="4">
        <div className="v-middle caption mt-30">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 offset-md-5">
                        <h1>Innovate Desing in Canada</h1>
                        <p>
                            Architecture viverra tellus nec massa dictum the euismoe.
                            <br />
                            Curabitur viverra the posuere aukue velit.
                        </p>
                        <div className="butn-light mt-30 mb-30">
                            <a href="/properties">
                                <span>Our Properties</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const carouselItems = [
    {
        idx: 0,
        img: Slider1,
        children: <CarouselItem />,
    },
    {
        idx: 1,
        img: Slider2,
        children: <CarouselItem />,
    },
];

const socialIcons = [
    {
        idx: 0,
    },
    {
        idx: 1,
    },
    {
        idx: 2,
    },
];

const Homepage = () => (
    <>
        <header className="header slider-fade">
            <Wrapper className="">
                <CarouselSection imageArr={carouselItems} />
            </Wrapper>
            <div className="left-panel">
                <ul className="social-left clearfix">
                    {socialIcons.map(item => (
                        <li key={item.idx}>
                            <span />
                        </li>
                    ))}
                </ul>
            </div>
        </header>
        <AboutSection />
        <ProjectSection />
        <OurServices />
        <CTASection />
    </>
);

export default Homepage;
