import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding:20px 0px;
    width:530px;
    color:${props => props.theme=="dark" ? "#fffffe" : "black"};
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
    }
`;
const Summary = styled.p`
    margin-top:20px;
    font-size:20px;
    font-family: 'Nunito', sans-serif;
    color:${props => props.theme=="dark" ? "#a7a9be" : "black"};
    @media (max-width: 760px) {
        font-size:18px;
    }
`;

const Introduction = (props) => {
    return (
        <Container {...props}>
            <Greeting>Hello,</Greeting>
            <Intro>I'm Vineet K</Intro>
            <Summary {...props}>
                Passionate in web design and development. Strengthened in various frontend techologies by building projects under different domains and implementing complex user requirements. Enthusiast of constant learning and dedicated towards creative thinking.         
            </Summary>
            {/*<a href="/assets/my_resume1.pdf" download>Download Resume</a>*/}
        </Container>
    )
}

export default Introduction;