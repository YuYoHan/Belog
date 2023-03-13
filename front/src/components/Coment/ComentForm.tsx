import styled from "styled-components"

function ComentForm() {


   return (
      <S.Wrapper>
         <textarea placeholder="댓글을 작성하세요" ></textarea>
      </S.Wrapper>
   )
}

export default ComentForm

const Wrapper = styled.div`
   & textarea{
      font-family: inherit;
      padding: 1rem 1rem 1.5rem;
      outline: none;
      border: 2px solid #e1e1e1;
      border-radius: 16px;
      width: 100%;
      min-height: 100px;
      margin-bottom: 10px;
      resize: none;
   }
`





const S = {
   Wrapper,
  
}