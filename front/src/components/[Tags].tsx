import react from "react";
import styled from "styled-components";
import palette from "../palette";

const Tag = styled.div`
    backgroundColor: ${palette.main_color3};
`;

const Tags = (text: string): JSX.Element => {
    return (
        <Tag>
            {text}
        </Tag>
    )
};