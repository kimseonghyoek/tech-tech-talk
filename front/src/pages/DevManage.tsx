import React, { useState } from 'react';
import PreUser from '../components/user/PreUser';
import axios from 'axios';

function DevManage(): JSX.Element {

  const [user_data, setUserData] = useState<string>();

  const getUserInfo = () => {
    axios.get("/user/get").then((res) => {
      const data = res.data;
      console.log(data);
      setUserData(data[0].nickname);
    }).catch((err) => {
      console.log(err);
    });
  }
  getUserInfo();
  return (
    <>
      <PreUser name={user_data}/>
    </>
  )
}

export default DevManage;