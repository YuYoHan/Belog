
import React from 'react'
import styled from 'styled-components'
import ComentForm from './ComentForm'
import ComentCountTitle from './ComentCountTitle'




function CommentIndexPage({boardNum} : {boardNum : number}) {

   

  return (
   <React.Fragment>
      <ComentCountTitle/>
      <ComentForm boardNum={boardNum}/>
   </React.Fragment>
     )
}

export default CommentIndexPage


