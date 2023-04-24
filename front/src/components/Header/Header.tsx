import React, { useEffect, useRef, useState } from "react"
import { Outlet } from "react-router-dom"
import styled from "styled-components"
import Logo from "./logo"
import OnClickPosting from "./Postingbtn"
import Profile from "./Profile"
import HeaderSearch from "./Search"

function Header() {
   
   const [ScrollY, setScrollY] = React.useState<number>(0); 
   const [ScrollActive, setScrollActive] = React.useState<boolean>(false);

 

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
                  <HeaderSearch/>
                  <OnClickPosting/>
                  <Profile/>
               </S.RightItem>
            </S.container>
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