import axios from "axios";
import { useState,useEffect } from "react";
import styled from "styled-components"
import MyPageCard from "./MypageCard";

export type MypageData = {
   id : number,
   title : string,
   content : string,
   taglist : Array<string>,
   img: string
}
// testsadasdasdadssad
function MyPageList() {
   // [
   //    {
   //      id: 1,
   //      title: 'wecode',
   //      content: 'Welcome to world best coding bootcamp!',
   //      taglist : ['React','javascript' , 'html' , 'css'],
   //      img:'https://velog.velcdn.com/images/hyounglee/post/82e541ba-1a54-42df-ba84-cc13fd4ae60e/image.jpg'
   //    },
   //    {
   //      id: 2,
   //      title: 'joonsikyang',
   //      content: 'Hi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi thereHi there.',
   //      taglist : ['React','javascript'],
   //      img: 'https://velog.velcdn.com/images/bepyan/post/3048dbfd-0d2b-4aa5-9649-f853f23a7a36/image.gif'
   //    },
   //    {
   //       id: 3,
   //       title: 'test3',
   //       content: 'Hi there.',
   //       taglist : ['s,b,s,c,d,s,a'],
   //       img: 'https://velog.velcdn.com/images/lky5697/post/93e10725-8b71-4f1c-b645-cf8b7e4164dd/image.jpeg'
   //     },
   //     {
   //       id: 4,
   //       title: 'test4',
   //       content: 'Hi there.',
   //       taglist : ['javascript' , 'html' , 'css'],
   //       img: 'https://velog.velcdn.com/images/redjen/post/94ca451b-5a98-4882-96a5-81f028ff0801/image.jpg'
   //     },
   //     {
   //       id: 5,
   //       title: 'test5',
   //       content: 'Hi there.',
   //       taglist : [' html , css'],
   //       img: 'https://velog.velcdn.com/images/shyuuuuni/post/231a74ef-b786-4e29-8646-2a5bf645aaa6/image.gif'
   //     },
   //     {
   //       id: 6,
   //       title: 'test6',
   //       content: 'Hi there.',
   //       taglist : ['css'],
   //       img: 'https://velog.velcdn.com/images/bepyan/post/3048dbfd-0d2b-4aa5-9649-f853f23a7a36/image.gif'
   //     },
   //  ]
   // 맵으로 뿌려질 데이터
   // props로  card 넘길거임

   const [testData,setTestData] = useState<Array<MypageData>>();
   
   useEffect(() => {
      axios
      .get("https://2432b997-c1de-4c6d-a6a7-36b68e210341.mock.pstmn.io/list")
      .then((res) => {
         console.log(res.data);
         
      })
      .catch(() => {});
   },[])

   return(
      <S.Wrapper>
         <S.Innerwrap>
            <S.Ul>
            {/* {
               testData.map((data,index) => (
                  <MyPageCard key={index} data ={data} />
            ))} */}

            </S.Ul>
         </S.Innerwrap>
      </S.Wrapper>
   )
}

export default MyPageList

const Wrapper = styled.div`
   background-color: #fff;
   min-height: 100%;
`;

const Innerwrap = styled.div`

   
`

const Ul = styled.ul`
   flex-wrap: wrap;
   display: flex;
   margin: -1rem;
`;

const S = {
   Wrapper,
   Innerwrap,
   Ul,
};
