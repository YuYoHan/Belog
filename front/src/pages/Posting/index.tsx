import styled from "styled-components"
import PostingEdit from "./components/PostingEdit"
import PostingTag from "pages/Posting/components/PostingTag"
import PostingTitle from "pages/Posting/components/PostingTitle"
import useInput from "hooks/useInput"
import {  useEffect, useState } from "react"
import { useLocation } from "react-router"
import { ToastContainer } from "react-toastify"

export type postingData = {
   inputboardTitle : string,
   tagList : string[],
   Detailcontent? : string,
   boardImg?: string[],
   boardNum: number
   
}


export type boardtitle = {
   boardTitle: string,
   setTitleValue :React.Dispatch<React.SetStateAction<string>>
}

function PostingPage() {
   
   const location = useLocation();
   const [inputboardTitle, setTinputboardTitle, reset] = useInput(location.state !== null ? location.state.data.boardTitle : "");
   const [tagList , setTagList] = useState<string[]>([])
   
   /* 상세페이지 location 전달받은 데이터 tagList
      수정하기 컴포넌트 데이터 
   */
   useEffect(() => {
      if(location.state !== null){
         const {hashTag} =  location.state.data
         if(hashTag.length >= 1){
            const detailtagitem = hashTag.split(',')
            detailtagitem.map((item : string) => {
               setTagList((props) => [...props,item])
            })
         }
      }
   },[location])

   return(
      <S.Wrapper>
         <S.container>
            <PostingTitle 
            inputboardTitle={inputboardTitle} 
            setTinputboardTitle={setTinputboardTitle}
            />
            <PostingTag 
            tagList ={tagList} 
            setTagList={setTagList}
            />
            <PostingEdit 
            inputboardTitle={inputboardTitle} 
            tagList={tagList}
            Detailcontent={ location.state?.data?.boardContents}
            boardImg={location.state?.data?.boardImages}
            boardNum={location.state?.data?.boardNum}
            />
         </S.container>
         <ToastContainer position="top-right" autoClose={1500}/>
      </S.Wrapper>
      
   )
}

export default PostingPage

const Wrapper = styled.div`
   min-height: 100%;
   padding: 1.5rem;
   
`
const container = styled.div`
   padding: 1.5rem;
   height: 100%;
`
const S = {
   Wrapper,
   container,
}