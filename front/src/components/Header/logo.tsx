import { Link } from "react-router-dom"
import styled from "styled-components"
import BlogLogo from "assets/images/svg/Logosvg"

function Logo() {
   
   
   return(
      <S.Wrapper>
         <Link to='/'>
            <BlogLogo/>
         </Link>
      </S.Wrapper>
   )
}

export default Logo

const Wrapper = styled.div`
   
   & a {
      display: block;
      width : 250px;
      height: auto;
      & svg {
         border-radius: 10px;
      }
   }
   
`

const S = {
   Wrapper,
}