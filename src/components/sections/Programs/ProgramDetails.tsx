import {
    TfiThought,
    TfiMapAlt,
    TfiCrown,
    TfiPencilAlt,
    TfiCheckBox,
} from "react-icons/tfi";
import { Navigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Arrow from "../../../assets/img/arrow.png";
import programs from "./data";

const Wrapper = styled.div`
    &:last-child {
        img {
            display: none;
        }
    }
`;

const icons: { [x: number]: JSX.Element } = {
    1: <TfiThought />,
    2: <TfiMapAlt />,
    3: <TfiCrown />,
    4: <TfiPencilAlt />,
};

type Props = { idx: number; title: string; content: string };

const oddEvenStart = (idx: number) => {
    if (idx <= 1) return "start";

    if (idx % 2 === 0) return "odd";

    return "";
};

const Card = ({ idx, title, content }: Props) => (
    <Wrapper className="col-md-3">
        <div className={`item mb-md50 ${oddEvenStart(idx)}`}>
            <img className={idx % 2 !== 0 ? "tobotm" : undefined} src={Arrow} alt="" />
            <span className="icon ti-direction-alt">{icons[idx] || <TfiCheckBox />}</span>
            <div className="cont">
                <h3>0{idx}</h3>
                <h6>{title}</h6>
                <div className="line" />
                <p>{content}</p>
            </div>
        </div>
    </Wrapper>
);

const ProgramDetail = () => {
    const { name } = useParams();

    const program = programs.find(d => d.url === name);

    if (!program) {
        return <Navigate to="/not-found" />;
    }
    const [first, ...rest] = program.url.replaceAll("-", " ").split(" ");

    return (
        <section className="process section-padding2">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="section-title">
                            {first} <span>{rest.join(" ")}</span>
                        </h2>
                    </div>
                </div>
                <div className="row text-center mt-60 mb-60">
                    {program.steps.map(item => (
                        <Card
                            idx={item.idx}
                            content={item.content}
                            title={item.title}
                            key={item.idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramDetail;
