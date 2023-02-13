import { Outlet } from "react-router-dom"
import styled from "styled-components"
import OnClickPosting from "./Postingbtn"

function Header() {
   
   
   return(
      <S.Wrapper>
         <S.container>
            asdasd
            <OnClickPosting/>
            <Outlet/>
         </S.container>
      </S.Wrapper>
   )
}

export default Header

const Wrapper = styled.div`
   
   
`
const container = styled.div`
   
`
const S = {
   Wrapper,
   container,
}