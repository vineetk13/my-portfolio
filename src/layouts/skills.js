import React,{ useContext } from 'react';
import styled, {keyframes} from 'styled-components';

import { ThemeContext } from '../App';

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
import Webrtc from '../assets/skillIcons/webrtc.svg'
import Ts from '../assets/skillIcons/ts-logo.svg'
import Python from '../assets/skillIcons/python-logo.svg'
import Websocket from '../assets/skillIcons/websocket-logo.svg'
import PSQL from '../assets/skillIcons/postgresql-logo.svg'
import Mongo from '../assets/skillIcons/mongo-logo.svg'
import Docker from  '../assets/skillIcons/docker-logo.svg'
import K8s from '../assets/skillIcons/k8s-logo.svg'
import Aws from '../assets/skillIcons/awslogo.svg'

const Heading = styled.p`
    font-weight:bold;
    font-size:40px;
    color:#192A56;
    padding:20px 0px;
    color:${props => props.theme=="dark" ? "#fffffe" : "#192A56"};
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
   
    // height:52vh;
    padding:0px 80px;
    padding-top:40px;
    transition: background-color 250ms;
    background-color:${props => props.theme==="light" ? "#ffffff" : "#16161a"};
    @media (max-width:760px){
        padding:0 20px;
        padding-top:20px;
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
    const themeContext = useContext(ThemeContext);
    return (
        <Container theme={themeContext.theme} id="skills">
            <Heading theme={themeContext.theme}>Skills</Heading>
            <Section>
                <Skill >
                    <Img 
                        // style={{width:"8em"}} 
                        title='React.js'
                        src={Reactjs} 
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Ts} 
                        title='Typescript'
                        // style={{width:"5em"}} 
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Redux} 
                        style={{width:"5em"}} 
                        title='Redux'
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Python} 
                        style={{width:"4em"}} 
                        title='Python'
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Html} 
                        style={{width:"4em"}} 
                        title='HTML'
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Css} 
                        style={{width:"3em"}}
                        title='CSS' 
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Js} 
                        style={{width:"5.5em"}} 
                        title='Javascript'
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Api} 
                        style={{width:"4.5em"}} 
                        title='API Integration'
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Draft} 
                        style={{width:"4.0em"}} 
                        title='Draft.js'
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={PSQL} 
                        style={{width:"5em"}} 
                        title='PostgreSQL'
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Mongo} 
                        style={{width:"3em"}} 
                        title='MongoDB'
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Git} 
                        style={{width:"4.5em"}} 
                        title='Git'
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Jest} 
                        style={{width:"4.0em"}} 
                        title='Jest'
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Node} 
                        style={{width:"6em"}} 
                        title='Node.js'
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Websocket} 
                        style={{width:"5em"}} 
                        title='Websocket'
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Webrtc} 
                        style={{width:"5em"}} 
                        title='WebRTC'
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Docker} 
                        style={{width:"4.0em"}} 
                        title='Docker'
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={Aws} 
                        style={{width:"4.0em"}} 
                        title='AWS'
                    />
                </Skill>
                <Skill>
                    <Img 
                        src={K8s} 
                        style={{width:"4.0em"}} 
                        title='Kubernetes'
                    />
                </Skill>
            </Section>
        </Container>
    )
}

export default Skills;
