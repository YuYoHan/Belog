import {Outlet} from 'react-router-dom'
import styled from 'styled-components'
import Logo from './logo'
import OnClickLogin from './LoginBtn'


function MainHeader(){

    return( 
        <S.Wrapper>
            <S.container>
                <Logo/>
                <S.RightItem>
                    <OnClickLogin/>
                </S.RightItem>
            </S.container>
            <Outlet/>
        </S.Wrapper>
    )
}

export default MainHeader;

const Wrapper = styled.div`
    height: 4rem;`

const container = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 2rem;
`
const RightItem = styled.div`
    display: flex;
   align-items: center;
`
const S = {
    Wrapper,
    container,
    RightItem,
}