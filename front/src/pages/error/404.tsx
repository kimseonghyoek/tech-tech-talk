import React from 'react';
import styled from 'styled-components';
import palette from '../../palette';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  
  .title {
    h1 {
      font-size: 3rem;
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 3.8rem;
    }

    .back {
      display: flex;
      flex-direction: row;
      align-items: center;

      p {
        color: ${palette.black};
        font-size: 2.5rem;
      }
    }
  }
`;

function NotFound(): JSX.Element {
  return (
    <Container>
      <div className='title'>
        <h1>404 NOT FOUND</h1>
      </div>
      <div className='main'>
        <h1>페이지를 찾을 수 없어요!</h1>
        <Link to="" className='back'>
          <p>홈으로 돌아가실래요?</p>
        </Link>
      </div>
    </Container>
  )
}

export default NotFound;