import React from 'react';
import PreUser from '../components/user/PreUser';
import axios from 'axios';

function DevManage(): JSX.Element {

  const getUserInfo = () => {
    axios.get("/user").then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    })
  }
  getUserInfo();
  return (
    <>
      <PreUser/>
    </>
  )
}

export default DevManage;