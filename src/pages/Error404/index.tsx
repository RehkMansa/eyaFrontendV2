import { Link } from "react-router-dom";
import Img from "../../assets/img/404-image.png";

const Error404 = () => (
    <section className="section-padding2">
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <img src={Img} className="mb-30" alt="" />
                    <h2 className="section-title2 mb-10">
                        Sorry We Can't Find That Page!
                    </h2>
                    <p>
                        The page you are looking for was moved, removed, renamed or never
                        existed.
                    </p>
                    <div className="butn-dark mt-30 text-center">
                        <Link to="/">
                            <span>Back to home</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Error404;
