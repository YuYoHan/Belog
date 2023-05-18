import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import ReactS3Client from 'react-aws-s3-typescript';
import axios from "axios";
import ReactQuill from "react-quill";
import {  useEffect, useRef, useState } from "react";
import PostsApi from "apis/posts/PostsAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKey } from "consts/queryKey";
import { SessionRepository } from "repository/SessionRepository";



export type postingDataProps = {
   content : string,
   inputboardTitle : string,
   tagList : string[],
   // createObjectURL : string[],
   createObjectURL : string ,
   imgfile?: any
   QuillRef: React.MutableRefObject<ReactQuill | undefined>
   boardImg? : string[],
   boardNum:number
}

export type postingApiDataProps = {
   boardNum? : number,
   boardTitle : string,
   boardContents : string,
   hashTag : string,
   boardImages : string[],
}

interface HTMLImageElementWithSrc extends HTMLImageElement {
   src: string;
 }

 interface S3Config {
   bucketName: string;
   region: string;
   accessKeyId: string;
   secretAccessKey: string;
 }

function PostingRegisterbtn ({content,inputboardTitle,tagList,createObjectURL,imgfile,QuillRef,boardImg,boardNum} : postingDataProps) {

   
   const imagesAray = document.querySelectorAll("img") as NodeListOf<HTMLImageElementWithSrc>;
   const [boardImgURL, setBoardImgURL] = useState<string[]>([])
   const UserSessiondata = SessionRepository.getSession();
   const [isboardID ,setisBoardID] = useState<boolean>(false) 
   const navigate = useNavigate();

   const onClickbackhistory = () => {
      navigate(-1)
   }
   // aws key
   const config : S3Config = {
      bucketName: process.env.REACT_APP_S3_BUCKETNAME || '',
      region: process.env.REACT_APP_S3_REGION || '',
      accessKeyId: process.env.REACT_APP_S3_ACCESS_KET_ID || '',
      secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESSKEY || '',
   }

   //  aws s3 에디터 이미지 업로드
   useEffect(() => {
      const s3 = new ReactS3Client(config);
      const AddServerImg = async () => {
      const originURL = createObjectURL?.replace(/^(blob:http:\/\/localhost:3000\/)/, '');
      const data =  await s3.uploadFile(imgfile.file, `boardImage/${originURL}`);
      const copyBoardImgURL = [...boardImgURL];
      window.URL.revokeObjectURL(createObjectURL);
      copyBoardImgURL.push(data.location);
      setBoardImgURL(copyBoardImgURL);
      if(QuillRef?.current){
         const range = QuillRef?.current.getEditorSelection();
         const selectionRange = {
            index: (range?.index || 0) + 1,
            length: 0,
            // other properties as needed
         };
         QuillRef?.current.getEditor().insertEmbed(range?.index as number, 'image', data.location)
         QuillRef?.current.getEditor().setSelection(selectionRange);
         
      }
   } 
   AddServerImg()
 }, [imgfile]);

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
      
      if(!boardImg) return 
      
      const boardImgSrc = Array.from(imagesAray).map((img: HTMLImageElementWithSrc) => img.src);
      const newImgURLs = boardImgSrc.filter(src => boardImg?.includes(src));
      setBoardImgURL(newImgURLs)

   }, [imagesAray.length])

   const boardData = {
      "boardTitle" : inputboardTitle,
      "boardContents" : content,
      "hashTag" : tagList.join(),
      "boardImages" : boardImgURL,
   }
   
   const UpdateboardData = {
      "boardNum" : boardNum,
      "boardTitle" : inputboardTitle,
      "boardContents" : content,
      "hashTag" : tagList.join(),
      "boardImages" : boardImgURL,
   }

   

   //게시글 생성
   const queryClient = useQueryClient();
   const AddPostingmutation = useMutation(() => PostsApi.createPostsApi(boardData), {
      onSuccess: (res) => {
         console.log(res);
         alert('게시가 완료되었습니다.')
         queryClient.invalidateQueries([queryKey.GET_MAINPOSTS_LIST]);
         navigate('/')
      },
   })

   //게시글 수정
   const UpdatePostingmutation = useMutation(() => PostsApi.updatePostsApi(UpdateboardData), {
      onSuccess: (res) => {
         alert('수정이 완료되었습니다.')
         queryClient.invalidateQueries([queryKey.GET_MAINPOSTS_LIST]);
         navigate('/')
      },
   })

   return (
      <S.Wrapper>
            <S.CancleButton onClick={onClickbackhistory}>취소</S.CancleButton>
            {
               isboardID ? 
            <S.RegisterButton onClick={()=> UpdatePostingmutation.mutate()}>수정 완료</S.RegisterButton>
               :
            <S.RegisterButton onClick={()=> AddPostingmutation.mutate()}>글 등록</S.RegisterButton>
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