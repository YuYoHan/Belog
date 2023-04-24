import React, { useState } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  position: relative;
  width: 400px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  color: #333;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const JoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  padding: 10px;
  background-color: #20c997;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const SignUpText = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const SignUpLink = styled.a`
  color: #20c997;
`;

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function JoinModal({ isOpen, onClose }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalWrapper>
        <CloseButton onClick={onClose}>X</CloseButton>
        <JoinContainer>
          <Title>회원가입</Title>
          <form onSubmit={handleSubmit}>
            <Input type="email" placeholder="이메일" value={email} onChange={handleEmailChange} />
            <Input type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange} />
            <SubmitButton>회원가입</SubmitButton>
          </form>
          <SignUpText>
            이미 계정이 있으신가요? <SignUpLink href="#">로그인</SignUpLink>
          </SignUpText>
        </JoinContainer>
      </ModalWrapper>
    </Overlay>
  );
}

export default JoinModal;