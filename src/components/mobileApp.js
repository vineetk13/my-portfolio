import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt, faLink } from '@fortawesome/free-solid-svg-icons';
import Img from '../assets/illustrations/up-arrow.svg';

const Links = styled.div`
    // display:none;
    // border:1px solid white;
`;
const Overlay = styled.div`
    position: absolute;
    bottom:63px;
    left:13px;
    overflow:hidden;
    // border:2px solid orange;
    padding:10px 0;
    background-color:black;
    opacity:0.7;
    width: calc(100% - 31px);
    height: 4%;
    transition: 0.3s ease;
    &::before{
        content:url(${Img});
        position:absolute;
        top:-10px;
        opacity:1;
        color:white;
        left:calc(50% - 5px);
    }
    &:hover {
        height: 40%;
    }
    &:hover ${Links}{
        display:block;
    }
`;
const Container = styled.div`
    position:relative;
    margin:0 auto;
    border-radius:7px;
    // border:2px solid green;
    height:auto;
    z-index:99;
    // max-height:570px;
    // box-shadow: 0 0 5px rgba(0,0,0,0.4);
    width:270px;
    @media (max-width: 760px) {
        margin-bottom:10px;
        width:85vw;
    }
   
`;
const Details = styled.div`
    color: white;
    font-size: 20px;
    text-align:center;
`;
const Image = styled.img`
    height:auto;
    width:inherit;
`;
const Title = styled.p`
    font-size:15px;
`;


const MobileApp = (props) => {
    return (
        <Container>
            <Image src={props.appImage} />
            <Overlay>
                <Details>
                    <Title>{props.appName}</Title><br/>
                    <Links>
                        <a style={{color:"white"}} href={props.git} target="_blank"><FontAwesomeIcon size="2x" icon={faGithub}  /></a>
                    </Links>
                </Details>
            </Overlay>
        </Container>
    )
}

export default MobileApp;