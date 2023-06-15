import React from 'react';
import styled from 'styled-components';

const WrapSetting = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

const StyledForm = styled.form`
  
`;

function Setting(): JSX.Element {
  return (
    <WrapSetting>
      <div>
        <h1>Setting</h1>  
      </div>
    </WrapSetting>
  )
};

export default Setting