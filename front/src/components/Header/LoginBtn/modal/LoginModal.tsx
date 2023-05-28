import { useMutation } from '@tanstack/react-query';
import { AuthApi } from 'apis/auth/authApi';
import { OpenCloseModal } from 'atom/modal/isOpenCloseModal';
import { StorgeSession } from 'atom/SessionStorge/SessionStorge';
import useInputs from 'hooks/useinputs';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { SessionRepository } from 'repository/SessionRepository';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AxiosError } from 'axios';

function LoginModal() {
  const setIsOpenAddTodoModal = useSetRecoilState(OpenCloseModal);
  const setStorgeSession = useSetRecoilState(StorgeSession);
  const navigate = useNavigate();

  

  const [{ userEmail, userPw }, onChangeForm] = useInputs({
    userEmail: '',
    userPw: '',
  });

  const onClickCloseModal = () => {
    setIsOpenAddTodoModal(false);
  };

  /*
    로그인 성공 시 유저 정보 세션 저장 
    세션이 저장되면 전역으로(recoil) StorgeSession true
    toast메세지 사용자에게 노출 , 메인페이지 이동
  */
  const loginMutation = useMutation(() => AuthApi.login({ userEmail, userPw }), {
    onSuccess: (res) => {
      SessionRepository.setSession(res.data.userEmail, res.data.userId);
      const userSessionData = SessionRepository.getSession();
      if (userSessionData) setStorgeSession(true);
      setIsOpenAddTodoModal(false);
        toast.success('로그인 성공하셨습니다.')
      navigate('/');
    },
    onError: (err : AxiosError) => {
      if(err.response && err.response.status === 404){
          toast.error('비밀번호 혹은 가입되지 않은 이메일 입니다.')
      }
    },
  });

  return (
    <>
      <CloseButton onClick={onClickCloseModal}>X</CloseButton>
      <LoginContainer>
        <Title>로그인</Title>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginMutation.mutate();
          }}
        >
          <Input type="email" name="userEmail" onChange={onChangeForm} placeholder="이메일" />
          <Input type="password" name="userPw" onChange={onChangeForm} placeholder="비밀번호" />
          <SubmitButton>로그인</SubmitButton>
        </form>
      </LoginContainer>
    </>
  );
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
  background-color: #757bf6;
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