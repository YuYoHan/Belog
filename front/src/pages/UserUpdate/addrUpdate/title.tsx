import React from 'react'
import styled from 'styled-components'

function UserAddrtitle() {
  return (
    <AddrTitle>
      <h2>주소</h2>
    </AddrTitle>
  )
}

export default UserAddrtitle

const AddrTitle = styled.div`
   width: 9.5rem;

   & h2{
      line-height: 1.5;
      color: #212529;
      margin: 0px;
      font-size: 1.125rem;
      font-weight : bold
   }
`
