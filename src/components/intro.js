import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding:20px 80px;
    width:530px;
    // border:1px solid blue;
    @media (max-width: 760px) {
        padding:40px 30px;
    }
`;
const Greeting = styled.p`
    // font-family: 'Archivo', sans-serif;
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    font-size: 80px;
    @media (max-width: 760px) {
        font-size:60px;
    }
`;
const Intro = styled.p`
    margin-top:10px;
    // font-family: 'Archivo', sans-serif;
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
    font-size: 55px;
    @media (max-width: 760px) {
        font-size:45px;
        // color:orange;
    }
`;
const Summary = styled.p`
    margin-top:20px;
    font-size:20px;
    font-family: 'Nunito', sans-serif;
    // font-weight:bold;
    @media (max-width: 760px) {
        font-size:18px;
    }
`;

const Introduction = () => {
    return (
        <Container>
            <Greeting>Hello,</Greeting>
            <Intro>I'm Vineet K</Intro>
            <Summary>
                Passionate in web design and development. Flawless designer mind with hands on experience
                in designing web and mobile prototypes over top featured tools. Enthusiast of constant learning and dedicated towards creative thinking.         
            </Summary>
        </Container>
    )
}

export default Introduction;