import { Link } from "react-router-dom"
import styled from "styled-components"

function OnClickPosting() {
   
   
   return(
      <S.Wrapper>
         <Link to={`/Posting`} >
            <button >
               새 글 추가
            </button>
         </Link>
      </S.Wrapper>
   )
}

export default OnClickPosting

const Wrapper = styled.div`

   & button{
      height: 2rem;
      width: 7rem;
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: 1rem;
      border-radius: 1rem;
      outline: none;
      font-weight: bold;
      word-break: keep-all;
      background: #F8F9FA;
      border: 1px solid #212529;
      color: #212529;
      transition: all 0.125s ease-in 0s;
      cursor: pointer;
      margin-right: 1.25rem;
   }
`


const S = {
   Wrapper,
}