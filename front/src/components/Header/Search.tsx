import styled from "styled-components"
import { BiSearch } from "react-icons/bi";

function HeaderSearch() {
   
   
   return(
      <S.Wrapper>
         <BiSearch/>
      </S.Wrapper>
   )
}

export default HeaderSearch

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
      cursor: pointer;
      margin-right: 0.5rem;

      & svg{
         font-size: 1.125rem;
   }
`


const S = {
   Wrapper,
}