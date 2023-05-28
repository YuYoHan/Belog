import PopupPostCode from 'components/Header/LoginBtn/modal/PopupPostCode'
import { useState } from 'react'
import styled from 'styled-components'
import { userdataPrpos } from '../Index';



function UserAddrform({enroll_company,userAddrEtc,onChangeForm,setEnroll_company} : userdataPrpos) {


   //isKoKoApiModal - 카카오 api 모달 켜짐,꺼짐 여부
   const [isKoKoApiModal, setisKoKoApiModal] = useState(false);

   // 카카오 모달창 
   const onClickAddrUpdate = () =>{
      if(!isKoKoApiModal) return  setisKoKoApiModal(true)
      setisKoKoApiModal(false)
   }

   // 카카오 모달창 주소 입력 시 우편주소,상세주소 값 할당 함수
   const handleInput = (e:any) => {
      setEnroll_company({
         ...enroll_company,
         [e.target.name]:e.target.value,
      })
    }

return (
   <Wrapper>
      <AddrTitle >
         <Input type="text" placeholder="우편번호" autoComplete="off" onChange={handleInput} value={enroll_company.userAddr}  />
         <Input type="text" placeholder="주소"  onChange={handleInput} value={enroll_company.userAddrDetail} autoComplete="off"/>
         <Input type="text" name='userAddrEtc' placeholder="상세주소" value={userAddrEtc} onChange={onChangeForm} autoComplete="off"/>
      </AddrTitle>
      <EditWrapper>
         <Input type="button" onClick={onClickAddrUpdate} value="우편번호 찾기" />
      </EditWrapper>
      {
         isKoKoApiModal &&
         <PopupPostCode postCodeClass="OpenpostModal" onClose={onClickAddrUpdate} setcompany={setEnroll_company}/>
      }
    </Wrapper>
  )
}

export default UserAddrform
   
const Wrapper = styled.div`
   flex: 1 1 0%;
   display: flex;
   align-items: center;

   
`
const AddrTitle = styled.div`
   flex: 1 1 0%;
   font-size: 1rem;
   color: #495057;
   line-height: 1.5;
   
`

const EditWrapper = styled.div`
   display: flex;
   align-items: center;
   margin-left: 1rem;
   

   & button{
      outline: none;
      padding: 0px;
      border: none;
      display: inline;
      font-size: 1rem;
      line-height: 1.5;
      color: #757bf6;
      text-decoration: underline;
      background: none;
      cursor: pointer;
   }
`
const Input = styled.input`
   display: block;
   border: 1px solid #DEE2E6;
   background: #FFFFFF;
   padding: 0.5rem;
   color: #495057;
   font-size: 1rem;
   line-height: 1rem;
   outline: none;
   border-radius: 4px;
   width : 80%;
   flex: 1 1 0%;
   margin-bottom : 1rem
`