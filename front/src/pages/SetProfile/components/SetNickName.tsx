import styled from "styled-components";

function SetNickName() {
    return(
        
    <S.Wrapper>
    <S.container>
    <h2>닉네임</h2>
    <S.p>닉네임 소개글</S.p>
    <S.Rename>수정</S.Rename>
    </S.container>
</S.Wrapper>
    )
}
// 수정버튼 누르면 Input입력창 나오고 수정반영하기 구현
export default SetNickName;


const Wrapper = styled.div`
margin: 0;
padding: 0;
flex: 1;
display: flex;
`
const container = styled.div`
display: flex;
flex: 1;
width: 100%;
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
`
const p = styled.div`
color = #868E69;
margin = 14px 0px 0px;
`
const Rename = styled.a`
color = #12b886
`
const S = {
    Wrapper,
    container,
   p,
   Rename
}