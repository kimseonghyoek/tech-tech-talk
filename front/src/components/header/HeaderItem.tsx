import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../palette';

const Container = styled.li`
  display: flex;
  justify-content: center;
  list-style: none;
  align-items: center;

  a {
     color: ${palette.black};
     text-decoration: none;

     p {
      font-size: 1.4rem;
     }
  }
`;

function HeaderItem({item, url} : {item: string, url: string}): JSX.Element {
  return (
    <Container>
      <Link to={url}>
        <p>{item}</p>
      </Link>
    </Container>
  )
};

export default HeaderItem;