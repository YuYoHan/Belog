import styled from "styled-components";
import SetImage from "./components/SetImage";
import SetNickName from "./components/SetNickName";
import SetTitle from "./components/SetTitle";
import SetSocial from "./components/SetSocial";
import SetEmail from "./components/SetEmail";
import SetAlarm from "./components/SetAlarm";
import SetUnRegister from "./components/SetUnRegister";

function SetProfile(){
    return(
        <S.Wrapper>
            <S.container>
                <SetImage />
                <SetNickName/>
                <SetTitle/>
                <SetSocial/>
                <SetEmail/>
                <SetAlarm/>
                <SetUnRegister/>
            </S.container>
        </S.Wrapper>
    )
}

export default SetProfile

const Wrapper = styled.div`
min-height: 100%;
padding: 1.5rem;  `

const container = styled.div`
padding: 1.5rem;
height: 100%;`

const S = {
    Wrapper,
    container}