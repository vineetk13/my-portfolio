import React from 'react';
import styled from 'styled-components';

import MobileApp from '../components/mobileApp';
import WebApp from '../components/webApp';
import MovieBrowser from '../utils/movies-3.png';
import Pomodoro from '../utils/pomodoro.png';
import ReactTodo from '../utils/todo.png';
import PhotoFeed from '../utils/gallery.png';
import BookStore from '../utils/books.png';

const Container = styled.div`
    margin-top:40px;
`;
const Heading = styled.p`
    font-weight:bold;
    font-size:40px;
    color:#192A56;
    padding:20px 80px;
    @media (max-width:760px){
        padding:20px 20px;
    }
`;
const Section = styled.div`
    display:flex;
    // border:1px solid red;
    // padding:0px 30px;
    margin:30px 0;
    margin-top:20px;
    // background-color:#101820;
    justify-content:space-around;
    @media (max-width: 760px) {
        margin:0;
        padding:10px 0px;
        flex-flow:column wrap;
        justify-content:center;
        align-items:center;
    }
`

const Projects = () => {
    return (
        <Container id="projects">
            <Heading>Projects</Heading>
            <Section>
                <MobileApp appName="Movie Browser App" appImage={MovieBrowser} git="https://github.com/vineetk13/React-Native-Movie-Browser-app" />
                <MobileApp appName="Pomodoro Timer App" appImage={Pomodoro} git="https://github.com/vineetk13/React-Native-Pomodoro-timer-app" />
                <div>
                    {/*<WebApp appName="React TODO App" appImage={ReactTodo} gitlink="https://github.com/vineetk13/React-TODO-App" />*/}
                    <WebApp appName="React Books Store" appImage={BookStore} git="https://github.com/vineetk13/react-books-store" />
                    <WebApp appName="React Image Gallery" appImage={PhotoFeed} git="https://github.com/vineetk13/react-image-gallery" />
                </div>
            </Section>
        </Container>
    )
}

export default Projects
