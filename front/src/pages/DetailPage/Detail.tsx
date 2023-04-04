import { useQuery } from "@tanstack/react-query";
import CommentApi from "apis/comment/CommentAPI";
import CommentIndexPage from "components/Comment/CommentForm";
import CommentList from "components/Comment/CommentList";
import { commentKey } from "consts/queryKey";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components"
import EditBtn from "./EditBtn";
import RemoveBtn from "./RemoveBtn";


export type commentData = {
   id : number,
   username : string,
   profileimg : string,
   command : string
}

export type querycommentData = {
   data : commentData[]
}

function DetailPage() {

   const [Buttondisble, setButtondisble] = React.useState<boolean>(false)
   const location = useLocation();
   const {id, title, content,tablist,img} = location.state.data 
   const {data : commentist} = useQuery<querycommentData>([commentKey.GET_COMMENT_LIST], CommentApi.getCommentApi);
   // const { command,id,profileimg,username} = {commentist.data}
   console.log(commentist?.data);
   


   useEffect(() => {

      if(location.pathname.indexOf('mypage') === 1){
         setButtondisble(true)
      }
   },[Buttondisble])



   return (
      <S.Wrapper> 
         <S.Title>
            {title}
         </S.Title>
         { Buttondisble &&
            <S.ButtonWrap>
               <EditBtn/>
               <RemoveBtn id={id}/>
            </S.ButtonWrap>

         }
         <S.Content>
            {content}
         </S.Content>
         
         <CommentIndexPage/>
         {
            commentist?.data.map((list,index) => 
               <CommentList data={list} key={index}/>
            )
         }
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
`


const S = {
   Wrapper,
   Title,
   ButtonWrap,
   Content
}