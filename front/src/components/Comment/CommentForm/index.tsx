
import React from 'react'
import styled from 'styled-components'
import ComentForm from './ComentForm'
import ComentCountTitle from './ComentCountTitle'




function CommentIndexPage({boardNum,commentlength} : {boardNum : number , commentlength:number}) {


  return (
   <React.Fragment>
      <ComentCountTitle commentlength={commentlength}/>
      <ComentForm boardNum={boardNum}/>
   </React.Fragment>
     )
}

export default CommentIndexPage


