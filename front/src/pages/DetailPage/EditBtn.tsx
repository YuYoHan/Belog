import { useState } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components"
import { DetailpageData } from "."

function EditBtn({data} : {data : DetailpageData} ) {
  
   // 상세페이지에서 받은 boolean값을 게시글 만들기 컴포넌트의 전달
   // 전달받은 boolean 값으로 수정하기 등록하기 구분
   return (
      <Link to={`/Posting/${data.boardNum}`} state={{data}}> 
         <Button >
            수정
         </Button>
      </Link>
   )
}

export default EditBtn

const Button = styled.div`
   padding: 12px 20px;
   min-width: 60px;
   height: 40px;
   border-radius: 50px;
   font-weight: 700;
   font-size: 14px;
   background: #e9ecef;
   color: #272c32;
   margin-right: 1rem;
   cursor: pointer;
   & a{
      display:block;
      width: 100%;
   }

`
