import { media } from "libs/styles/media"
import styled from "styled-components"
import Tabheader from "./components/tabheader/Tabheaders"


function MyPage() {
   
   
   
   return(
      <S.Wrapper>
         <S.container>
            <Tabheader/>
         </S.container>
      </S.Wrapper>
   )
}

export default MyPage

const Wrapper = styled.div`
   
   
`
const container = styled.div`
   margin-left: auto;
   margin-right: auto;
   width: 1728px;
   
   ${media.desktopL}{
      width: 1376px;
   }
   ${media.desktopM}{
      width: 1024px;
   }
`
const S = {
   Wrapper,
   container,
}