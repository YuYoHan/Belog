import styled from "styled-components"

function ComentCountTitle({commentlength} : {commentlength:number}) {


   return (
      <S.Wrapper>
         <S.TitleLength>
            {commentlength} 개의 댓글
         </S.TitleLength>
      </S.Wrapper>
   )
}

export default ComentCountTitle

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-top: 100px;
   margin-bottom: 20px;
   padding-left : 1rem;
`

const TitleLength = styled.h1`
   margin: 0 0 30px;
   font-size: 22px;
`



const S = {
   Wrapper,
   TitleLength,
  
}