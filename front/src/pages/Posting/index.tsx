import styled from "styled-components"
import PostingEdit from "./components/PostingEdit"
import PostingTag from "pages/Posting/components/PostingTag"
import PostingTitle from "pages/Posting/components/PostingTitle"
import useInput from "hooks/useInput"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { useLocation } from "react-router"

export type postingData = {
   inputboardTitle : string,
   tagList : string[],
   Detailcontent? : string,
   boardImg?: string[]
}

export type boardtitle = {
   boardTitle: string,
   setTitleValue :React.Dispatch<React.SetStateAction<string>>
}


function PostingPage() {
   
   const location = useLocation();
   const [inputboardTitle, setTinputboardTitle, reset] = useInput(location.state !== null ? location.state.data.boardTitle : "");
   const [tagList , setTagList] = useState<string[]>([])
   
   useEffect(() => {
      
      if(location.state !== null){
         const {hashTag} =  location.state.data
         
         const detailtagitem = hashTag.split(',')
         detailtagitem.map((item : string) => {
               setTagList((props) => [...props,item])
         })
      }
   },[location])

   

   return(
      <S.Wrapper>
         <S.container>
            <PostingTitle 
            inputboardTitle={inputboardTitle} 
            setTinputboardTitle={setTinputboardTitle}/>

            <PostingTag 
            tagList ={tagList} 
            setTagList={setTagList}/>
            
            <PostingEdit 
            inputboardTitle={inputboardTitle} 
            tagList={tagList}
            Detailcontent={ location.state?.data?.boardContents}
            boardImg={location.state?.data?.boardImages}
            
            />
         </S.container>
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