import react, { useState } from "react";
import styled from "styled-components";
import palette from "../palette";

const Tag = styled.div`
    background-color: ${palette.pro_back2};
    width: 7rem;
    height: 100%;
    padding: 0.7rem;
    border-radius: 5px;
    margin: 0rem 1rem;
    text-align: center;

    p {
        color: ${palette.white};
        margin: 0%;
    }
`;

type TagProps = { text: string, id: any };

const Tags = ({ text, id }: TagProps): JSX.Element => {

    const removeTag = () => {
        
    }
    
    return (
        <Tag id={id}>
            <p>{text}</p>
        </Tag>
    )
};

export default Tags;