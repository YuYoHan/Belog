import styled from "styled-components"

function ComentTitle() {


   return (
      <S.Wrapper>
         <S.TitleLength>
            0 개의 댓글
         </S.TitleLength>
      </S.Wrapper>
   )
}

export default ComentTitle

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-top: 100px;
`

const TitleLength = styled.h1`
   margin: 0 0 30px;
   font-size: 22px;
`



const S = {
   Wrapper,
   TitleLength,
  
}