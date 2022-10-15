import AboutImage from "../../../assets/img/about.jpg";

const AboutSection = () => (
    <section className="about section-padding">
        <div className="container">
            <div className="row">
                <div
                    className="col-md-6 mb-30 animate-box"
                    data-animate-effect="fadeInUp"
                >
                    <h2 className="section-title unset-text-align">
                        About <span>MyEyaEstate</span>
                    </h2>
                    <p>
                        My Eya Homes majors in Real Estate Development around the Federal
                        Capital Territory. Our company is so promising that in one year we
                        brought Five Estates to life
                    </p>
                    <p>
                        Sticking our minds to futurism we have strategically acquired most
                        of our estate lands to conform with the expansion and expectation
                        of all Modern Cities by siting our estates in the most developing
                        areas of the mega city of Abuja.
                    </p>
                    <p>
                        Our growth rate is over 220% according to the analysis of
                        Professional Auditors who vetted the performance of the company in
                        June 2022; Implying that our upward progression is second to none.
                    </p>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInUp">
                    <div className="about-img">
                        <div className="img">
                            <img src={AboutImage} className="img-fluid" alt="" />
                        </div>
                        <div className="about-img-2 about-buro">Eya Homes</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutSection;
