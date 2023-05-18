import styled from "styled-components"
import { IoMdArrowDropdown } from "react-icons/io";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AuthApi } from "apis/auth/authApi";
import { useMutation } from "@tanstack/react-query";
import { SessionRepository } from "repository/SessionRepository";
import { useRecoilState } from "recoil";
import { StorgeSession } from "atom/SessionStorge/SessionStorge";

function Profile() {
   
   const [Profilemenu,setProfilemenu] = React.useState<boolean>(false);
   const [isLoginComponent, setisLoginComponent] = useRecoilState(StorgeSession);
   const SessionEmail = SessionRepository.getSession()
   const email = SessionEmail.email
   
   const onClickMenu = () => {
      if(!Profilemenu) return setProfilemenu(true);
      setProfilemenu(false);
      
   }

   const logoutMutation = useMutation(() => AuthApi.logout(), {
      onSuccess: (res) => {
         if(res.status === 200){
            alert(res.data)
            window.location.replace("/")
            SessionRepository.removeSession();
            setisLoginComponent(false)
         }  
      },
      onError: (err) => {
          console.log(err);
          
      },
  }); 

   return(
      <S.Wrapper>
         <S.container onClick={onClickMenu}>
            <UserEmail >{email}</UserEmail>
            <S.Profilearrow/>
            <S.Profiletoggle  Profilemenu={Profilemenu}>
               <div>
                  <ul>
                     <li><Link to={'/mypage'}>마이 페이지</Link></li>
                     <li><Link to={'/setting'}>설정</Link></li>
                     <li><Link to={'#'} onClick={()=> logoutMutation.mutate()}>로그아웃</Link></li>
                     {/* <li><Link to={'/'} onClick={test}>로그아웃</Link></li> */}
                  </ul>
               </div>
            </S.Profiletoggle>
         </S.container>
      </S.Wrapper>
   )
}

export default Profile

const Wrapper = styled.div`

`

const container = styled.div`
   cursor: pointer;
   display: flex;
   align-items: center;
   position: relative;
`

const UserEmail = styled.div`
   display: block;
   transition: all 0.125s ease-in 0s;
   font-weight:bold;
   font-size : 1.2rem;
`

const Profilearrow = styled(IoMdArrowDropdown)`
   font-size: 1.5rem;
   margin-left: 0.25rem;
   color: #868E96;
   transition: all 0.125s ease-in 0s;
   margin-right: -0.4375rem;
`

const Profiletoggle = styled.div<{Profilemenu: boolean}>`
   display: ${({Profilemenu}) => (Profilemenu ? `block` : `none`)};
   position: absolute;
   top: 100%;
   margin-top: 1rem;
   right: 0px;
   background-color : #000;

   & div{
      position: relative;
      z-index: 5;
      width: 12rem;
      background: #FFFFFF;
      box-shadow: 0 5px 25px rgb(0 0 0 / 15%);
   }

   & div li {
      padding: 0.75rem 1rem;
      line-height: 1.5;
   }
   & div li a {
      color:#212529;
      cursor: pointer;
      font-weight: 500;
   }
`


const S = {
   Wrapper,
   container,
   Profilearrow,
   Profiletoggle,
}