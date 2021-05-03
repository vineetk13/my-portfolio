import React from 'react';
import styled from 'styled-components';

import Introduction from '../components/intro';
import MyImage from '../components/myImage';

const Container = styled.div`
    // position:relative;
    // top:8em;
    // border:2px dashed green;
    flex:1;
    height:85vh;
    display: flex;
    // margin-top:40px;
    flex-flow:row wrap;
    justify-content: space-around;
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
    return (
        <Container>
            <Introduction />
            <MyImage />
        </Container>
    )
}

export default LandingPage;