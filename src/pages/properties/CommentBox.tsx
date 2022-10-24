import styled from "styled-components";

type Props = { message: string; date: string; fullName: string };

const Wrapper = styled.div`
    margin-bottom: 30px;

    .eyahomes-user-comment {
        margin-right: 15px;
    }
    h3,
    p {
        margin-bottom: 10px;
    }

    p:first-letter {
        text-transform: uppercase;
    }

    @media screen and (min-width: 100px) {
        h3 span {
            margin-left: 15px;
        }
    }
`;

const NameIcon = styled.div`
    background: #323232;
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    text-transform: uppercase;
    color: #b19777;
    font-weight: 400;
    font-family: "Oswald", sans-serif;
    font-size: 20px; ;
`;

const CommentBox = ({ message, date, fullName }: Props) => (
    <Wrapper className="eyahomes-post-comment-wrap">
        <div className="eyahomes-user-comment">
            <NameIcon>{fullName[0] + fullName[1]}</NameIcon>
        </div>
        <div className="eyahomes-user-content">
            <h3>
                {fullName}
                <span> {date}</span>
            </h3>
            <p>{message}</p>
        </div>
    </Wrapper>
);

export default CommentBox;
