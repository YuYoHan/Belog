import styled from "styled-components";

function SetEmail() {
    return(
    <S.Wrapper>
    <S.container>
        <h2>이메일 주소</h2>
        <S.p>회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다.</S.p>
        </S.container>
</S.Wrapper>
    )
}
export default SetEmail;


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

const S = {
    Wrapper,
    container,
    p
   
}