import BgImage from "../../../assets/img/banner.jpg";

const BannerHeader = () => (
    <section
        className="banner-header banner-img valign bg-img bg-fixed"
        data-overlay-darkgray="5"
        style={{ backgroundImage: `url(${BgImage})` }}
    >
        <div className="left-panel" />
    </section>
);

export default BannerHeader;
