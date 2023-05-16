import { OpenCloseModal } from 'atom/modal/isOpenCloseModal';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

function LoginButton() {
  const setIsOpenAddTodoModal = useSetRecoilState(OpenCloseModal);


  const onClickModalOpen = (e : any) => {
    e.preventDefault()
    setIsOpenAddTodoModal(true)
  }

  return (
    <>
      <StyledButton onClick={onClickModalOpen}>로그인</StyledButton>
    </>
  ) 
}

export default LoginButton;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
`;
