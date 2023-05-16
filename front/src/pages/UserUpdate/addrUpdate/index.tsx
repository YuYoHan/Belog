import React, { ChangeEvent, SetStateAction } from 'react'
import styled from 'styled-components'
import UserAddrform from './form'
import UserAddrtitle from './title'

type userdataPrpos = {
   // userAddr : string
   // userAddrDetail : string
   enroll_company :{
      userAddr: string;
      userAddrDetail: string;
  }
   userAddrEtc : string
   onChangeForm : (event: ChangeEvent<HTMLInputElement>) => void
   setEnroll_company : React.Dispatch<React.SetStateAction<{
      userAddr: string;
      userAddrDetail: string;
  }>>
}


function AddrUserUpdate({enroll_company,userAddrEtc,onChangeForm,setEnroll_company} : userdataPrpos ) {

   

  return (
   <S.AddrWrapper>
   <S.AddrWrap>
      <UserAddrtitle/>
      <UserAddrform 
      // userAddr={userAddr} 
      // userAddrDetail={userAddrDetail}
      enroll_company={enroll_company}
      userAddrEtc={userAddrEtc} 
      onChangeForm={onChangeForm}
      setEnroll_company={setEnroll_company}
      />
   </S.AddrWrap>
      <p>개인 주소를 수정하는 할 수 있습니다.</p>
   </S.AddrWrapper>
  )
}

export default AddrUserUpdate

const AddrWrapper = styled.div`
   margin-top: 3rem;

   & p {
      margin-top: 0.875rem;
      color: #868E96;
      font-size: 0.875rem;
   }
`
const AddrWrap = styled.div`
   display: flex;
   align-items: center;
`
const S = {
   AddrWrapper,
   AddrWrap,
}