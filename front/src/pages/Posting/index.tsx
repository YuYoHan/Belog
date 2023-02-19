import styled from "styled-components"
import PostingEdit from "./PostingEdit"
import PostingTag from "./PostingTag"
import PostingTitle from "./PostingTitle"

function PostingPage() {
   
   
   return(
      <S.Wrapper>
         <S.container>
            <PostingTitle/>
            <PostingTag/>
            <PostingEdit/>
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