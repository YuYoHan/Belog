import React, { ChangeEvent } from 'react'
import styled from 'styled-components'
import { userPswdataPrpos } from '../Index'
import UserPswform from './form'
import UserPswtitle from './title'



/**
 * @param {string} password - 서버에 저장된 비밀번호
 * @param {string} userPw - input의 입력된 비밀번호
 * @param {string} onChangeForm - useInputs 훅 
 */

function PswUserUpdate({password,userPw,onChangeForm} : userPswdataPrpos) {

   return (
      <S.PswWrapper>
      <S.PswWrap>
         <UserPswtitle/>
         <UserPswform userPw={userPw} password={password} onChangeForm={onChangeForm}/>
      </S.PswWrap>
         <p>개인 비밀번호를 수정하는 할 수 있습니다.</p>
      </S.PswWrapper>
   )
}

export default PswUserUpdate

const PswWrapper = styled.div`
   margin-top: 3rem;

   & p {
      margin-top: 0.875rem;
      color: #868E96;
      font-size: 0.875rem;
   }
`
const PswWrap = styled.div`
   display: flex;
   align-items: center;
`
const S = {
   PswWrapper,
   PswWrap,
}