import { StorgeSession } from "atom/SessionStorge/SessionStorge"
import { OpenCloseModal } from "atom/modal/isOpenCloseModal"
import React, { useEffect, useRef, useState } from "react"
import { Outlet } from "react-router-dom"
import { useRecoilState } from "recoil"
import styled from "styled-components"
import Login from "./LoginBtn"
import LoginButton from "./LoginBtn/modal/LoginBtn"
import Logo from "./logo"
import OnClickPosting from "./Postingbtn"
import Profile from "./Profile"
import { ToastContainer } from "react-toastify"


function Header() {
   
   const [ScrollY, setScrollY] = React.useState<number>(0); 
   const [ScrollActive, setScrollActive] = React.useState<boolean>(false);
   const [isOpenoModal, setIsTodoModal] = useRecoilState(OpenCloseModal);
   const [isLoginComponent, setisLoginComponent] = useRecoilState(StorgeSession);
   
   // 스크롤 내릴시 fixed 속성 적용
   const handleScroll  = () =>  {
      
      if (ScrollY > 100) {
         setScrollY(window.pageYOffset);
         setScrollActive(true);
      } else {
         setScrollY(window.pageYOffset);
         setScrollActive(false);
      }
   }

   useEffect(() => {
      function scrollListener() {
         window.addEventListener("scroll", handleScroll);
      } 
      scrollListener();
      return () => {
         window.removeEventListener("scroll", handleScroll);
      }; //  window 에서 스크롤을 감시를 종료
   });


   return(
      <S.Wrapper>
         <S.HeaderContainer  ScrollActive={ScrollActive}>
            <S.container>
               <Logo/>
               <S.RightItem>
               {/* 세션에 저장된 유저가 없으면  로그인 버튼을 보여줌*/}
               {isLoginComponent ? null : (
                  <>
                  <LoginButton/>
                  {isOpenoModal && <Login/>}
                  </>
               )}
               {/* 로그인 상공 시 새 글 작성, 프로필 텝 메뉴 노출 */}
               {
                  isLoginComponent &&
                  <>
                     <OnClickPosting />
                     <Profile />
                  </>
               }
               </S.RightItem>
            </S.container>
         <ToastContainer position="top-right" limit={1} autoClose={1500}/>
         </S.HeaderContainer>
         <Outlet/>
      </S.Wrapper>
   )
}

export default Header

const Wrapper = styled.div`
   
   `
const HeaderContainer = styled.div<{ScrollActive : boolean}>`
   position: ${({ScrollActive}) => (ScrollActive ? `fixed` : `relative`)};
   height: 4rem;
   z-index: 9999;
   top: 0;
   left: 0;
   width: 100%;
   box-shadow: rgb(0 0 0 / 8%) 0px 0px 15px;
   background-color: #fff;
`

const container = styled.div`
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 2rem;
`

const RightItem = styled.div`
   display: flex;
   align-items: center;
`

const S = {
   Wrapper,
   HeaderContainer,
   container,
   RightItem,
}