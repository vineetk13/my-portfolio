import React from 'react';
import styled, {keyframes} from 'styled-components';

import Html from '../assets/skillIcons/html-5.svg';
import Css from '../assets/skillIcons/css-3.svg';
import Js from '../assets/skillIcons/javascript.svg';
import Mysql from '../assets/skillIcons/mysql.svg';
import Php from '../assets/skillIcons/php.svg';
import Git from '../assets/skillIcons/git-icon.svg';
import Expo from '../assets/skillIcons/expo.svg';
import Api from '../assets/skillIcons/api.svg';
import Java from '../assets/skillIcons/java.svg';
import Reactjs from '../assets/skillIcons/reactjs.svg';
import Redux from '../assets/skillIcons/redux.svg';
import Draft from '../assets/skillIcons/draftjs-logo.svg';
import Node from '../assets/skillIcons/node.svg';
import Jest from '../assets/skillIcons/jest.svg';

const Heading = styled.p`
    font-weight:bold;
    font-size:40px;
    color:#192A56;
    padding:20px 0px;
`;
const Section = styled.div`
    margin-top:40px;
    position:relative;
    display:flex;
    flex-flow:row wrap;
    justify-content:space-evenly;
    // border:2px dashed green;
    @media (max-width:760px){
        margin-top:15px;
    }
`;
const Container = styled.div`
    margin-top:40px;
    // height:52vh;
    padding:0px 80px;
    @media (max-width:760px){
        padding:0 20px;
        margin-top:20px;
    }
`;
// const y = Math.round(Math.random()*17);
const y=10;
const float = (y,x) => keyframes`
    from {transform: translate(${x}px,0px);}
    50% {transform: translate(${x}px,${y}px);}
    to {transform: translate(${x}px,0px);}
`;
const Skill = styled.div`
    // border:1px solid blue;
    animation-name:${props => float(Math.floor(Math.random()*11)+5,Math.floor(Math.random()*21)-10)};
    margin:0 5%;
    animation-iteration-count:infinite;
    animation-duration:3s;
    animation-timing-function:ease-in-out;
    @media (max-width: 600px) {
        margin:15px;
     }
`;
const Img = styled.img`
    height:auto;
    width:4.5em;
`;

const Skills = () => {
    return (
        <Container id="skills">
            <Heading>Skills</Heading>
            <Section>
                <Skill >
                    <Img 
                        // style={{width:"8em"}} 
                        src={Reactjs} 
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Expo} 
                        // style={{width:"5em"}} 
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Redux} 
                        style={{width:"5em"}} 
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Java} 
                        style={{width:"4em"}} 
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Html} 
                        style={{width:"4em"}} 
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Css} 
                        style={{width:"3em"}} 
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Js} 
                        style={{width:"5.5em"}} 
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Api} 
                        style={{width:"4.5em"}} 
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Draft} 
                        style={{width:"4.0em"}} 
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Mysql} 
                        style={{width:"5em"}} 
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Php} 
                        style={{width:"4em"}} 
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Git} 
                        style={{width:"4.5em"}} 
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Jest} 
                        style={{width:"4.0em"}} 
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Node} 
                        style={{width:"5em"}} 
                    />
                </Skill>
            </Section>
        </Container>
    )
}

export default Skills;
// style={{position:"absolute",top:"3%",left:"50%"}}