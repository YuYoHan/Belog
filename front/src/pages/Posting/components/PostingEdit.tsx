import axios from 'axios';
import useInput from 'hooks/useInput';
import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { json } from 'stream/consumers';
import styled from 'styled-components';

function PostingEdit() {
  
   const [content, setcontent ] = useInput('');
   const QuillRef = useRef<ReactQuill>();

const testdate  = () => {
    
  //           fetch("http://localhost:3001/posts/", {
//           method : "POST",
//           body : JSON.stringify(formData),
//           headers: {"Content-Type": "application/json"},
//           }).then(response => response.json()).then((json) => console.log(json))

  
}



// const imageHandler = () => {
//    console.log('에디터에서 이미지 버튼을 클릭하면 이 핸들러가 시작됩니다!');
//    // 1. 이미지를 저장할 input type=file DOM을 만든다.
//    const input = document.createElement('input');
//    input.setAttribute('type', 'file');
//    input.setAttribute('accept', 'image/*');
//    input.click(); // 에디터 이미지버튼을 클릭하면 이 input이 클릭된다.
   
//    // 속성 써주기
//    // input이 클릭되면 파일 선택창이 나타난다.
   
//    // input에 변화가 생긴다면 = 이미지를 선택
//    input.addEventListener('change', async () => {
//      console.log('온체인지');
      
//       const file = input.files ? input.files[0] : null;
//         // multer에 맞는 형식으로 데이터 만들어준다.
//         const formData = new FormData();
//         formData.append('image', file); // formData는 키-밸류 구조
//         // 백엔드 multer라우터에 이미지를 보낸다.
        
        
//         try {

//           const result = await axios.post('http://localhost:3001/posts/', formData );
//        console.log('성공 시, 백엔드가 보내주는 데이터', result.data.url);
//        const IMG_URL = result.data.url;
      
//        // 이 URL을 img 태그의 src에 넣은 요소를 현재 에디터의 커서에 넣어주면 에디터 내에서 이미지가 나타난다
//        // src가 base64가 아닌 짧은 URL이기 때문에 데이터베이스에 에디터의 전체 글 내용을 저장할 수있게된다
//        // 이미지는 꼭 로컬 백엔드 uploads 폴더가 아닌 다른 곳에 저장해 URL로 사용하면된다.
 
//        // 이미지 태그를 에디터에 써주기 - 여러 방법이 있다.
//        const editor = QuillRef.current?.getEditor(); // 에디터 객체 가져오기
//        console.log(editor);
       
//        // 1. 에디터 root의 innerHTML을 수정해주기
//        // editor의 root는 에디터 컨텐츠들이 담겨있다. 거기에 img태그를 추가해준다.
//        // 이미지를 업로드하면 -> 멀터에서 이미지 경로 URL을 받아와 -> 이미지 요소로 만들어 에디터 안에 넣어준다.
//          if(editor){
//             editor.root.innerHTML =
//             editor.root.innerHTML + `<img src=${IMG_URL} /><br/>`; // 현재 있는 내용들 뒤에 써줘야한다.
//          }
//        // 2. 현재 에디터 커서 위치값을 가져온다
//          //  const range = editor.getSelection();
//          //  editor.insertEmbed(range.index, 'image', IMG_URL);
//        // 가져온 위치에 이미지를 삽입한다
//      } catch (error) {
//        console.log('실패했어요ㅠ');
//      }
//    });
//  };

const imageHandler = (event: ChangeEvent<HTMLInputElement>) => {
  const editor = QuillRef.current?.getEditor();
  console.log(editor)
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*");
  input.click();

  input.onchange = async () => {
    console.log('핸들 작동');
    
    const file = input.files ? input.files[0] : undefined;
    if(file && editor){
        const formData = new FormData();
        formData.append("image", file);
      for (let value of formData.values()) { 
        console.log(value);
      }
        const res = await axios.post('http://localhost:3001/posts/', formData);
        console.log(res);
        
        const url = res?.data?.url;
                    editor.root.innerHTML =
            editor.root.innerHTML + `<img src=${url} /><br/>`; // 현재 있는 내용들 뒤에 써줘야한다.
      }
    } 
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
      placeholder="내용을 입력해주세요"/>;

      <button onClick={testdate}>asdsaddas</button>
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