import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
`;

const Line = styled.div`
    border-block: 1px solid;
    height: 6px;
    width: 20px;

    &:last-child {
        margin-top: 4px;
        border-bottom: 0;
        height: 2px;
    }
`;

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

const Header = () => {
    const [show, setShow] = useState(false);

    return (
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
                <Button
                    onClick={() => setShow(!show)}
                    className="navbar-toggler"
                    type="button"
                >
                    <span className="icon-bar">
                        <Line />
                        <Line />
                    </span>
                </Button>
                <div
                    className={`collapse navbar-collapse ${show && "show"}`}
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ml-auto">
                        {menuItems.map(item => (
                            <MenuLink key={item.idx} {...item} />
                        ))}
                    </ul>
                </div>
            </nav>
        </section>
    );
};

export default Header;
