import { BarLoader } from "react-spinners";
import styled from "styled-components";

const Wrapper = styled.div`
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .overlay {
        position: absolute;
        background-color: rgba(39, 39, 39, 01);
        inset: 0;
    }
`;

const PreLoader = () => (
    <Wrapper>
        <div className="overlay" />
        <BarLoader color="#B19777" width="30%" height={1.5} />
    </Wrapper>
);

export default PreLoader;
