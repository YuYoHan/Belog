import { useMutation, useQueryClient } from '@tanstack/react-query'
import CommentApi from 'apis/comment/CommentAPI'
import CommentUpdateBtn from 'components/Comment/CommentList/list/UpdateBtn'
import { commentKey } from 'consts/queryKey'
import useEditable from 'hooks/editable'
import TimeForToday from 'hooks/usedaysTimer'
import { useState } from 'react'
import styled from 'styled-components'
import {  commentData } from '../..'

function CommentCard( {data} : commentData) {

  const [UpdatehiddenBtn,setUpdatehiddenBtn] = useState<boolean>(false)
  const EditableBtn =  useEditable(data.userId)
  const {boardNum,commentNum} = data
  
  const onClickhiddenBtn = () => {
    setUpdatehiddenBtn(true)
  }
  
  const queryClient = useQueryClient();
  const CommentDeletemutation = useMutation(() => CommentApi.deleteCommentApi(boardNum,commentNum), {
    onSuccess: (res) => {
      queryClient.invalidateQueries([commentKey.GET_COMMENT_LIST])
    },
  })

  const handleCommentDelete = () => {
      CommentDeletemutation.mutate();
  }
  
  return (
    <Wrap>
      <CommentListHeader>
        <UserInpo>
          <div> <p>{data.userEmail}</p><p>{TimeForToday(data.commentTime)}</p> </div>
          {/* <p><span>작성 날자 : </span></p> */}
        </UserInpo>
        {!UpdatehiddenBtn && EditableBtn && (
          <ChangeBtn>
            <span onClick={onClickhiddenBtn}>수정</span>
            <span onClick={handleCommentDelete}>삭제</span>
          </ChangeBtn>
        )}
      </CommentListHeader>
      <Commentcontent>
        {!UpdatehiddenBtn && data.comment}
      </Commentcontent>
      {UpdatehiddenBtn && 
      <CommentUpdateBtn 
          commentdata={data.comment} 
          commentNum={data.commentNum}
          boardNum={data.boardNum}
          userId={data.userId}
          setUpdatehiddenBtn={setUpdatehiddenBtn}/>
      }

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
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const UserInpo = styled.div`
  & p {
    font-size: 1rem;
    font-weight: bold;
    color: #212529;
    font-size: 1rem;
    font-weight: bold;
    color: #212529;
  }
  & p+p{
    margin-top: 0.5rem;
    color: #868E96;
    font-size: 0.875rem;
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