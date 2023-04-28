// import CommentIndexPage from "components/Comment/CommentForm";
// import CommentList from "components/Comment/CommentList";
import { useQuery } from "@tanstack/react-query";
import Axios from "apis/@core";
import { PostDetailsApi } from "apis/posts/Detail";
import PostsApi from "apis/posts/PostsAPI";
import axios from "axios";
import { queryKey } from "consts/queryKey";
import { async } from "q";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
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

   const [Buttondisble, setButtondisble] = React.useState<boolean>(false)
   const location = useLocation();
   const {id, title, boardContents,tablist,img,boardNum} = location.state.data 
   // const {data : datailData, isLoading } = useQuery<any,boolean >([queryKey.GET_MAINPOSTS_LIST ,boardNum],()=> PostDtailsApi.getPostDtailsApi(boardNum));
   const [data , setData] = useState<DetailpageData>()


   useEffect(() => {
      const fetchData = async () => {
         try{
            const res = await PostsApi.getDetailPostsApi(boardNum)
            setData(res.data)
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
            <S.ButtonWrap>
            {data && <EditBtn data={data} />}
               <RemoveBtn boardNum={boardNum}/>
            </S.ButtonWrap>
         
         {/* <CommentIndexPage />
         <CommentList/> */}
         <S.Content>
         {data && (
            <div dangerouslySetInnerHTML={{ __html: data.boardContents }} />
         )}
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


const S = {
   Wrapper,
   Title,
   ButtonWrap,
   Content
}