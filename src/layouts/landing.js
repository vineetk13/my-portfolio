import React, {useContext} from 'react';
import styled from 'styled-components';

import Introduction from '../components/intro';
import MyImage from '../components/myImage';
import { ThemeContext } from '../App';

const Container = styled.div`
    flex:1;
    height:85vh;
    display: flex;
    flex-flow:row wrap;
    justify-content: space-around;
    transition: background-color 250ms;
    background-color:${props => props.theme==="light" ? "#ffffff" : "#16161a"};
    align-items:center;
    @media (max-width: 760px) {
        flex-flow:column no-wrap;
        height:initial;
        width:100vw;
        justify-content: center;
        align-items:center;
     }
`;

const LandingPage = () => {
    const themeContext = useContext(ThemeContext);
    return (
        <Container theme={themeContext.theme}>
            <Introduction theme={themeContext.theme} />
            <MyImage />
        </Container>
    )
}

export default LandingPage;