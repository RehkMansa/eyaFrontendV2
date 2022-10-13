import { ReactNode } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = { imageArr: { img: string; children?: ReactNode; idx: number }[] };

const CarouselSection = ({ imageArr }: Props) => (
    <Carousel swipeable={true} showThumbs={false} autoPlay={true}>
        {imageArr.map(arr => (
            <div key={arr.idx}>
                <img src={arr.img} alt="" />
                {arr.children}
            </div>
        ))}
    </Carousel>
);

export default CarouselSection;
