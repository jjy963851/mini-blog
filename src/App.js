import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import MainPage from './Component/Page/MainPage';

import PostViewPage from './Component/Page/PostViewPage';
import PostWritePage from './Component/Page/PostWritePage';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`



function App(props) {

  return (
  <BrowserRouter>
  <MainTitleText>Jaeyong's 미니블로그</MainTitleText>
  <Routes>
    <Route index element ={<MainPage/>}/>
    <Route path = "post-write" element = {<PostWritePage/>}/>
    <Route path = "post/: postId" element = {<PostViewPage/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
