import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons';

const Links = styled.div`
    // display:none;
    // opacity:0;
`;
const Overlay = styled.div`
    position: absolute;
    bottom: 13%;
    left: 13%;
    right: 0;
    // box-sizing:border-box;
    overflow:hidden;
    // border:2px solid white;
    // border-radius:5px;
    padding:10px 0;
    background-color:black;
    opacity:0.7;
    width: 75%;
    transition: .4s ease;
    height:10%;
    &:hover {
        height: 50%;
    }
    &:hover ${Links}{
        display:block;
        opacity:1;
    }
`;
const Container = styled.div`
    position:relative;
    border-radius:7px;
    // border:2px solid green;
    // box-shadow: 0 0 5px rgba(0,0,0,0.4);
    width:35vw;
    @media (max-width: 375px) {
        margin-bottom:15px;
        width:85vw;
    }
`;
const Details = styled.div`
    color: white;
    font-size: 20px;
    text-align:center;
    
`;
const Title = styled.p`
    font-size:15px;
    margin-bottom:20px;
    @media (max-width: 375px){
        margin-bottom:10px;
    }
`;
const Image = styled.img`
    width:inherit;
    height:auto;
`;

const WebApp = (props) => {
    return (
        <Container>
            <Image src={props.appImage} />
            <Overlay>
                <Details>
                    <Title>{props.appName}</Title>
                    <Links>
                        <FontAwesomeIcon onClick={()=>{console.log("Github icon clicked")}} size="2x" icon={faGithub} />&emsp;
                        <FontAwesomeIcon size="lg" icon={faLink} />
                    </Links>
                </Details>
            </Overlay>
        </Container>
    )
}

export default WebApp;