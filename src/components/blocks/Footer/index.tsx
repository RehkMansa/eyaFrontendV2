/* const SocialIcon = () => (
    <a href="index.html">
        <i className="ti-facebook" />
    </a>
); */

const Card = ({ title, content }: { title: string; content: string }) => (
    <div className="col-md-4 mb-30">
        <div className="item fotcont">
            <div className="fothead">
                <h6>{title}</h6>
            </div>
            <p>{content}</p>
        </div>
    </div>
);

const footerOptions = [
    {
        idx: 1,
        title: "Phone",
        content: "+234 812 376 6660",
    },
    {
        idx: 2,
        title: "Email",
        content: "myeyaestate@gmail.com",
    },
    {
        idx: 3,
        title: "Our Address",
        content:
            "Suite 3, 1st Floor, Shema Petroleum Plaza, before City Gate, Airport Road, Abuja, FCT.",
    },
];

const Footer = () => (
    <footer className="main-footer dark">
        <div className="container">
            <div className="row">
                {footerOptions.map(item => (
                    <Card {...item} key={item.idx} />
                ))}
            </div>
        </div>
        <div className="sub-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="text-left">
                            <p>© 2022 Bauen. All right reserved.</p>
                        </div>
                    </div>
                    <div className="col-md-4 abot">
                        <div className="social-icon" />
                    </div>
                    <div className="col-md-4">
                        <p className="right">
                            <a target="_blank" href="https://swizel.con" rel="noreferrer">
                                Designed by Swizel
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
);
export default Footer;
