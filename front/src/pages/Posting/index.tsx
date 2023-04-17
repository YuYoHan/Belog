import styled from "styled-components"
import PostingEdit from "./components/PostingEdit"
import PostingTag from "pages/Posting/components/PostingTag"
import PostingTitle from "pages/Posting/components/PostingTitle"
import useInput from "hooks/useInput"
import { useState } from "react"

export type postingData = {
   boardTitle : string,
   tagList : string[]
}

function PostingPage() {
   
   const [boardTitle, setTboardTitle] = useInput('');
   const [tagList , setTagList] = useState<string[]>([])
   

   return(
      <S.Wrapper>
         <S.container>
            <PostingTitle setTboardTitle={setTboardTitle}/>
            <PostingTag tagList ={tagList} setTagList={setTagList}/>
            <PostingEdit boardTitle={boardTitle} tagList={tagList}/>
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