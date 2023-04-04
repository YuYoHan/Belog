import { Link } from "react-router-dom"
import styled from "styled-components"
import { ReactComponent as Logoimg } from "assets/images/svg/logo.svg"

function Logo() {
   
   return(
      <S.Wrapper>
         <Link to='/'>
            <Logoimg />
         </Link>
      </S.Wrapper>
   )
}

export default Logo

const Wrapper = styled.div`
   
   & a {
      display: block;
      width: 130px;
   }
   
`

const S = {
   Wrapper,
}