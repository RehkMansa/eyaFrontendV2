import RewardsImg from "../../../assets/img/eyahomes/8.jpg";
import HouseDeals from "../../../assets/img/eyahomes/6.jpg";

type Props = { name: string; img: string; meta: string };

const SingleProgram = ({ name, img, meta }: Props) => (
    <div className="col-md-6">
        <div className="item">
            <div className="position-re o-hidden">
                <img src={img} alt="" />
            </div>
            <div className="con">
                <span className="category">{meta}</span>
                <h5>
                    <a href="post.html">{name}</a>
                </h5>
            </div>
        </div>
    </div>
);

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
            <div className="row">
                <SingleProgram
                    meta="Win monthly prices of upto 500k for every property deal"
                    img={RewardsImg}
                    name="Monthly rewards for agents"
                />
                <SingleProgram
                    meta="Win monthly prices of upto 500k for every property deal"
                    img={HouseDeals}
                    name="Monthly rewards for agents"
                />
            </div>
        </div>
    </section>
);

export default Programs;
