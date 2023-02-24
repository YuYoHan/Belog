import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

function PostingEdit() {
  const [value, setValue] = useState('');
  
  const modules = {
   toolbar: {
     container: [
       [{ header: [1, 2, 3, 4, 5, 6, false] }],
       [{ align: [] }],
       ["bold", "italic", "underline", "strike", "blockquote"],
       [{ list: "ordered" }, { list: "bullet" }, "link"],
       [
         {
           color: ["#000000","#e60000","#ff9900","#ffff00","#008a00","#0066cc","#9933ff","#ffffff","#facccc","#ffebcc","#ffffcc","#cce8cc","#cce0f5","#ebd6ff","#bbbbbb","#f06666","#ffc266","#ffff66","#66b966","#66a3e0","#c285ff","#888888","#a10000","#b26b00","#b2b200","#006100","#0047b2","#6b24b2","#444444","#5c0000","#663d00","#666600","#003700","#002966","#3d1466","custom-color",
           ],
         },
         { background: [] },
       ],
       ["image"],
       ["clean"],
     ],
   },
 };

  return (
   <S.Wrapper>
      <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="내용을 입력해주세요" modules={modules}/>;
   </S.Wrapper>
  )
   
}

export default PostingEdit

const Wrapper = styled.div`
   & .ql-toolbar.ql-snow,.ql-container.ql-snow{
      border: none;
      padding: 0;
   }
   & .ql-container{
      min-height: 380px;
      margin-top: 2rem;

      & .ql-editor{
         padding: 0;
      }
      
      & .ql-editor.ql-blank::before{
         left: 0;
         font-style: inherit;
      }
   }
`


const S = {
   Wrapper
}