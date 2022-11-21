import React, { useState } from "react";
import styled from "styled-components";
import App from "./App";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    button {
        padding: 10px 30px;
        color: #fff;
    }

    input {
        padding: 10px 30px;
        border: 1px solid rgb(177, 151, 119);
    }

    @-webkit-keyframes float {
        0% {
            transform: translate(0px, 0px) rotate(3deg);
        }
        100% {
            transform: translate(10px, 30px) rotate(-3deg);
        }
    }
    @keyframes float {
        0% {
            transform: translate(0px, 0px) rotate(3deg);
        }
        100% {
            transform: translate(10px, 30px) rotate(-3deg);
        }
    }
    @-webkit-keyframes shadow {
        0% {
            transform: scale(1.2, 0.5) translateX(8px);
        }
        100% {
            transform: scale(1, 0.5) translateX(15px);
        }
    }
    @keyframes shadow {
        0% {
            transform: scale(1.2, 0.5) translateX(8px);
        }
        100% {
            transform: scale(1, 0.5) translateX(15px);
        }
    }
    @-webkit-keyframes triangle {
        0% {
            transform: scale(0.5, 0.8);
        }
        100% {
            transform: scale(0.5, 1.2);
        }
    }
    @keyframes triangle {
        0% {
            transform: scale(0.5, 0.8);
        }
        100% {
            transform: scale(0.5, 1.2);
        }
    }
    @-webkit-keyframes triangle-reversed {
        0% {
            transform: scale(-0.5, 0.8);
        }
        100% {
            transform: scale(-0.5, 1.5);
        }
    }
    @keyframes triangle-reversed {
        0% {
            transform: scale(-0.5, 0.8);
        }
        100% {
            transform: scale(-0.5, 1.5);
        }
    }
    body {
        background: #162440;
        margin: 0;
        padding: 0;
    }

    .ghost {
        height: 100px;
        width: 100px;
        -webkit-animation: float 2.8s infinite alternate ease-in-out;
        animation: float 2.8s infinite alternate ease-in-out;
        background: white;
        border-radius: 50% 50% 0 0;
        position: relative;
        margin: 0 auto;
        margin-bottom: 100px;
    }
    .ghost__shadow {
        height: 5px;
        width: 100px;
        box-shadow: 0 0 20px 30px;
        -webkit-animation: shadow 2.8s infinite alternate ease-in-out;
        animation: shadow 2.8s infinite alternate ease-in-out;
        background: black;
        position: relative;
        margin: 0 auto;
        top: 120px;
        border-radius: 50%;
        opacity: 0.4;
    }
    .ghost__eye {
        height: 30px;
        width: 30px;
        background: black;
        position: absolute;
        border-radius: 50%;
    }
    .ghost__eye::before {
        height: 10px;
        width: 10px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        top: 10px;
        left: 10px;
        content: "";
        position: absolute;
    }
    .ghost__eye::after {
        height: 5px;
        width: 5px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        top: 25px;
        left: 25px;
        content: "";
        position: absolute;
    }
    .ghost__eye--1 {
        left: 50px;
        top: 25px;
    }
    .ghost__eye--2 {
        left: 8px;
        top: 30px;
    }
    .ghost__triangle {
        transform: scale(0.5, 1);
        height: 40px;
        width: 40px;
        background: white;
        position: absolute;
        border-radius: 0 0 30% 90%;
        transform-origin: top;
    }
    .ghost__triangle--1 {
        -webkit-animation: triangle 2.8s infinite alternate ease-in-out;
        animation: triangle 2.8s infinite alternate ease-in-out;
        bottom: -39px;
        left: -10px;
    }
    .ghost__triangle--2 {
        -webkit-animation: triangle 2.8s infinite alternate ease-in-out;
        animation: triangle 2.8s infinite alternate ease-in-out;
        -webkit-animation-delay: 0.5s;
        animation-delay: 0.5s;
        bottom: -24px;
        left: 15px;
    }
    .ghost__triangle--3 {
        -webkit-animation: triangle-reversed 2.8s infinite alternate ease-in-out;
        animation: triangle-reversed 2.8s infinite alternate ease-in-out;
        transform: scale(-0.5, 1);
        -webkit-animation-delay: 0.8s;
        animation-delay: 0.8s;
        bottom: -29px;
        left: 45px;
    }
    .ghost__triangle--4 {
        -webkit-animation: triangle-reversed 2.8s infinite alternate ease-in-out;
        animation: triangle-reversed 2.8s infinite alternate ease-in-out;
        transform: scale(-0.5, 1);
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s;
        bottom: -39px;
        left: 70px;
    }
`;

const EXPECTED = "rehkmansa#69";

const LockScreen = () => {
    const [password, setPassword] = useState("");
    const [isExpected, setIsExpected] = useState(false);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        password === EXPECTED ? setIsExpected(true) : setIsExpected(false);
    };

    return isExpected ? (
        <App />
    ) : (
        <Wrapper>
            <div className="ghost">
                <div className="ghost__eye ghost__eye--1" />
                <div className="ghost__eye ghost__eye--2" />
                <div className="ghost__triangle ghost__triangle--1" />
                <div className="ghost__triangle ghost__triangle--2" />
                <div className="ghost__triangle ghost__triangle--3" />
                <div className="ghost__triangle ghost__triangle--4" />
            </div>
            {/* <div className="ghost__shadow" /> */}
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <div style={{ display: "none" }}>
                <App />
            </div>
        </Wrapper>
    );
};

export default LockScreen;
