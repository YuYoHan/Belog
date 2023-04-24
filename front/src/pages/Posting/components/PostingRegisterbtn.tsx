import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { postingData } from ".."
import ReactS3Client from 'react-aws-s3-typescript';
import { CopyObjectCommand, S3 } from "@aws-sdk/client-s3";
import axios from "axios";
import { S3Client } from "@aws-sdk/client-s3";
import ReactQuill from "react-quill";
import { useCallback, useEffect, useState } from "react";
import { Number } from "aws-sdk/clients/iot";

type postingDataProps = {
   content : string,
   boardTitle : string,
   tagList : string[],
   createObjectURL : string[],
   imgfile: any
   QuillRef: React.MutableRefObject<ReactQuill | undefined>
}

interface HTMLImageElementWithSrc extends HTMLImageElement {
   src: string;
 }

// type configdata= {
//    bucketName : string
//    region : string
//    accessKeyId : string
//    secretAccessKey :string 
// }

function PostingRegisterbtn ({content,boardTitle,tagList,createObjectURL,imgfile,QuillRef} : postingDataProps) {

   
   const images = document.querySelectorAll(".boardImage") as NodeListOf<HTMLImageElementWithSrc>;
   const [boardImgURL, setBoardImgURL] = useState<string[]>()
   const history = useNavigate()
   const onClickbackhistory = () => {
      history(-1)
   }
   
   const config : any = {
      bucketName : process.env.REACT_APP_S3_BUCKETNAME,
      region : process.env.REACT_APP_S3_REGION,
      accessKeyId : process.env.REACT_APP_ACCESS_KET_ID,
      secretAccessKey : process.env.REACT_APP_SECRET_ACCESSKEY,
   }
   

   // useEffect로 content바뀐 내용을 axios로 호출해야함
   // 
   let ServerBoardURL: string[] = [];
   useEffect(() => {
      const s3 = new ReactS3Client(config);
      
      if(imgfile && imgfile.length > 0) {

         Promise.all(imgfile.map(async (s3File: any, i: any) => {
         const originURL = createObjectURL[i].replace(/^(blob:http:\/\/localhost:3000\/)/, '');
         const data = await s3.uploadFile(s3File.file, `boardImage/${originURL}`);
         ServerBoardURL[i] = data.location;
         setBoardImgURL( ServerBoardURL)
         images?.forEach((img : HTMLImageElementWithSrc, i : Number) => {
            img.src = ServerBoardURL[i]
         })
         }));
      }
   },[imgfile])   


   const addPostingContent = () => {
      
      const boardData = {
         "boardTitle" : boardTitle,
         "boardContents" : content,
         "hashTag" : tagList.join(),
         "boardImages" : boardImgURL
      }
      console.log(boardData);
      
      const test = {
         "boardTitle" : "title1",
         "boardContents" : "test",
         "hashTag" : "test",
         "boardImages" : ["url1", "url2"]
     }
     
  
      
      // axios.post('http://3.39.232.117:8080//v1/board',test)
      //    .then(function (res) {
      //       console.log(res);
      //    })
      //     .catch(function (error) {
      //       console.log(error);
      //    });


      //    axios.get(`http://3.39.232.117:8080//v1/board/${1}`)
      //    .then(function (res) {
      //       console.log(res);
      //    })
      //     .catch(function (error) {
      //       console.log(error);
      //    });
   }

      
   return (
      <S.Wrapper>
            <S.CancleButton onClick={onClickbackhistory}>취소</S.CancleButton>
            <S.RegisterButton onClick={addPostingContent}>글 등록</S.RegisterButton>
      </S.Wrapper>
   )
}

export default PostingRegisterbtn

const Wrapper = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   margin-top: 1rem;

   & button{
      padding: 10px 30px;
      min-width: 120px;
      height: 40px;
      border-radius: 50px;
      font-weight: 700;
      font-size: 16px;
      cursor: pointer;
   }
`

const CancleButton = styled.button`
   background: #e9ecef;
   color: #272c32;
   margin-right: 1rem;

`

const RegisterButton =  styled.button`
   font-weight: 700;
   background-color: #757bf6;
   color: #fff;
`

const S = {
   Wrapper,
   CancleButton,
   RegisterButton,
}