import { useEffect } from "react"
import styled from "styled-components"


function PostingTitle({inputboardTitle,setTinputboardTitle}: any) {
   
   
   

   return (
      <S.Wrapper>
         <S.container>
            <S.Title>
               
            <input type="text" value={inputboardTitle} onChange={setTinputboardTitle} placeholder='제목을 입력해주세요.'/>
            </S.Title>
         </S.container>
      </S.Wrapper>
   )
}

export default PostingTitle


const Wrapper = styled.div`

`
const container = styled.div`
   border-bottom: 3px solid #f2f2f2;
   margin-bottom: 0.75rem;

`

const Title = styled.div`

   & input{
      display: block;
      padding: 0px;
      font-size: 2.75rem;
      width: 100%;
      resize: none;
      line-height: 1.5;
      outline: none;
      border: none;
      font-weight: bold;
      color: #212529;
   }
`

const S = {
   Wrapper,
   container,
   Title,

}