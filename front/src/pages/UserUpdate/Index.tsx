import { useMutation, useQuery ,useQueryClient} from '@tanstack/react-query';
import Axios from 'apis/@core';
import { AuthApi } from 'apis/auth/authApi';
import { UserListKey } from 'consts/queryKey';
import useInputs from 'hooks/useinputs';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SessionRepository } from 'repository/SessionRepository';
import styled from 'styled-components';
import AddrUserUpdate from './addrUpdate';
import EmailUserUpdate from './emailUpdate';
import PswUserUpdate from './pswUserUpdate';
import Title from './Title'

export interface UserDataResponse {
  data: {
    userAddr: string;
    userAddrDetail: string;
    userAddrEtc: string;
    userEmail: string;
    userId: number;
    userName: string;
    userPw: string;
  };
}

function UserSettion() {

  const SessionData = SessionRepository.getSession()
  const eamil = SessionData.email as string
  const {data} = useQuery<UserDataResponse>([UserListKey.GET_USER_LIST], () => AuthApi.getUser(eamil));
  const navigete = useNavigate();
  
  const [enroll_company, setEnroll_company] = useState({
    userAddr :   "",
    userAddrDetail : "" ,
  });

  const [{ userEmail, userPw ,userAddrEtc }, onChangeForm, setvalue] = useInputs({
    userEmail:   "",
    userPw:  "",
    userAddrEtc :  '',
  });
  
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

  const UserId = data?.data.userId as number;
  const UserUpdateData = {
    userId : data?.data.userId,
    userAddr : enroll_company.userAddr,
    userAddrDetail : enroll_company.userAddrDetail,
    userEmail,
    userPw,
    userAddrEtc,
    userName:data?.data.userName
  }
  
  const queryClient = useQueryClient();
  const UserMutaion = useMutation(() => AuthApi.userUpdate(UserId,UserUpdateData), {
    onSuccess: (res) => {
        alert('수정되었습니다.')
        queryClient.invalidateQueries([UserListKey.GET_USER_LIST]);
    },
    onError: (err) => {
        alert(err);
    },
});

  
  return (
    <Wrapper>
      <Title/>
      
    {
        data &&
        <>
          {/* <EmailUserUpdate userEmail={userEmail} email={data?.data.userEmail} onChangeForm={onChangeForm}/> */}
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
        <UserUpdateBtn onClick={()=> UserMutaion.mutate()}>회원수정 </UserUpdateBtn>
        {/* <UserUpdateBtn onClick={test}>회원수정 </UserUpdateBtn> */}
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
  padding-bottom: 5rem;
`

const BtnWrap = styled.div`
  display:flex;
  justify-content: center;
  margin-top : 1.5rem;

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