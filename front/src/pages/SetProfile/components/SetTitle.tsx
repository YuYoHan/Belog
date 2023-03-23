import styled from "styled-components";

function SetTitle() {
    return(
    <S.Wrapper>
    <S.container>
        <h2>블로그제목</h2>
        <S.Rename>수정</S.Rename>
        <S.p>개인 페이지의 좌측 상단에 나타나는 페이지 제목입니다.</S.p>
        </S.container>
</S.Wrapper>
    )
}
export default SetTitle;


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