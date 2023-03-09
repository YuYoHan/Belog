import React from 'react';
import styled from 'styled-components';


interface Props {
  onClick: () => void;
}

function LoginButton({ onClick }: Props) {
  return <StyledButton onClick={onClick}>로그인</StyledButton>;
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
