import { useMutation, useQuery ,useQueryClient} from '@tanstack/react-query';
import { AuthApi } from 'apis/auth/authApi';
import { UserListKey } from 'consts/queryKey';
import useInputs from 'hooks/useinputs';
import { media } from 'libs/styles/media';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SessionRepository } from 'repository/SessionRepository';
import styled from 'styled-components';
import AddrUserUpdate from './addrUpdate';
import PswUserUpdate from './pswUserUpdate';
import Title from './Title'

export interface UserData  {
  userAddr:       string  
  userAddrDetail: string  
  userAddrEtc:    string  
  userEmail:      string  
  userId:         number | undefined
  userName:       string | undefined
  userPw:         string  
}

export interface UserDataResponse {
  data: UserData
}

export type userdataPrpos = {

  enroll_company : {
    userAddr: string;
    userAddrDetail: string;
  }
  userAddrEtc : string
  onChangeForm : (event: ChangeEvent<HTMLInputElement>) => void
  setEnroll_company : React.Dispatch<React.SetStateAction<{
  userAddr: string;
  userAddrDetail: string;
  }>>
}

export type userPswdataPrpos = {
  password : string
  userPw : string
  onChangeForm : (event: ChangeEvent<HTMLInputElement>) => void
}

export type userEmailDataPrpos = {
  email : string
  userEmail : string
  onChangeForm : (event: ChangeEvent<HTMLInputElement>) => void
}

function UserSettion() {

  /*
    SessionData - 세션의 저장된 유저정보
    eamil - 세션 유저 이메일
    data - 유저 상세정보
  */
  const SessionData = SessionRepository.getSession()
  const eamil = SessionData.email as string
  const {data} = useQuery<UserDataResponse>([UserListKey.GET_USER_LIST], () => AuthApi.getUser(eamil));
  const navigete = useNavigate();
  
  // 카카오 api  우편주소, 상세주소 값을 담아주기 위한 변수
  const [enroll_company, setEnroll_company] = useState({
    userAddr :   "",
    userAddrDetail : "" ,
  });

  // 이메일 , 비밀번호 , 참고주소 담아주기 위한 useInputhook
  const [{ userEmail, userPw ,userAddrEtc }, onChangeForm, setvalue] = useInputs({
    userEmail:   "",
    userPw:  "",
    userAddrEtc :  '',
  });
  
  // 서버에서 받아온 데이터가 있으면 기본값을 셋팅해주는 useEffect
  useEffect(() => {
    if(data) {
      setvalue({
        userEmail:  data?.data.userEmail || "",
        userPw: data?.data.userPw || "",
        userAddrEtc : data?.data.userAddrEtc || '',
      })

      setEnroll_company({
        userAddr: data?.data.userAddr || "",
        userAddrDetail:  data?.data.userAddrDetail|| ""
      })
    } 
  },[data])

  // 회원정보 수정 api mutation 파라미터 UserId, UserUpdateData
  const UserId = data?.data.userId as number;
  const UserUpdateData : UserData = {
    userId : data?.data.userId ,
    userAddr : enroll_company.userAddr,
    userAddrDetail : enroll_company.userAddrDetail,
    userEmail,
    userPw,
    userAddrEtc,
    userName:data?.data.userName 
  }
  
  const queryClient = useQueryClient();
  // 회원정보 버튼 클릭 후 서버에 수정된 데이터 전송성공시 , alert 노출 , 회원정보 query 키 최신화
  const UserUpdateMutaion = useMutation(() => AuthApi.userUpdate(UserId,UserUpdateData), {
    onSuccess: (res) => {
        queryClient.invalidateQueries([UserListKey.GET_USER_LIST]);
        navigete('/')
    },
    onError: (err) => {
        alert(err);
    },
  });

  // 비밀번호 8글자 입력 시 회원가입 성공
  const handleUsersettionMutation = async () => {
    if(userPw.length < 8) return toast.error('비밀번호 8글자 이상 입력해주세요')
    
    UserUpdateMutaion.mutate();
  } 
  
  
  
  return (
    <Wrapper>
      <Title/>
      {
        data &&
        <>
          <PswUserUpdate userPw={userPw} password={data?.data.userPw} onChangeForm={onChangeForm} />
          <AddrUserUpdate 
          enroll_company={enroll_company}
          userAddrEtc={userAddrEtc}
          onChangeForm={onChangeForm}
          setEnroll_company={setEnroll_company}
          />
        </>
      }
      <BtnWrap>
        <BackBtn onClick={() => navigete('/')}>취소</BackBtn>
        <UserUpdateBtn onClick={handleUsersettionMutation}>회원수정 </UserUpdateBtn>
      </BtnWrap>
    </Wrapper>
  )
}

export default UserSettion

const Wrapper = styled.div`
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  width: 768px;
  ${media.mobildL} {
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
   }
  padding-bottom: 5rem;
`

const BtnWrap = styled.div`
  display:flex;
  justify-content: center;
  margin-top : 1.5rem;

  ${media.mobildL} {
    margin-top : 2.5rem;
  }
  & button{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    border: none;
    font-size: 1rem;
    height: 2rem;
    padding: 0px 1.25rem;
    border-radius: 4px;
  }
`

const UserUpdateBtn = styled.button`
    margin-left:1rem;
    background: #757bf6;
    color:#fff;
`

const BackBtn = styled.button`
  
`