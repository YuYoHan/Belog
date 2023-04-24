import React, { useRef } from 'react'
import styled from 'styled-components'



type commentDataProps = {
   // 부모 컴포넌트에 import 해온 타입을 재사용
   user: string,
   imgurl: string
}

function Profile({user,imgurl} : commentDataProps ) {


  return (
    <S.Wrapper>
      <S.Innerwrap>
         <S.Profilewrap >
         <img src={imgurl} alt="사용자 이미지"/>
         <p>{user}</p>
         </S.Profilewrap>
      </S.Innerwrap>
    </S.Wrapper>
  )
}

export default Profile

const Wrapper = styled.div`
   
   
`
const Innerwrap = styled.div`
   margin-bottom: 1.5rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const Profilewrap = styled.div`
   display: flex;
   align-items: center;

   & img {
      width: 3.375rem;
      height: 3.375rem;
      display: block;
      border-radius: 50%;
      object-fit: cover;
      
   }

   & p {
      margin-left: 1rem;
      line-height: 1;
      font-size: 1rem;
      font-weight: bold;
      color: #212529;
   }
`

const S = {
   Wrapper,
   Innerwrap,
   Profilewrap,
}