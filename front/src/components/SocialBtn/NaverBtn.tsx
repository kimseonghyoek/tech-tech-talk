import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import palette from '../../palette';

const Btn = styled(Button)`
    background-color: ${palette.naver_color};
    width: 5rem;
    height: 5rem;
    padding: 0.5rem 0.5rem;
    color: white;
    margin: 1rem;

    span {
        font-size: 2rem;
    }
`;

function NaverBtn(): JSX.Element {
    return (
        <Btn>
            N
        </Btn>
    )
};

export default NaverBtn;