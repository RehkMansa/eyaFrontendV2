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
        idx: 3,
        question: "Just some question 2",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, velit.",
    },
    {
        idx: 4,
        question: "Just some question 2",
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, velit.",
    },
];

const FAQ = () => {
    const [selection, setSelection] = useState({
        tab: "right",
        index: -1,
    });

    const handleToggle = (idx: number, selected: string) => {
        if (selection.index === idx) {
            setSelection({
                ...selection,
                index: -1,
            });
        }
        if (selection.index !== idx) {
            setSelection({
                tab: selected,
                index: idx,
            });
        }
    };

    const isSelected = (choice: string, idx: number): boolean =>
        selection.tab === choice && selection.index === idx;

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
                                    open={isSelected("right", q.idx)}
                                    key={q.idx}
                                    {...q}
                                    toggleSection={() => handleToggle(q.idx, "right")}
                                />
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="accordion-box clearfix">
                            {questionsRight.map(q => (
                                <Card
                                    open={isSelected("left", q.idx)}
                                    key={q.idx}
                                    {...q}
                                    toggleSection={() => handleToggle(q.idx, "left")}
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
