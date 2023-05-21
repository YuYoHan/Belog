import { OpenCloseModal } from 'atom/modal/isOpenCloseModal';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

function LoginButton() {
  // 전역 모달관리 boolean 값으로 여부 판단
  const setIsOpenAddTodoModal = useSetRecoilState(OpenCloseModal);

  // 모달 오픈
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
