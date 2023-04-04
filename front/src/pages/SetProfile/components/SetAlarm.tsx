import styled from "styled-components";

function SetAlarm() {
    return(
        <S.Wrapper>
        <S.container>
            <h2>이메일 수신 설정</h2>
            
            </S.container>
    </S.Wrapper>
    //토글버튼 제작
    )
}
export default SetAlarm;

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

const S = {
    Wrapper,
    container,
   
}