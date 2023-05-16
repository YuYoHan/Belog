import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import UserEmailform from './form';
import UserEmailtitle from './title';

export type userdataPrpos = {
   email : string
   userEmail : string
   onChangeForm : (event: ChangeEvent<HTMLInputElement>) => void
}


function EmailUserUpdate({email,userEmail,onChangeForm} : userdataPrpos) {

   

  return (
   <S.EmailWrapper>
   <S.EmailWrap>
      <UserEmailtitle/>
      <UserEmailform userEmail={userEmail} eamil={email} onChangeForm={onChangeForm}/>
   </S.EmailWrap>
      <p>개인 이메일을 수정하는 할 수 있습니다.</p>
   </S.EmailWrapper>
  )
}

export default EmailUserUpdate

const EmailWrapper = styled.div`
   & p {
      margin-top: 0.875rem;
      color: #868E96;
      font-size: 0.875rem;
   }
`
const EmailWrap = styled.div`
   display: flex;
   align-items: center;
`
const S = {
   EmailWrapper,
   EmailWrap,
}