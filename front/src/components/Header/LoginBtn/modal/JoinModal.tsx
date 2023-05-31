import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PopupPostCode from './PopupPostCode';
import useInputs from 'hooks/useinputs';
import useHomeRegexp from '../hooks/useHomeRegexp';
import { useSetRecoilState } from 'recoil';
import { OpenCloseModal } from 'atom/modal/isOpenCloseModal';
import { useMutation } from '@tanstack/react-query';
import { AuthApi } from 'apis/auth/authApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCheckPassword from 'hooks/checkPassword';
import { AxiosError } from 'axios';

interface formProps {
  setForm:  React.Dispatch<React.SetStateAction<string>>;
}
/**
 * @param {React.SetStateAction} setForm - 회원가입,로그인 변경 state.

 */
function JoinModal({setForm} : formProps) {

  // 카카오 주소 api ,주소 입력 시 상세 주소, 우편주소 값 할당
  const [enroll_company, setEnroll_company] = useState({
    userAddr   : "",
    userAddrDetail   : "" ,
  });

  // 카카오 모달 api 팝업 켜짐,꺼짐 여부 
  const [isKoKoApiModal, setisKoKoApiModal] = useState(false);

  // input의 name과 변수 name 일치 하면  onChangeForm 함수 실행
  const [{ userEmail, userPw, userName ,userAddrEtc }, onChangeForm] = useInputs({
    userEmail: '',
    userPw: '',
    userName  : "", 
    userAddrEtc : "",
  });

  /*
  setIsOpenAddTodoModal -  회원가입,로그인 전역으로 모달창을 관리
  Warning - 비밀번호 8자 이상
  formdata - 회원가입 폼 데이터
  disabled - 모든 회원정보가 입력됐을때 boolean값으로 버튼 활성화
  */ 
  const setIsOpenAddTodoModal = useSetRecoilState(OpenCloseModal);
  const [Warning , setWarning] = useState<boolean>(false)
  const formdata = {userEmail, userPw, userName , userAddrEtc  , userAddr : enroll_company.userAddr , userAddrDetail : enroll_company.userAddrDetail}
  const disabled = useHomeRegexp(formdata);
  const checkPw = useCheckPassword(userPw)
  
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

  // 주소 input 데이터 업데이트 
  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEnroll_company({
        ...enroll_company,
          [e.target.name]:e.target.value,
      })
  }
  
  /*
    회원가입 버튼 클릭 후 로그인 모달 이동 , toast 회원가입 메시지 노출 
  */

  const signUpMutation = useMutation(() => AuthApi.signup(formdata), {
    onSuccess: (res) => {
      setForm('로그인')
      toast.success('회원가입 성공하셨습니다.')
    },
    onError: (err : AxiosError) => {
      if(err.response && err.response.status === 500){
        toast.error('이미 존재하는 이메일입니다.')
      }
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
            <SubmitButton disabled={ disabled }>회원가입</SubmitButton>
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
