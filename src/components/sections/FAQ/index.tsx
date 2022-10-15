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
        question: "Just some question",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, velit.",
    },
    {
        idx: 2,
        question: "Just some question",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, velit.",
    },
];
const questionsRight = [
    {
        idx: 1,
        question: "Just some question 2",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, velit.",
    },
    {
        idx: 2,
        question: "Just some question 2",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, velit.",
    },
];

const FAQ = () => {
    const [firstTab, setFirstTab] = useState<number>(1);
    const [secondTab, setSecondTab] = useState<number>(-1);
    /* 
        onclick
        
    
    */

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
