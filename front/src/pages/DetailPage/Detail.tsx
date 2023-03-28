import ComentForm from "components/Coment/ComentForm";
import ComentTitle from "components/Coment/ComentTitle";
import ComentBtn from "components/Coment/ComtentBtn";
import { MypageData } from "pages/Mypage/components/Myposting/MypageList"
import { useLocation } from "react-router-dom";
import styled from "styled-components"
import EditBtn from "./EditBtn";
import RemoveBtn from "./RemoveBtn";



function DetailPage() {



   const location = useLocation();
   const {id, title, content,tablist,img} = location.state.data 
   
   
   
   

   return (
      <S.Wrapper> 
         <S.Title>
            {title}
         </S.Title>
         <S.ButtonWrap>
            <EditBtn/>
            <RemoveBtn id={id}/>
         </S.ButtonWrap>
         <S.Content>
            {content}
         </S.Content>
         <ComentTitle/>
         <ComentForm/>
         <ComentBtn/>
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