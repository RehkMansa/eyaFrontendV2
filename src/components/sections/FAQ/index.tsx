import { useState } from "react";
import styled from "styled-components";
import { MinusIcon, PlusIcon } from "../../../pages/aboutpage/icons";

const ButtonWrap = styled.div`
    &.acc-btn:before {
        display: none;
    }
`;

type Props = {
    open: boolean;
    idx: number;
    question: string;
    answer: string;
    toggleSection: () => void;
};

const Card = ({ open, idx, question, answer, toggleSection }: Props) => (
    <li className={`accordion block ${open ? " active-block" : ""}`}>
        <ButtonWrap onClick={toggleSection} className="acc-btn">
            <span className="count">{idx}.</span>
            {question}
            {open ? <MinusIcon /> : <PlusIcon />}
        </ButtonWrap>
        <div className={`acc-content ${open ? "current" : ""}`}>
            <div className="content">
                <div className="text">{answer}</div>
            </div>
        </div>
    </li>
);

const questionsLeft = [
    {
        idx: 1,
        question: "How do I become an agent ?",
        answer: "Becoming an agent is quite simple, all you have to do is agree to our terms and agreement and you are one",
    },
    {
        idx: 2,
        question: "How does the agent program work ?",
        answer: "Our top agent for the month receives a cash price of 500,000 naira, minus his commissions",
    },
];
const questionsRight = [
    {
        idx: 1,
        question: "How does the investment work ?",
        answer: "You partner with us in the development of most Terraces and Bungalows  within the layout of our estates for 30% profit on your financial investment.",
    },
    {
        idx: 2,
        question: "Can I make monthly payments for properties ?",
        answer: "The answer is Yes! we have different payment plans for our properties",
    },
];

const FAQ = () => {
    const [firstTab, setFirstTab] = useState<number>(1);
    const [secondTab, setSecondTab] = useState<number>(-1);

    const handleToggle = (idx: number, state: number): number => {
        if (state !== idx) {
            return idx;
        }

        return -1;
    };

    return (
        <section className="section-padding2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="section-title">
                            <span>Faqs</span>
                        </h2>
                    </div>
                    <div className="col-md-6">
                        <ul className="accordion-box clearfix">
                            {questionsLeft.map(q => (
                                <Card
                                    open={q.idx === firstTab}
                                    key={q.idx}
                                    {...q}
                                    toggleSection={() =>
                                        setFirstTab(handleToggle(q.idx, firstTab))
                                    }
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="accordion-box clearfix">
                            {questionsRight.map(q => (
                                <Card
                                    open={q.idx === secondTab}
                                    key={q.idx}
                                    {...q}
                                    toggleSection={() =>
                                        setSecondTab(handleToggle(q.idx, secondTab))
                                    }
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
