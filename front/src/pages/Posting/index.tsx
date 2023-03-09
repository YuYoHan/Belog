import styled from "styled-components"
import PostingEdit from "./components/PostingEdit"
import PostingRegisterbtn from "pages/Posting/components/PostingRegisterbtn"
import PostingTag from "pages/Posting/components/PostingTag"
import PostingTitle from "pages/Posting/components/PostingTitle"

function PostingPage() {
   
   
   return(
      <S.Wrapper>
         <S.container>
            <PostingTitle/>
            <PostingTag/>
            <PostingEdit/>
         </S.container>
         <PostingRegisterbtn/>
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