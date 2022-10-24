import { TfiThought, TfiDirectionAlt, TfiRulerPencil, TfiTag } from "react-icons/tfi";
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
    2: <TfiDirectionAlt />,
    3: <TfiRulerPencil />,
    4: <TfiTag />,
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
            <span className="icon ti-direction-alt">{icons[idx]}</span>
            <div className="cont">
                <h3>{idx}</h3>
                <h6>{title}</h6>
                <div className="line" />
                <p>{content}</p>
            </div>
        </div>
    </Wrapper>
);

const ProgramDetail = () => (
    <section className="process section-padding2">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="section-title">
                        Work <span>Process</span>
                    </h2>
                </div>
            </div>
            <div className="row text-center mt-60 mb-60">
                {programs[0].steps.map(item => (
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

export default ProgramDetail;
