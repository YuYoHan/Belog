import { Dispatch, SetStateAction, useState,KeyboardEvent   } from "react"
import styled from "styled-components"

type TagProps = {
   tagList : string[],
   setTagList :  Dispatch<SetStateAction<string[]>>
}


function PostingTag({tagList,setTagList} : TagProps) {
   const [tagItem, setTagItem] = useState<string>('')
   const [placeholder, setPlaceholder] = useState<string>('태그를 입력해주세요')

   const onKeyPress = (e: React.ChangeEvent<HTMLInputElement> & KeyboardEvent<HTMLInputElement>) => {
      if (e.target.value.length  !== 0 && e.key === 'Enter') {
         submitTagItem()
         setPlaceholder('')
      }
    }

   const submitTagItem = () => {
      let updatedTagList = [...tagList]
      updatedTagList.push(tagItem)
      setTagList(updatedTagList)
      setTagItem('')
   }
   
   
   const deleteTagItem = (e : any) => {
      const deleteTagItem = e.target.parentElement.firstChild.innerText
      const filteredTagList = tagList.filter(tagItem => tagItem !== deleteTagItem)
      setTagList(filteredTagList)
    }
   
   return(
      <S.Wrapper>
         {tagList.map((tagItem, index) => {
          return (
            <S.TagItem key={index}>
              <S.Text>{tagItem}</S.Text>
              <Button onClick={deleteTagItem}>X</Button>
            </S.TagItem>
          )
        })}
         <input type='text'
          onChange={e => setTagItem(e.target.value)}
          value={tagItem}
          onKeyDown={onKeyPress}
         placeholder={placeholder} />
      </S.Wrapper>
   )
}

export default PostingTag

const Wrapper = styled.div`
   color: #212529;
   font-size: 1.125rem;
   display: flex;
   align-items: center;
   flex-wrap: wrap;
   margin-bottom: 0.75rem;

   & input{
      background: transparent;
      display: inline-flex;
      outline: none;
      cursor: text;
      font-size: 1.125rem;
      line-height: 2rem;
      margin-bottom: 0.75rem;
      min-width: 8rem;
      border: none;
      color: #212529;
      &:focus-within {
      border-color: #757bf6;
  }
   }
`

const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  background-color: #757bf6;
  border-radius: 5px;
  color: white;
  font-size: 13px;
`

const Text = styled.span``

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  margin-left: 5px;
  background-color: white;
  border-radius: 50%;
  color: #757bf6;
`

const S = {
   Wrapper,
   TagItem,
   Text,
   Button
}