import styled from "styled-components";

function SetUnRegister() {
    return(
    <S.Wrapper>
        
        <S.container>
            <h2>회원탈퇴</h2>
        <S.UnRegisterBtn >회원 탈퇴</S.UnRegisterBtn>
            <p>탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.</p>
        </S.container>
    </S.Wrapper>
    )
}
export default SetUnRegister;

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
const UnRegisterBtn = styled.button`
background: #ff6b6b;
color: #ffffff;
padding: 0px 20px;
`

const S = {
    Wrapper,
    container,
    UnRegisterBtn
}