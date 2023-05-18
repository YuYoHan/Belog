import { useMutation } from '@tanstack/react-query';
import { AuthApi } from 'apis/auth/authApi';
import { OpenCloseModal } from 'atom/modal/isOpenCloseModal';
import { StorgeSession } from 'atom/SessionStorge/SessionStorge';
import useInputs from 'hooks/useinputs';
import {  useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { SessionRepository } from 'repository/SessionRepository';
import styled from 'styled-components';





function LoginModal() {
  const setIsOpenAddTodoModal = useSetRecoilState(OpenCloseModal);
  const setStorgeSession = useSetRecoilState(StorgeSession);
  const navigete = useNavigate()
  const [{ userEmail, userPw }, onChangeForm] = useInputs({
    userEmail: '',
    userPw: '',
  });


  const onClickCloseModal = () => {
    setIsOpenAddTodoModal(false)
  }
  
  const loginMutaion = useMutation(() => AuthApi.login({userEmail,userPw}), {
        onSuccess: (res) => {
            SessionRepository.setSession(res.data.userEmail,res.data.userId);
            const UserSessiondata = SessionRepository.getSession();
            if (UserSessiondata) setStorgeSession(true)
            alert('로그인 되었습니다.')
            setIsOpenAddTodoModal(false)
            return navigete('/')
        },
        onError: (err) => {
            alert(err);
        },
    });

 

  return (
    <>
        <CloseButton onClick={onClickCloseModal}>X</CloseButton>
        <LoginContainer>
          <Title>로그인</Title>
          <form onSubmit={(e)=> {
            e.preventDefault()
            loginMutaion.mutate()}}>
            <Input type="email" name='userEmail' onChange={onChangeForm} placeholder="이메일" />
            <Input type="password" name='userPw' onChange={onChangeForm} placeholder="비밀번호" />
            <SubmitButton >로그인</SubmitButton>
          </form>
        </LoginContainer>
  </>);
}

export default LoginModal;


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
  background-color: #757bf6;;
  color: #fff;
  border: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
`;
