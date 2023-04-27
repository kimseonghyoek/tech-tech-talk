import React, { useEffect, useState } from 'react';
import PreUser from '../components/user/PreUser';
import axios from 'axios';

function DevManage(): JSX.Element {

  const [userName, setName] = useState<string|null>("USER_NAME");

  const getUserInfo = () => {
    const nickname = sessionStorage.getItem("nickname");
    console.log(nickname);
    return setName(nickname);
  };

  useEffect(() => {
    getUserInfo();
  });

  return (
    <>
      <PreUser name={userName}/>
    </>
  )
}

export default DevManage;