// Component Test page
import React from 'react';
import Header from '../components/header/Header';
import DropDown from '../components/dropdown/DropDown';
import AppLayout from "../Layout/AppLayout";
import PostCard from "../components/postcards/PostCard";
import User from './user/User';
import Post from './Post';
import Weather from '../components/Weather';
function Test(): JSX.Element {

  return (
    <Weather/>
  )
}

export default Test;