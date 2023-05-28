import React from 'react';
import DaumPostcode from "react-daum-postcode";
import styled from 'styled-components';
 
const PopupPostCode = (props : any) => {
	// 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
   // 이 구성요소는 DaumPostcode API를 사용한 포스트코드 검색을 위한 팝업 모달입니다.
   const handlePostCode = (data : any) => {
      let fullAddress = data.address;
      let extraAddress = ''; 
      
      if (data.addressType === 'R') {
         if (data.bname !== '') {
            extraAddress += data.bname;
         }
         if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
         }
         fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
      }
      //수신된 데이터를 사용하여  userAddr 및 userAddrDetail 속성을 설정
      props.setcompany({
         ...props.company,
         userAddr:data.zonecode,
         userAddrDetail:fullAddress,
     })
      props.onClose()
   }
   
    return(
        <DaumPostcodeModal>
            <ApiOpenModal >
               <BtnWrap>
                  <button type='button' onClick={() => {props.onClose()}} >X</button>
               </BtnWrap>
               <DaumPostcode onComplete={handlePostCode} className={props.postCodeClass} />
            </ApiOpenModal>
        </DaumPostcodeModal>
    )
}
 
export default PopupPostCode;

const DaumPostcodeModal = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0,0,0,0.7);
   display: flex;
   justify-content: center;
   align-items: center;
`

const ApiOpenModal = styled.div`

   width: 50% !important;
   
   #__daum__layer_1{
      width: 100% !important;
      height: 100% !important;
   }
`

const BtnWrap = styled.div`
   padding: .5rem 1.7rem;
   text-align: right;
   background : #fff;
   
   & button{
      border: none;
      background: none;
      font-size : 1rem
   }
`