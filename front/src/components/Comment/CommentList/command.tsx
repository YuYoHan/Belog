import React from 'react'
import styled from 'styled-components'

type commentDataProps = {
   // 부모 컴포넌트에 import 해온 타입을 재사용
   command: string,
}


function CommandContent({command} : commentDataProps) {
  return (
    <Wrapper><p>{command}</p></Wrapper>
  )
}

export default CommandContent

const Wrapper = styled.div `
      font-size: 1.125rem;
      color: var(--text1);
      transition: color 0.125s ease-in 0s;
      line-height: 1.7;
      letter-spacing: -0.004em;
      word-break: keep-all;
      overflow-wrap: break-word;

      & p {
         margin: 1rem 0 ;
      }
`