import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import palette from '../../palette';

const Btn = styled(Button)`
    background-color: ${palette.main_color1};
    width: 5rem;
    height: 5rem;
    padding: 0.5rem 0.5rem;
    margin: 1rem;

    span {
        font-size: 2rem;
    }
`;

function GoogleBtn(): JSX.Element {
    return (
        <Btn>
            G 
        </Btn>
    )
};

export default GoogleBtn;