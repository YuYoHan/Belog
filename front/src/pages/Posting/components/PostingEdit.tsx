import axios from 'axios';
import React, {  useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import PostingRegisterbtn from "pages/Posting/components/PostingRegisterbtn"
import usequillcontent from 'hooks/usequillcontent';
import { postingData } from '..';


function PostingEdit({boardTitle,tagList} : postingData ) {
  
    const [content, setcontent ] = usequillcontent('');
    const QuillRef = useRef<ReactQuill>();
    const [imgfile, setImgFile] = useState< any>([])
    const [createObjectURL, setCreateObjectURL] = useState<string[]>([]);

const imageHandler = () => {
   const input = document.createElement('input');
   input.setAttribute('type', 'file');
   input.setAttribute('accept', 'image/*');
   input.click(); 

   input.addEventListener('change', async (e) => {
     e.preventDefault()
    // const file = input.files ? input.files[0] : null;
    const file = input.files && input.files[0];
    const fileExt = file?.name.split('.').pop();
    if(!['jpeg', 'png', 'jpg', 'JPG', 'PNG', 'JPEG','gif'].includes(fileExt as string)) return alert('jpg, png, jpg, gif 파일만 업로드가 가능합니다.')

    if(file) {
      const TemporaryURL = URL.createObjectURL(file)
      setCreateObjectURL((props : any) =>[...props, TemporaryURL,])
     
      const editor = QuillRef?.current?.getEditor();
      if(editor){
        editor.root.innerHTML =  editor.root.innerHTML + `<img src=${TemporaryURL} class="boardImage"/><br/>`; // 현재 있는 내용들 뒤에 써줘야한다.
      }
      setImgFile((props : any) => [...props  ,{file}])
    } 
  });
 };




const modules = useMemo(() => ({
  toolbar: {
    container: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', "strike"],
      [{ 'list': 'ordered' }, { 'list': 'bullet' },
      { 'indent': '-1' }, { 'indent': '+1' }],
      ['image', "link",],
      [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'] }]
    ],
    handlers: {
      image: imageHandler
    }
  },
}), [])

 

 const formats = [
   'header',
   'bold',
   'italic',
   'underline',
   'strike',
   'blockquote',
   'image',
 ];
 
// 이미지 처리를 하는 핸들러


  return (
   <S.Wrapper>
      <ReactQuill
      ref={(element) => {
         if (element !== null) {
           QuillRef.current = element;
         }
       }}
      theme="snow" 
      value={content}
      modules={modules}
      formats={formats}
      onChange={setcontent}
      placeholder="내용을 입력해주세요"/>
    <PostingRegisterbtn  
      content={content} 
      createObjectURL={createObjectURL} 
      boardTitle={boardTitle} 
      tagList={tagList}
      imgfile={imgfile}
      QuillRef={QuillRef}
      />

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
        height: 20rem;
        overflow-y: auto;
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