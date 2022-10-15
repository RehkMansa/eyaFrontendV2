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
                        Architecture viverra tristique justo duis vitae diam neque nivamus
                        aestan ateuene artines aringianu atelit finibus viverra nec lacus.
                        Nedana theme erodino setlie suscipe no curabit tristique.
                    </p>
                    <p>
                        Design inilla duiman at elit finibus viverra nec a lacus themo the
                        drudea seneoice misuscipit non sagie the fermen.
                    </p>
                    <p>
                        Planner inilla duiman at elit finibus viverra nec a lacus themo
                        the drudea seneoice misuscipit non sagie the fermen. Viverra
                        tristique jusio the ivite dianne onen nivami acsestion augue
                        artine.
                    </p>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInUp">
                    <div className="about-img">
                        <div className="img">
                            <img src={AboutImage} className="img-fluid" alt="" />
                        </div>
                        <div className="about-img-2 about-buro">Canada Office</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default AboutSection;
