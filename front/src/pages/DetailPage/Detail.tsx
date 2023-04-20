// import CommentIndexPage from "components/Comment/CommentForm";
// import CommentList from "components/Comment/CommentList";
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components"
import EditBtn from "./EditBtn";
import RemoveBtn from "./RemoveBtn";




function DetailPage() {

   const [Buttondisble, setButtondisble] = React.useState<boolean>(false)
   const location = useLocation();
   const {id, title, boardContents,tablist,img} = location.state.data 
   console.log(boardContents );
   
   useEffect(() => {

      if(location.pathname.indexOf('mypage') === 1){
         setButtondisble(true)
      }
   },[Buttondisble])



   return (
      <S.Wrapper> 
         {/* <S.Title>
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
         
         <CommentIndexPage />
         <CommentList/> */}
         <S.Content>
            <div dangerouslySetInnerHTML={{ __html :  boardContents  }}  />
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