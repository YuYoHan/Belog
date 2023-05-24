import React,{useState} from "react";
import styled from "styled-components";
import JoinModal from "./modal/JoinModal";
import LoginModal from "./modal/LoginModal";

export interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen : React.Dispatch<React.SetStateAction<boolean>>;
}

function Login() {

  
  // 모달창의 로그인 , 회원가입 text 의 반대되는 form 사용자 노출
  let [form, setForm] = useState<string>('로그인');
  const onFormChange = (e : React.MouseEvent) : void => {
    const  {innerText} :  { innerText: string } = e.target as HTMLDivElement
    form = innerText.toLowerCase();
    setForm(form);
  };

  return (
    <Overlay >
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
    {
      form !== '로그인' ? <JoinModal setForm={setForm}/> : <LoginModal/> 
    }

    {
      form !== '로그인' ?
      <SignUpText>
      계정이 이미 있으신가요? <SignUpLink form={form} onClick={onFormChange}>로그인</SignUpLink> 
      </SignUpText>
      : 
      <SignUpText>
      아직 회원이 아니신가요? <SignUpLink form={form} onClick={onFormChange}>회원가입</SignUpLink> 
      </SignUpText>
    }
    </ModalWrapper>
  </Overlay>

  );
}

export default Login;

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
  width: 30rem;
`;

const SignUpText = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const SignUpLink = styled.span<{form : string}>`
  color: #20c997;
  cursor:pointer;
`;