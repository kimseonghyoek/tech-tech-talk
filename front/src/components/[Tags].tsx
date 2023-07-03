import react from "react";
import styled from "styled-components";
import palette from "../palette";

const Tag = styled.div`
    background-color: ${palette.pro_back2};
    width: 7rem;
    padding: 0.5rem;
    border-radius: 5px;
    margin: 0rem 1rem;
    text-align: center;

    p {
        color: ${palette.white};
        margin: 0%;
    }
`;

type TagProps = { text: string };

const Tags = ({ text }: TagProps): JSX.Element => {
    return (
        <Tag>
            <p>{text}</p>
        </Tag>
    )
};

export default Tags;