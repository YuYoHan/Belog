import { commentData } from 'pages/DetailPage/Detail'
import styled from 'styled-components';
import CommandContent from './command';
import Profile from './Profile'



function CommentList({data} : {data : commentData}) {

   console.log(data);
   const {id,username,profileimg,command } = data

  return (
    <Wrapper>
      <Profile user={username} imgurl={profileimg}/>
      <CommandContent command={command}/>
    </Wrapper>
  )
}

export default CommentList

const Wrapper = styled.div`
   padding-top: 1.5rem;
   padding-bottom: 1.5rem;
`