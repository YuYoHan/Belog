import { media } from 'libs/styles/media'
import styled from 'styled-components'
import { userdataPrpos } from '../Index'
import UserAddrform from './form'
import UserAddrtitle from './title'

/**
 * @param {string} enroll_company - 우편번호,상세주소
 * @param {string} userAddrEtc - 참고주소
 * @param {string} onChangeForm - useinputs 폼데이터 변경해주는 함수
 * @param {string} setEnroll_company - setEnroll_company 폼데이터 변경해주는 함수
 */


function AddrUserUpdate({enroll_company,userAddrEtc,onChangeForm,setEnroll_company} : userdataPrpos ) {

   return (
   <S.AddrWrapper>
   <S.AddrWrap>
      <UserAddrtitle/>
      <UserAddrform 
      enroll_company={enroll_company}
      userAddrEtc={userAddrEtc} 
      onChangeForm={onChangeForm}
      setEnroll_company={setEnroll_company}
      />
   </S.AddrWrap>
      <p>개인 주소를 수정 할 수 있습니다.</p>
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
   ${media.mobildL} {
      display:block;
   }
`
const S = {
   AddrWrapper,
   AddrWrap,
}