import { OpenCloseModal } from 'atom/modal/isOpenCloseModal';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

function LoginButton() {
  // 전역 모달관리 boolean 값으로 여부 판단
  const setIsOpenAddTodoModal = useSetRecoilState(OpenCloseModal);

  // 모달 오픈
  const onClickModalOpen = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
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
  height: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1rem;
    border-radius: 1rem;
    border: none;
    outline: none;
    font-weight: bold;
    word-break: keep-all;
    background: #212529;
    color: #FFFFFF;
    transition: all 0.125s ease-in 0s;
    cursor: pointer;
`;
