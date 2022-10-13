/* eslint-disable react/no-array-index-key */
import { ReactNode } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

type Props = { imageArr: { img: string; children?: ReactNode; idx: number }[] };

const CarouselSection = ({ imageArr }: Props) => (
    <Carousel showThumbs={false} autoPlay={false}>
        {imageArr.map(arr => (
            <div key={arr.idx}>
                <img src={arr.img} alt="" />
                {arr.children}
            </div>
        ))}
    </Carousel>
);

export default CarouselSection;
