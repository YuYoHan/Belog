import styled from "styled-components";
import React,{useRef} from "react";

function SetImage() {
   /* const ImageUploadBtn = () => {
        const imageInput = useRef<HTMLInputElement>(null);
        const hadleBtnClick = () => {
           
            }
        
    }
    <input type = "file" ref = {fileInput} style = {{display : "none"}}/>
*/
    return(
    <S.Wrapper>
        <S.container>
            <img src = ""/>
            <S.UpImageBtn >이미지 업로드</S.UpImageBtn>
            
            <S.DeleteImgBtn>이미지 제거</S.DeleteImgBtn>
        </S.container>
    </S.Wrapper>
    )
    }

export default SetImage;

const Wrapper = styled.div`
margin: 0;
padding: 0;
flex: 1;
display: flex;
`
const container = styled.div`
                display: flex;
                flex: 1;
                width: 100%;
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
`
const UpImageBtn = styled.button`
   background: #12b886;
   color: #ffffff;
   padding: 20px;
`
const DeleteImgBtn = styled.button`

   color: #12b886;
   padding: 20px;

`

const S = {
    Wrapper,
    container,
    UpImageBtn,
    DeleteImgBtn,
}