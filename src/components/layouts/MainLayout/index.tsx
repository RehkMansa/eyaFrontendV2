import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../blocks/Footer";
import Header from "../../blocks/Header";
import BannerHeader from "../HeroSection/Banner";
import HomepageHeader from "../HeroSection/Homepage";

const Main = styled.main`
    @media screen and (max-width: 576px) {
        .section-title {
            letter-spacing: 5px;
            text-align: center;
        }

        .unset-text-align {
            text-align: unset;
        }
    }
`;

const MainLayout = ({ isHomePage }: { isHomePage: boolean }) => (
    <Main>
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
    </Main>
);
export default MainLayout;
