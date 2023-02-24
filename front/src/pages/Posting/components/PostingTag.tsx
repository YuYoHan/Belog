import styled from "styled-components"

function PostingTag() {
   
   
   return(
      <S.Wrapper>
         <input placeholder="태그를 입력하세요" />
      </S.Wrapper>
   )
}

export default PostingTag

const Wrapper = styled.div`
   color: #212529;
   font-size: 1.125rem;
   display: flex;
   flex-wrap: wrap;
   margin-bottom: 0.75rem;

   & input{
      background: transparent;
      display: inline-flex;
      outline: none;
      cursor: text;
      font-size: 1.125rem;
      line-height: 2rem;
      margin-bottom: 0.75rem;
      min-width: 8rem;
      border: none;
      color: #212529;
   }
`

const S = {
   Wrapper,
}