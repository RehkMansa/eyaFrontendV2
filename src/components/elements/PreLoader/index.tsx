import { BarLoader, MoonLoader } from "react-spinners";
import styled from "styled-components";

const Wrapper = styled.div`
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;

    .overlay {
        position: absolute;
        background-color: rgba(39, 39, 39, 01);
        inset: 0;
    }

    .preloader {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (min-width: 576px) {
        .preloader {
            width: 50%;
        }
    }

    .opacity-50 {
        background-color: rgba(39, 39, 39, 0.6);
    }
`;

export const FullPageSpinner = () => (
    <Wrapper>
        <div className="overlay opacity-50" />
        <div className="preloader">
            <MoonLoader color="#B19777" />
        </div>
    </Wrapper>
);

const PreLoader = () => (
    <Wrapper>
        <div className="overlay" />
        <div className="preloader">
            <BarLoader color="#B19777" width="70%" height={1.5} />
        </div>
    </Wrapper>
);

export default PreLoader;
