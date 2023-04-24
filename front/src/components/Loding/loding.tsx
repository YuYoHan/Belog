import React from 'react';
import styled from 'styled-components';


function LodingPage ()  {
  return (
    <Background>
      <img src={require('assets/images/gif/loding.gif')} alt="로딩중" />
      <LoadingText>로딩 중</LoadingText>
    </Background>
  );
};

export default LodingPage


const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & img {
    width: 10%;
  }
`;

const LoadingText = styled.div`
  text-align: center;
  font-weight: bold;
`;