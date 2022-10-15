import { Outlet } from "react-router-dom";
import Footer from "../../blocks/Footer";
import Header from "../../blocks/Header";
import BannerHeader from "../HeroSection/Banner";
import HomepageHeader from "../HeroSection/Homepage";

const MainLayout = ({ isHomePage }: { isHomePage: boolean }) => (
    <main>
        <Header />
        {isHomePage && <HomepageHeader />}
        <div className="content-wrapper">
            <section className="content-lines-wrapper">
                <div className="content-lines-inner">
                    <div className="content-lines" />
                </div>
            </section>
            {!isHomePage && <BannerHeader />}
            <Outlet />
            <Footer />
        </div>
    </main>
);
export default MainLayout;
