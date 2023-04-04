import React from 'react'
import styled from 'styled-components'
import { string } from 'yup'
import ComentForm from './ComentForm'
import ComentTitle from './ComentTitle'

function CommentIndexPage() {

   const ContentValue = (value : string)  => {
      return console.log('값' , value);
      
   }
   const onaddvalue = (e: React.MouseEvent) => {
      console.log(ContentValue);
      
   }

  return (
   <React.Fragment>
      <ComentTitle/>
      <ComentForm ContentValue={ContentValue}/>
      <ButtonWrap>
         <button onClick={onaddvalue}>
            댓글 등록
         </button>
      </ButtonWrap>
   </React.Fragment>
     )
}

export default CommentIndexPage


const ButtonWrap = styled.div`
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
