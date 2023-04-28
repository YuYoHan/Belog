import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import ReactS3Client from 'react-aws-s3-typescript';
import axios from "axios";
import ReactQuill from "react-quill";
import {  useEffect, useState } from "react";
import { Number } from "aws-sdk/clients/iot";


type postingDataProps = {
   content : string,
   inputboardTitle : string,
   tagList : string[],
   createObjectURL : string[],
   imgfile: any
   QuillRef: React.MutableRefObject<ReactQuill | undefined>
   boardImg? : string[]
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

function PostingRegisterbtn ({content,inputboardTitle,tagList,createObjectURL,imgfile,QuillRef,boardImg} : postingDataProps) {

   
   const images = document.querySelectorAll(".boardImage") as NodeListOf<HTMLImageElementWithSrc>;
   const imagesAray = document.querySelectorAll("img") as NodeListOf<HTMLImageElementWithSrc>;
   const [boardImgURL, setBoardImgURL] = useState<string[]>([])
   const [isboardID ,setisBoardID] = useState<boolean>(false) 
   const history = useNavigate()
   
   const onClickbackhistory = () => {
      history(-1)
   }
   
   const config : any = {
      bucketName: process.env.REACT_APP_S3_BUCKETNAME,
      region: process.env.REACT_APP_S3_REGION,
      accessKeyId: process.env.REACT_APP_S3_ACCESS_KET_ID,
      secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESSKEY,
   }
   
   // useEffect로 content바뀐 내용을 axios로 호출해야함
   let ServerBoardURL: string[] = [];
   useEffect(() => {
      const s3 = new ReactS3Client(config);
      

      if(imgfile && imgfile.length > 0) {
         
         Promise.all(imgfile.map(async (s3File: any, i: any) => {
         const originURL = createObjectURL[i].replace(/^(blob:http:\/\/localhost:3000\/)/, '');
         const data = await s3.uploadFile(s3File.file, `boardImage/${originURL}`);
         ServerBoardURL[i] = data.location;
         const copyBoardImgURL = [...boardImgURL];
         copyBoardImgURL.push(ServerBoardURL[i]);
         setBoardImgURL( copyBoardImgURL)
         images?.forEach((img : HTMLImageElementWithSrc, i : Number) => {
            img.src = ServerBoardURL[i]
         })
         }));
      }
   },[imgfile])

   // 수정하기 페이지 
   useEffect(() => {
      if(boardImg) {
         const copyBoardImgURL = [...boardImgURL];
         boardImg?.map((item) => {
            copyBoardImgURL.push(item)
            setBoardImgURL(copyBoardImgURL)
         })
      }
      return 
   },[])
   
   // 사용자 에디터에 이미시 삭제시 
   useEffect(() => {
      // if(boardImg?.length === boardImgURL.length) return
      const boardImgSrc = Array.from(imagesAray).map((img: HTMLImageElementWithSrc) => img.src);
      const newImgURLs = boardImgSrc.filter(src => boardImg?.includes(src));
      setBoardImgURL(newImgURLs)
   }, [imagesAray.length])

   const boardData = {
      "boardTitle" : inputboardTitle,
      "boardContents" : content,
      "hashTag" : tagList.join(),
      "boardImages" : boardImgURL
   }

   const onAddPosting = () => {

      if(inputboardTitle === ''){
         return alert('제목을 입력 해주세요')
      }else if(content === ''){
         return alert('내용을 입력 해주세요')
      }

      axios.post('http://3.37.89.59:8080/v1/board', boardData)
         .then(function (res) {
            alert('게시가 완료되었습니다.')
            return history(-1)
         })
          .catch(function (error) {
            console.log(error);
         });
   }

   const onUpdatePosting = async () => {
      
      console.log(boardData);
      axios.put('http://3.37.89.59:8080/v1/board', boardData)
         .then(function (res) {
            alert('게시가 완료되었습니다.')
            return history(-1)
         })
          .catch(function (error) {
            console.log(error);
         });
      // try{
      //    const res = await PostsApi.updatePostsApi(boardData)
      //    console.log(res);
         
      // }catch(err) {
      //    console.log(err);
         
      // }
      
   }

   return (
      <S.Wrapper>
            <S.CancleButton onClick={onClickbackhistory}>취소</S.CancleButton>
            {
               isboardID ? 
            <S.RegisterButton onClick={onUpdatePosting}>수정 완료</S.RegisterButton>
               :
            <S.RegisterButton onClick={onAddPosting}>글 등록</S.RegisterButton>
            }
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