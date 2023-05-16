import React from 'react'
import styled from 'styled-components'

function UserEmailtitle() {
  return (
    <EmailTitle>
      <h2>이메일</h2>
    </EmailTitle>
  )
}

export default UserEmailtitle

const EmailTitle = styled.div`
   width: 9.5rem;

   & h2{
      line-height: 1.5;
      color: #212529;
      margin: 0px;
      font-size: 1.125rem;
      font-weight : bold
   }
`
