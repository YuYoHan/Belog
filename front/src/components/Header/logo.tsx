import { Link } from "react-router-dom"
import styled from "styled-components"

function Logo() {
   
   
   return(
      <S.Wrapper>
         <Link to='/'>
            로고
         </Link>
      </S.Wrapper>
   )
}

export default Logo

const Wrapper = styled.div`
   
   
`
const container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: bold;
   font-size: 1.3125rem;
   text-decoration: none;
`
const S = {
   Wrapper,
   container,
}