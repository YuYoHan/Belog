import React from 'react'
import styled from 'styled-components'

function Title() {

   return (
      <TitleWrap>
         <h2>
            내 정보 수정
         </h2>
      </TitleWrap>
   )
}

export default Title

const TitleWrap = styled.div`
   padding-right: 1rem;
   margin-top: 3rem;
   margin-left: auto;
   margin-right: auto;
   width: 800px;
   padding-bottom: 5rem;

   & h2{
      display: block;
      font-size: 2.5em;
      font-weight: bold;
   }
`