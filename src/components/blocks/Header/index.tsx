const Header = () => (
    <header>
        <nav className="navbar navbar-expand-lg">
            <div className="logo-wrapper valign">
                <div className="logo">
                    <a href="index.html">
                        <img src="img/logo.png" className="logo-img" alt="" />
                        <h2>
                            BAUEN<span>INNOVATE DESIGN</span>
                        </h2>
                    </a>
                </div>
            </div>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                {" "}
                <span className="icon-bar">
                    <i className="ti-line-double" />
                </span>{" "}
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="index.html">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about.html">
                            About
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        {" "}
                        <span className="nav-link">
                            {" "}
                            Services <i className="ti-angle-down" />
                        </span>
                        <ul className="dropdown-menu last">
                            <li className="dropdown-item">
                                <a href="services.html">Services 01</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="services2.html">Services 02</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="services3.html">Services 03</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="services4.html">Services 04</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        {" "}
                        <span className="nav-link">
                            {" "}
                            Projects <i className="ti-angle-down" />
                        </span>
                        <ul className="dropdown-menu last">
                            <li className="dropdown-item">
                                <a href="projects.html">Projects 01</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="projects2.html">Projects 02</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="projects3.html">Projects 03</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="projects4.html">Projects 04</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="project-gallery.html">Project Gallery</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="project-page.html">Project Page</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        {" "}
                        <span className="nav-link">
                            {" "}
                            Pages <i className="ti-angle-down" />
                        </span>
                        <ul className="dropdown-menu last">
                            <li className="dropdown-item">
                                <a href="video.html">Video Background</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="before-after.html">Before After</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="pricing.html">Pricing</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="team.html">Team</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="careers.html">Careers</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="testimonials.html">Testimonials</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="faqs.html">Faqs</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="gallery.html">Gallery</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="video-gallery.html">Video Gallery</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="process.html">Process</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="coming-soon.html">Coming Soon</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="not-found-404.html">404 Page</a>
                            </li>

                            <li className="dropdown-item">
                                <span>
                                    Dropdown 2 <i className="ti-angle-right" />
                                </span>
                                <ul className="sub-menu">
                                    <li className="dropdown-item">
                                        <a href="#">Dropdown 3</a>
                                    </li>
                                    <li className="dropdown-item">
                                        <a href="#">Dropdown 3</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        {" "}
                        <span className="nav-link">
                            {" "}
                            Blog <i className="ti-angle-down" />
                        </span>
                        <ul className="dropdown-menu last">
                            <li className="dropdown-item">
                                <a href="blog.html">Blog 01</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="blog2.html">Blog 02</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="blog3.html">Blog 03</a>
                            </li>
                            <li className="dropdown-item">
                                <a href="blog4.html">Blog 04</a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Header;
