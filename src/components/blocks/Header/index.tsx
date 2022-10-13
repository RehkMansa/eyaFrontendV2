import { NavLink } from "react-router-dom";

const MenuLink = ({ name, to }: { name: string; to: string }) => (
    <li className="nav-item">
        <NavLink className="nav-link" to={to}>
            {name}
        </NavLink>
    </li>
);

const menuItems = [
    {
        idx: 0,
        name: "Home",
        to: "/",
    },
    {
        idx: 1,
        name: "About Us",
        to: "/about-us",
    },
    {
        idx: 2,
        name: "Properties",
        to: "/properties",
    },
    {
        idx: 3,
        name: "Contact Us",
        to: "/contact-us",
    },
];

const Header = () => (
    <section>
        <nav className="navbar navbar-expand-lg">
            <div className="logo-wrapper valign">
                <div className="logo">
                    <a href="index.html">
                        {/* <img src="img/logo.png" className="logo-img" alt="" /> */}
                        <h2>
                            MyEya<span>Estate</span>
                        </h2>
                    </a>
                </div>
            </div>
            <button className="navbar-toggler" type="button">
                <span className="icon-bar">
                    <i className="ti-line-double" />
                </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {menuItems.map(item => (
                        <MenuLink key={item.idx} {...item} />
                    ))}
                </ul>
            </div>
        </nav>
    </section>
);

export default Header;
