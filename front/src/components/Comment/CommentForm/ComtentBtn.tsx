import styled from "styled-components"

function ComentBtn() {


   return (
      <S.Wrapper>
         <button>
            댓글 등록
         </button>
      </S.Wrapper>
   )
}

export default ComentBtn

const Wrapper = styled.div`
      display: flex;
      justify-content: flex-end;
      margin: 16px 0 24px;
   & button{
      padding: 10px 30px;
      min-width: 120px;
      height: 40px;
      background-color: #757bf6;
      border-radius: 50px;
      font-weight: 700;
      color: #fff;
      font-size: 16px;
   }
`




const S = {
   Wrapper,
}