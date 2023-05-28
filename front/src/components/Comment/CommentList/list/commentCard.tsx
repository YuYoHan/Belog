import { useMutation, useQueryClient } from '@tanstack/react-query'
import CommentApi from 'apis/comment/CommentAPI'
import CommentUpdateBtn from 'components/Comment/CommentList/list/UpdateBtn'
import { commentKey } from 'consts/queryKey'
import useEditable from 'hooks/editable'
import { useState } from 'react'
import styled from 'styled-components'
import {  commentData } from '../..'

function CommentCard( {data} : commentData) {

  const [UpdatehiddenBtn,setUpdatehiddenBtn] = useState<boolean>(false)
  const EditableBtn =  useEditable(data.userId)
  
  console.log(data);
  
  const onClickhiddenBtn = () => {
    setUpdatehiddenBtn(true)
  }
  
  const queryClient = useQueryClient();
  const CommentDeletemutation = useMutation(() => CommentApi.deleteCommentApi(), {
    onSuccess: (res) => {
      if (!window.confirm('삭제 하시겠습니까')) return;
      queryClient.invalidateQueries([commentKey.GET_COMMENT_LIST])
    },
  })
  
  return (
    <Wrap>
      <CommentListHeader>
        <UserEmail>
          <p> {data.userEmail} </p>
        </UserEmail>
        {!UpdatehiddenBtn && EditableBtn && (
          <ChangeBtn>
            <span onClick={onClickhiddenBtn}>수정</span>
            <span onClick={() => CommentDeletemutation}>삭제</span>
          </ChangeBtn>
        )}
      </CommentListHeader>
      <Commentcontent>
        {!UpdatehiddenBtn && data.comment}
      </Commentcontent>
      {UpdatehiddenBtn && <CommentUpdateBtn comment={data.comment} setUpdatehiddenBtn={setUpdatehiddenBtn}/>}

    </Wrap>
  )
}

export default CommentCard

const Wrap = styled.div`
  border-top: 1px solid #d8d7d7;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`

const CommentListHeader = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const UserEmail = styled.div`
  & p {
    font-size: 1.2rem;
    font-weight: bold;
    color: #212529;
  }
`
const ChangeBtn = styled.div`
  font-size: 0.875rem;
  color: #868E96;
  cursor:pointer;
  & span{
    margin-right : 1rem
  }
`
const Commentcontent = styled.div`
  font-size: 1.125rem;
  transition: color 0.125s ease-in 0s;
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;
`