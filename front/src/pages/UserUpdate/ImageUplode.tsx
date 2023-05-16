import React, { useRef, useState } from 'react'
import styled from 'styled-components';
import BtnUploading from './BtnUploading';


function ImageUplode() {
   const [fileUrl, setFileUrl] = useState<string>('');
  const fileUpload = useRef<HTMLInputElement>(null);


   const chgPreview = (e : any) => {
      //현재 이미지 파일
       const imageFile = e.target.files[0];
      //선택한 이미지 파일의 url
       const imageUrl = URL.createObjectURL(imageFile);
      //Image ele의 src를 해당 이미지 url로 변경시켜준다.
         setFileUrl(imageUrl)
     }
   
  return (
    <S.Wrapper>
      {
      !fileUrl ?
      <img src={require('assets/images/img/user_default_img.png')} alt="로딩중" />
      :
      <img src={fileUrl} />
      }
      <input type="file" accept="image/*" ref={fileUpload} onChange={chgPreview} id="imgFile"/>
      <BtnUploading/>
    </S.Wrapper>
  )
}

export default ImageUplode

const Wrapper = styled.div`
   display: flex;


`

const S = {
   Wrapper
}