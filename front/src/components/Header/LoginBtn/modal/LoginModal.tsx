import React,{useState} from 'react';
import styled from 'styled-components';
import JoinModal from './JoinModal';

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

const LoginContainer = styled.div`
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

function LoginModal({ isOpen, onClose }: Props) {
  const [isJoinModalOpen, setJoinModalOpen] = useState(false);

  const handleJoinClick = () => {
    onClose();
    setJoinModalOpen(true);
  };

  if (!isOpen) return null;

  return (
    <><Overlay onClick={onClose}>
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <LoginContainer>
          <Title>로그인</Title>
          <Input type="email" placeholder="이메일" />
          <Input type="password" placeholder="비밀번호" />
          <SubmitButton>로그인</SubmitButton>
          <SignUpText>
            아직 회원이 아니신가요? {''}<SignUpLink onClick={handleJoinClick}>회원가입</SignUpLink>
          </SignUpText>
        </LoginContainer>
      </ModalWrapper>
    </Overlay>
    <JoinModal isOpen={isJoinModalOpen} onClose={() => setJoinModalOpen(false)}/>
  </>);
}

export default LoginModal;