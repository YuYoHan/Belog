import  {  useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';
import PostingRegisterbtn from "pages/Posting/components/PostingRegisterbtn"
import { postingData } from '..';
import { useQuillEditor } from 'hooks/usequillcontent';

/**
 * @param {string} inputboardTitle - 제목에 입력되는 타이틀
 * @param {string} tagList - 태그에 입력된 값의 배열
 * @param {Detailcontent} imgfile - Detail컴포넌트의 본문 내용
 * @param {Array} boardImg - 수정하기 게시물 이미지
 * @param {number} boardNum - 수정하기 게시물ID
 */
function PostingEdit({inputboardTitle,tagList,Detailcontent,boardImg,boardNum} : postingData ) {
  
  /*
    content - 에디터의 입력된 HTML 태그의 데이터
    QuillRef - react-quill 접근 DOM
    imgfile - 파일 업로드 객체
    createObjectURL - aws s3 임시 이미지의 URL
  */
  const [content, setcontent ] = useQuillEditor(Detailcontent ? Detailcontent : "");
  const QuillRef = useRef<ReactQuill>();
  const [imgfile, setImgFile] = useState<object>()
  const [createObjectURL, setCreateObjectURL] = useState<string >('');


  /*
    react-quill 제공하는 이미지 업로드 base64 때문에
    이미지 핸들러 함수를 직접 적용,
    함수의 역할은 aws s3 에서 제공해주는 임시 URL 받은 후 
    react-quill 에디터의 미리보기 이미지 제공
  */
  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    //파일업로드 클릭 
    input.addEventListener('change', async (e) => {
      e.preventDefault()
      const file = input.files && input.files[0];
      const fileExt = file?.name.split('.').pop();
      if(!['jpeg', 'png', 'jpg', 'JPG', 'PNG', 'JPEG','gif'].includes(fileExt as string)) return alert('jpg, png, jpg, gif 파일만 업로드가 가능합니다.')

      // aws 주는 임시 URL 에디터 미리보기 생성
      if(file) {
        const TemporaryURL  = URL.createObjectURL(file)
        setCreateObjectURL( TemporaryURL)
        setImgFile({file})
      } 
    });
  };
  //react-quill 에디터 기능
  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [2, 3, 4, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'link'],
        ['image'],
        [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#f06666', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'] }],
      ],
      handlers: {
        image: imageHandler,
      },
    },
  }), []);

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'link',
  'list',
  'ordered',
  'blockquote',
  'image',
  'color',

];
  
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
      inputboardTitle={inputboardTitle} 
      tagList={tagList}
      imgfile={imgfile}
      QuillRef={QuillRef}
      boardImg={boardImg}
      boardNum={boardNum}
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