import styled from "styled-components";


function SetSocial() {
    return(
    <S.Wrapper>
    <S.container>
        <h2>소셜 정보</h2>
        <S.p>포스트 및 블로그에서 보여지는 프로필에서 공개되는 소셜정보입니다.</S.p>
        </S.container>
</S.Wrapper>
)
}
export default SetSocial;


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
    Rename,
   
}