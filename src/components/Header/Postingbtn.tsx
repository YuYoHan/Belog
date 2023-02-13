import { Link } from "react-router-dom"
import styled from "styled-components"

function OnClickPosting() {
   
   
   return(
      <S.Wrapper>
         <Link to={`/Posting`}>
            새 글 추가
         </Link>
      </S.Wrapper>
   )
}

export default OnClickPosting

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   background: transparent;
   border: none;
   width: 2.5rem;
   height: 2.5rem;
   outline: none;
   border-radius: 50%;
   color: #212529;
   cursor: pointer;
   margin-right: 0.5rem;
`
const container = styled.div`
   
`
const S = {
   Wrapper,
   container,
}