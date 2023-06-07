import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import ReactS3Client from 'react-aws-s3-typescript';
import axios, { AxiosError } from "axios";
import ReactQuill from "react-quill";
import {  useEffect, useRef, useState } from "react";
import PostsApi from "apis/posts/PostsAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKey } from "consts/queryKey";
import { SessionRepository } from "repository/SessionRepository";
import { toast } from "react-toastify";

// 부모(index) 컴포넌트에서 전달받은 props
export type postingDataProps = {
   content : string,
   inputboardTitle : string,
   tagList : string[],
   createObjectURL : string ,
   imgfile?: any
   QuillRef: React.MutableRefObject<ReactQuill | undefined>
   boardImg? : string[],
   boardNum:number
}

// 생성, 수정 api 데이터 유형 타입
export type postingApiDataProps = {
   boardNum? : number,
   boardTitle : string,
   boardContents : string,
   hashTag : string,
   boardImages : string[],
   userId : number,

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


/**
 * @param {string} content - 에디터에 작성된 텍스트.
 * @param {string} inputboardTitle - 제목에 입력되는 타이틀
 * @param {string} tagList - 태그에 입력된 값의 배열
 * @param {string} createObjectURL - 미리보기를 위한 임시 이미지 URL
 * @param {object} imgfile - 이미지의 객체
 * @param {object} QuillRef - react-quill DOM
 * @param {Array} boardImg - 수정하기 게시물 이미지
 * @param {number} boardNum - 수정하기 게시물ID
 */

function PostingRegisterbtn ({content,inputboardTitle,tagList,createObjectURL,imgfile,QuillRef,boardImg,boardNum} : postingDataProps) {

/**
   imagesAray - 에디터에 올라 간 이미지의 객체.
   boardImgURL - 에디터 이미지 저장 
   UserSessiondata - 세션 저장된 value
   isboardID - EdtiBtn 컴포넌트 전달 해준 상세 게시글 있으면 수정하기 버튼 보여주는 state   
*/
   const imagesAray = document.querySelectorAll("img") as NodeListOf<HTMLImageElementWithSrc>;
   const [boardImgURL, setBoardImgURL] = useState<string[]>([])
   const UserSessiondata = SessionRepository.getSession();
   const userId = UserSessiondata.userid
   const [isboardID ,setisBoardID] = useState<boolean>(false) 
   const navigate = useNavigate();
   
   // 취소 버튼 전 페이지로 이동
   const onClickbackhistory = () => {
      navigate(-1)
   }
   // 
   useEffect(() => {
      if(boardNum){
         setisBoardID(true)
      }else{
         setisBoardID(false)
      }
   },[])

   // aws key
   const config : S3Config = {
      bucketName: 'web-blog-site' || '',
      region: 'ap-northeast-2' || '',
      accessKeyId: process.env.REACT_APP_S3_ACCESS_KET_ID || '',
      secretAccessKey: process.env.REACT_APP_S3_SECRET_ACCESSKEY || '',
   }
   

   /*
      aws s3 에디터 이미지 업로드
      사용자가 이미지 업로드 시 AWS제공해주는 임시 URL 필요한 src replace 후
      aws 버킷 boardimage에 저장
      서버에 저장 시킬 aws 이미지 setBoardImgURL state에 저장 
   */ 
   useEffect(() => {
      const s3 = new ReactS3Client(config);
      
      const AddServerImg = async () => {
      //임시 URL aws에 원하는 저장소에 저장하기 위한 replace
      const originURL = createObjectURL?.replace(/^(blob:http:\/\/localhost:3000\/)/, '');
      /*
         파일객체와 url 보냄으로써 aws 파일저장
         임시 url 생성 후 메모리에서 제거 하기위함 window.URL.revokeObjectURL(createObjectURL); 
      */
      const data =  await s3.uploadFile(imgfile.file, `boardImage/${originURL}`);
      const copyBoardImgURL = [...boardImgURL];
      window.URL.revokeObjectURL(createObjectURL);
      copyBoardImgURL.push(data.location);
      setBoardImgURL(copyBoardImgURL);
      // 이미지 에디터에 업로드 이 후 커서 끝으로
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
   },[boardImg])
   
   // 사용자가 에디터의 이미지를 새로운  newImgURLs 배열값 반환해준다
      useEffect(() => {
         
         const boardImgSrc = Array.from(imagesAray).map((img: HTMLImageElementWithSrc) => img.src);
         setBoardImgURL(boardImgSrc)
         // const newImgURLs = boardImgSrc.filter(src => boardImg?.includes(src));

      }, [imagesAray.length])
   
   // 게시판 생성 데이터
   const boardData = {
      "boardTitle" : inputboardTitle,
      "boardContents" : content,
      "hashTag" : tagList.join(),
      "boardImages" : boardImgURL,
      "userId":userId
   }
   
   // 게시판 수정 데이터 
   const UpdateboardData = {
      "boardNum" : boardNum,
      "boardTitle" : inputboardTitle,
      "boardContents" : content,
      "hashTag" : tagList.join(),
      "boardImages" : boardImgURL,
      "userId":userId
   }
   

   /*게시글 생성 버튼 클릭 시  toast에러 메세지 노출 후 queryKey.GET_MAINPOSTS_LIST 맵핑된 함수 실행 ,메인 페이지 이동*/
   const queryClient = useQueryClient();
   const AddPostingmutation = useMutation(() => PostsApi.createPostsApi(boardData), {
      onSuccess: (res) => {
         toast.success('게시글 등록되었습니다.')
         queryClient.invalidateQueries([queryKey.GET_MAINPOSTS_LIST]);
         navigate('/')
      },
      onError : (err : AxiosError) => {
         toast.error('게시글 등록되지 않았습니다.')
      }
   })

   /*게시글 수정 버튼 클릭 시   queryKey.GET_MAINPOSTS_LIST 맵핑된 함수 실행 메인 페이지로 이동*/
   const UpdatePostingmutation = useMutation(() => PostsApi.updatePostsApi(UpdateboardData), {
      onSuccess: (res) => {
         queryClient.invalidateQueries([queryKey.GET_MAINPOSTS_LIST]);
         navigate(`/`)
      },
   })

   // 게시글 컨텐츠 제목 입력 안할시 게시글 등록안됨
   const handlePostRegistration =  () => {
      if (!inputboardTitle || !content) {
         toast.error('제목, 내용 입력해주세요')
         return;
      }

      // 수정하기 / 게시글 등록 페이지 
      if (isboardID) {
         UpdatePostingmutation.mutate();
      } else {
         AddPostingmutation.mutate();
      }
   };

   return (
      <S.Wrapper>
            <S.CancleButton onClick={onClickbackhistory}>취소</S.CancleButton>
            {
               isboardID ? 
            <S.RegisterButton onClick={handlePostRegistration}>수정 완료</S.RegisterButton>
            :
            <S.RegisterButton onClick={handlePostRegistration}>글 등록</S.RegisterButton>
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