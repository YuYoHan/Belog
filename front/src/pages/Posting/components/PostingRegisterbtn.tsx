import { useNavigate } from "react-router-dom"
import styled from "styled-components"

function PostingRegisterbtn () {

   const history = useNavigate()

   const onClickbackhistory = () => {
      history(-1)
   }

   return (
      <S.Wrapper>
            <S.CancleButton onClick={onClickbackhistory}>취소</S.CancleButton>
            <S.RegisterButton>글 등록</S.RegisterButton>
      </S.Wrapper>
   )
}

export default PostingRegisterbtn

const Wrapper = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   margin-top: 1rem;

   & button{
      padding: 10px 30px;
      min-width: 120px;
      height: 40px;
      border-radius: 50px;
      font-weight: 700;
      font-size: 16px;
      cursor: pointer;
   }
`

const CancleButton = styled.button`
   background: #e9ecef;
   color: #272c32;
   margin-right: 1rem;

`

const RegisterButton =  styled.button`
   font-weight: 700;
   background-color: #757bf6;
   color: #fff;
`

const S = {
   Wrapper,
   CancleButton,
   RegisterButton,
}