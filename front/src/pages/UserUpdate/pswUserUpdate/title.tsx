import React from 'react'
import styled from 'styled-components'

function UserPswtitle() {
  return (
    <EmailTitle>
      <h2>비밀 번호</h2>
    </EmailTitle>
  )
}

export default UserPswtitle

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
