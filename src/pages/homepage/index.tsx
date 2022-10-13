const Homepage = () => (
    <header className="header slider-fade">
        <div className="owl-carousel owl-theme">
            <div
                className="text-right item bg-img"
                data-overlay-dark="3"
                data-background="img/slider/1.jpg"
            >
                <div className="v-middle caption mt-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 offset-md-5">
                                <h1>Innovate Desing in Toronto</h1>
                                <p>
                                    Architecture viverra tellus nec massa dictum the
                                    euismoe.
                                    <br />
                                    Curabitur viverra the posuere aukue velit.
                                </p>
                                <div className="butn-light mt-30 mb-30">
                                    <a href="/">
                                        <span>Buy Now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="text-right item bg-img"
                data-overlay-dark="4"
                data-background="img/slider/2.jpg"
            >
                <div className="v-middle caption mt-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 offset-md-5">
                                <h1>Innovate Desing in Canada</h1>
                                <p>
                                    Architecture viverra tellus nec massa dictum the
                                    euismoe.
                                    <br />
                                    Curabitur viverra the posuere aukue velit.
                                </p>
                                <div className="butn-light mt-30 mb-30">
                                    <a href="/">
                                        <span>Buy Now</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="hero-corner" />
        <div className="hero-corner3" />

        <div className="left-panel">
            <ul className="social-left clearfix">
                <li>
                    <a href="index.html#">
                        <i className="ti-pinterest" />
                    </a>
                </li>
                <li>
                    <a href="index.html#">
                        <i className="ti-instagram" />
                    </a>
                </li>
                <li>
                    <a href="index.html#">
                        <i className="ti-twitter" />
                    </a>
                </li>
                <li>
                    <a href="index.html#">
                        <i className="ti-facebook" />
                    </a>
                </li>
            </ul>
        </div>
    </header>
);

export default Homepage;
