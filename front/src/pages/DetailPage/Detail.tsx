// import CommentIndexPage from "components/Comment/CommentForm";
// import CommentList from "components/Comment/CommentList";
import { useQuery } from "@tanstack/react-query";
import Axios from "apis/@core";
import PostsApi from "apis/posts/PostsAPI";
import axios from "axios";
import CommentIndexPage from "components/Comment/CommentForm";
import CommentList from "components/Comment/CommentList";
import { queryKey } from "consts/queryKey";
import { async } from "q";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components"
import EditBtn from "./EditBtn";
import RemoveBtn from "./RemoveBtn";

export interface DetailpageData {
   boardContents: string;
   writeTime: string;
   boardNum: number;
   boardTitle: string;
   hashTag?: string;
   boardImages?: string[];
   userId : null | number
   
}

export interface Detaildata {
   data : DetailpageData
}


function DetailPage() {

   const location = useLocation();
   const {boardNum} = location.state.data
   const [data , setData] = useState<DetailpageData>()
   const [tagList , setTagList] = useState<string[]>([])


   useEffect(() => {
      const fetchData = async () => {
         try{
            const res = await PostsApi.getDetailPostsApi(boardNum)
            setData(res.data)

            if(res && (res?.data?.hashTag?.length ?? 0) >= 1) {
               const fetchtagItem = res?.data?.hashTag?.split(',')
               fetchtagItem?.map((item : string) => {
                  setTagList((props) => [...props,item])
               })
            }

            setTagList((props) => [...props, ])
         }catch(err){
            console.log(err);
         }
      }
      fetchData()
   },[])

   


   return (
      <S.Wrapper> 
         <S.Title>
            {data?.boardTitle}
         </S.Title>
         <S.TagWrap>

            {
               tagList.length > 0 && 
               tagList.map((tagItem, index) => {
            return (
               <S.TagItem key={index}>
               <S.Text>{tagItem}</S.Text>
               </S.TagItem>
            )
            })}
         </S.TagWrap>
            <S.ButtonWrap>
            {data && <EditBtn data={data} />}
               <RemoveBtn boardNum={boardNum} img={data?.boardImages}/>
            </S.ButtonWrap>
         
         <S.Content>
         {data && (
            <div dangerouslySetInnerHTML={{ __html: data.boardContents }} />
         )}
            <CommentIndexPage boardNum={boardNum}/>
            <CommentList boardNum={boardNum}/>
         </S.Content>
      </S.Wrapper>
   )
}

export default DetailPage

const Wrapper = styled.div`
   max-width: 900px;
   width: 100%;
   display: flex;
   flex-direction: column;
   margin: 0 auto;
   padding: 1.5rem 1.5rem 5rem
`

const Title = styled.div`
   margin-top: 2.5rem;
   font-weight: 800;
   font-size: 3rem;
   line-height: 126.5%;
   letter-spacing: -.005em;
   color: #000;
`
const ButtonWrap = styled.div`
   display: flex;
   justify-content: flex-end;
   margin-top: 3rem;

`
const Content = styled.div`
   margin: 5rem 0;

   & img{
      display: block;
      margin: 3rem auto;
      max-width: 100%;
   }
`

const TagWrap = styled.div`
   color: #212529;
   font-size: 1.125rem;
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   margin-top: 1.5rem;
   margin-bottom: -0.875rem;
   min-height: 0.875rem;
`

const TagItem = styled.div`
   background-color: #757bf6;
   color: white;
   margin-bottom: 0.875rem;
   padding-left: 1rem;
   padding-right: 1rem;
   height: 2rem;
   border-radius: 1rem;
   display: inline-flex;
   align-items: center;
   margin-right: 0.875rem;
   text-decoration: none;
   font-weight: 500;
   font-size: 1rem;
`

const Text = styled.span``



const S = {
   Wrapper,
   Title,
   ButtonWrap,
   Content,
   TagWrap,
   TagItem,
   Text,
}