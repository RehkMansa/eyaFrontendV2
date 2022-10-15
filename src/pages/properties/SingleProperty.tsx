import { useParams } from "react-router-dom";
import { propertiesArray } from ".";

const SingleProperty = () => {
    const { id } = useParams();

    const currentProperty = propertiesArray.find(
        property => property.idx.toString() === id
    );

    return (
        <section className="project-page section-padding2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="owl-carousel owl-theme owl-loaded owl-drag">
                            <div className="owl-stage-outer">
                                <div className="owl-stage">
                                    <div className="owl-item cloned">
                                        <div className="portfolio-item">
                                            <img
                                                className="img-fluid"
                                                src={currentProperty?.img}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-md-4">
                                <div className="project-bar">
                                    <div className="row justify-content-between align-items-center text-left text-lg-start">
                                        <div className="col-md-3 mb-15">
                                            <h5>Project Year</h5>
                                            <h6>2020 - 2022</h6>
                                        </div>
                                        <div className="col-md-3 mb-15">
                                            <h5>Company</h5>
                                            <h6>WPS International</h6>
                                        </div>
                                        <div className="col-md-3 mb-15">
                                            <h5>Project Name</h5>
                                            <h6>Cotton House</h6>
                                        </div>
                                        <div className="col-md-3 mb-15">
                                            <h5>Location</h5>
                                            <h6>Toronto, Canada</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="section-title2">Cotton House</h2>
                        <p className="mb-30">
                            Architecture non lorem ac erat suscipit bibendum. Nulla
                            facilisi. Sedeuter nunc volutpat, mollis sapien vel, conseyer
                            turpeutionyer masin libero sempenion. Fusceletion mollis augue
                            sit amet hendrerit vestibulum. Duisteyerionyer venenatis
                            lacus. Villa gravida eros ut turpis interdum ornare.
                        </p>
                        <p>
                            Architecture non lorem ac erat suscipit bibendum. Nulla
                            facilisi. Sedeuter nunc volutpat, mollis sapien vel, conseyer
                            turpeutionyer masin libero sempe. Fusceler mollis augue sit
                            amet hendrerit vestibulum. Duisteyerionyer venenatis lacus.
                            Villa gravida eros ut turpis interdum ornare. Interdum et
                            malesu they adamale fames ac anteipsu pimsine faucibus.
                            Curabitur arcu site feugiat in tortor in, volutpat
                            sollicitudin libero.
                        </p>
                        <p className="mb-30">
                            Design non lorem ac erat suscipit bibendum. Nulla facilisi.
                            Sedeuter nunc volutpat, mollis sapien vel, conseyer
                            turpeutionyer masin libero sempe. Fusceler mollis augue sit
                            amet hendrerit vestibulum. Duisteyerionyer venenatis lacus.
                        </p>
                        <ul className="list-unstyled page-list mb-30">
                            <li>
                                <div className="page-list-icon">
                                    <span className="ti-check" />
                                </div>
                                <div className="page-list-text">
                                    <p>Over 15 years of experience</p>
                                </div>
                            </li>
                            <li>
                                <div className="page-list-icon">
                                    <span className="ti-check" />
                                </div>
                                <div className="page-list-text">
                                    <p>200+ successfully executed projects</p>
                                </div>
                            </li>
                            <li>
                                <div className="page-list-icon">
                                    <span className="ti-check" />
                                </div>
                                <div className="page-list-text">
                                    <p>Exceptional work quality</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleProperty;
