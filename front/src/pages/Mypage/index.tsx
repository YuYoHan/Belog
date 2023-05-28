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
   
`
const S = {
   Wrapper,
   container,
}