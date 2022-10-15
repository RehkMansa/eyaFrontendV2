import styled from "styled-components";

const Wrapper = styled.div`
    position: absolute;
    right: 35px;
    top: 18px;
    height: 30px;
    font-size: 14px;
    font-weight: normal;
    color: #b19777;
    line-height: 30px;
    -webkit-transition: all 500ms ease;
    transition: all 500ms ease;

    font-size: 14px;
    svg {
        height: 25px;
    }
`;

export const PlusIcon = () => (
    <Wrapper>
        <svg
            className="w-14 h-14"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
        </svg>
    </Wrapper>
);

export const MinusIcon = () => (
    <Wrapper>
        <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
            />
        </svg>
    </Wrapper>
);
