import { Header } from 'antd/es/layout/layout';
import React from 'react';
import palette from '../../palette';
import { Menu, MenuProps } from 'antd';
import { HeaderData } from './HeaderItem';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const item: MenuProps['items'] = HeaderData.map((element ,key) => ({
  key,
  label: <>
    <Link to={element.link}>{element.name}</Link>
  </>
}));


const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  padding: 0rem 3.5rem;
  background-color: ${palette.main_color1};
  justify-content: space-between;

  img {
    width: 9rem;
  }

  ul {
    background-color: ${palette.main_color1};
  }
`;

function HeaderNav(): JSX.Element {

  const navi = useNavigate();

  const naviToComm = () => {
    navi("/comm");
  }

  return (
    <StyledHeader>
        <img src={'/imgs/ttt.png'} alt='logo' onClick={naviToComm}/>
        <Menu mode='horizontal' items={item} />
    </StyledHeader>
  )
}

export default HeaderNav;