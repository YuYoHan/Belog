import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import DaumPostcode from "react-daum-postcode";
import PopupPostCode from './PopupPostCode';
import useInputs from 'hooks/useinputs';
import useHomeRegexp from '../hooks/useHomeRegexp';
import { useSetRecoilState } from 'recoil';
import { OpenCloseModal } from 'atom/modal/isOpenCloseModal';
import { useMutation } from '@tanstack/react-query';
import { AuthApi } from 'apis/auth/authApi';

interface formProps {
  setForm:  React.Dispatch<React.SetStateAction<string>>;
}

function JoinModal({setForm} : formProps) {

  const [enroll_company, setEnroll_company] = useState({
    userAddr   : "",
    userAddrDetail   : "" ,
  });

  const [isKoKoApiModal, setisKoKoApiModal] = useState(false);
  const [{ userEmail, userPw, userName ,userAddrEtc }, onChangeForm] = useInputs({
    userEmail: '',
    userPw: '',
    userName  : "", 
    userAddrEtc : "",
  });

  const setIsOpenAddTodoModal = useSetRecoilState(OpenCloseModal);
  const [Warning , setWarning] = useState<boolean>(false)
  const formdata = {userEmail, userPw, userName , userAddrEtc  , userAddr : enroll_company.userAddr , userAddrDetail : enroll_company.userAddrDetail}
  const disabled = useHomeRegexp(formdata);

  useEffect(() =>{
    if(userPw.length >= 8){
      setWarning(false)
    }else{
      setWarning(true)
    }
  },[userPw])

  const onClickCloseModal = () => {
    setIsOpenAddTodoModal(false)
  }
  
  const onClickOpenKoKoApi = () => {
    setisKoKoApiModal(true)
  }

  const onClickCloseKoKoApi = () => {
    setisKoKoApiModal(false)
  }

  const handleInput = (e:any) => {
    setEnroll_company({
        ...enroll_company,
          [e.target.name]:e.target.value,
      })
  }

  const signUpMutation = useMutation(() => AuthApi.signup(formdata), {
    onSuccess: (res) => {
        console.log(res);
        setForm('로그인')
        alert(res.data)
    },
    onError: (err) => {
        console.log(err);
        
    },
});
  
  return (
    <>
        <CloseButton onClick={onClickCloseModal}>X</CloseButton>
        <JoinContainer>
          <Title>회원가입</Title>
          <form onSubmit={(e)=>  {
            e.preventDefault();
          signUpMutation.mutate()
          }}>
            <Input type="email" name='userEmail' placeholder="이메일" onChange={onChangeForm} />
            <Input type="password" name='userPw' placeholder="비밀번호" onChange={onChangeForm} />
            <Warningmsg  Warning={Warning}><p>비밀번호 8자이상 입력해주세요</p></Warningmsg>
            <Input type="text" name='userName' placeholder="이름"  onChange={onChangeForm} />
            <PostalCodeInput>
            <Input type="text" placeholder="우편번호" onChange={handleInput} value={enroll_company.userAddr}/>
            <Input type="button" onClick={onClickOpenKoKoApi} value="우편번호 찾기" />
            </PostalCodeInput>
            {
            isKoKoApiModal &&
            <PopupPostCode onClose={onClickCloseKoKoApi} setcompany={setEnroll_company}/>
            }
            <Input type="text" placeholder="주소"  onChange={handleInput} value={enroll_company.userAddrDetail}/>
            <Input type="text" name='userAddrEtc' placeholder="상세주소" onChange={onChangeForm}/>
            <SubmitButton disabled={disabled}>회원가입</SubmitButton>
          </form>
        </JoinContainer>
    </>
  );
}

export default JoinModal;



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
 
  & .postcode {
    background : rgba(0,0,0,0.25);
    position : fixed;
    left:0;
    top:0;
    height:100%;
    width:100%;
  } 
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const PostalCodeInput = styled.div`
    display: flex;
    
    & input[type='button']{
      width : 100px;
      margin-left: 10px
    }
`;

const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  background: ${({ disabled }) => (disabled ?  '#F0F0F0' :'#757bf6;' )};
  color: ${({ disabled }) => (disabled ? '#747474' : '#fff'  )};
  font-weight: bold;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Warningmsg = styled.div<{Warning: boolean}>`
  width : 80%;
  margin-bottom: 5px;
  padding-left: 10px;

  display: ${({ Warning }) => (Warning ? 'block' : 'none')};
  & p {
    font-size: 14px;
    color : red;
  }
`
