import React,{ useState, useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../App';

import EmailIcon from '../assets/illustrations/email.svg';
import EmailDark from '../assets/illustrations/email-dark.svg';

import Phone from '../assets/illustrations/phone.svg';
import PhoneDark from '../assets/illustrations/phone-dark.svg';

import Home from '../assets/illustrations/home.svg';
import HomeDark from '../assets/illustrations/home-dark.svg';

import Github from '../assets/illustrations/github.svg';
import GithubDark from '../assets/illustrations/github-dark.svg';
import Linkedin from '../assets/illustrations/linkedin.svg';
import LinkedinDark from '../assets/illustrations/linkedin-dark.svg';
import Twitter from '../assets/illustrations/twitter.svg';
import TwitterDark from '../assets/illustrations/twitter-dark.svg';
import Behance from '../assets/illustrations/behance.svg';
import BehanceDark from '../assets/illustrations/behance-dark.svg';

const Container = styled.div`
      // border:2px dashed green;
      padding:40px 100px;
      transition: background-color 250ms;
      background-color:${props => props.theme==="light" ? "#ffffff" : "#16161a"};
      @media (max-width:760px){
            padding:20px;
      }
      &>p{
            color:${props => props.theme=="dark" ? "#fffffe" : "#192A56"};
      }
`;
const Heading = styled.p`
    font-weight:bold;
    font-size:40px;
    color:#192A56;
`;
const Wrapper = styled.div`
      display:flex;
      justify-content:space-between;
      margin-top:25px;
      @media (max-width:600px){
            flex-direction:column;
           
      }
`;
const Info = styled.div`
      
      width:50%;
      @media (max-width:600px){
            border:none;
            padding-top:20px;
            width:100%;
            margin-bottom: 20px;
      }
      & div p{
            color:${props => props.theme==="dark" ? "#94a1b2" : "#000000"};
      }
`;
const InfoWrapper = styled.div`
      display:flex;
      align-items:center;
      // border:1px solid red;
      margin-bottom:15px;
      @media (max-width:600px){
            // margin:0 auto;
            // text-align:center;
            &:last-child{
                  justify-content:center;
            }
      }
`;
const InfoText = styled.p`
      font-family: 'Poppins', sans-serif;
      font-weight:600;
      font-size:18px;
      // border:1px solid red;
      width:270px;
      margin-left:15px;
      @media (max-width:600px){
            font-size:16px;
            width:100%;
      }
`;
const SocialWrapper = styled.div`
      display: flex;
      align-items: flex-end;
      margin-bottom: 15px;
`;
const SocialImg = styled.img`
      margin-right:30px;
      cursor:pointer;
      &:last-child{
            margin-right:0px;
      }
      &:hover{
            opacity:0.7;
      }
      @media (max-width:600px){

      }
`;
const SocialLink = styled.a`
margin-right:30px;
&:last-child{
      margin-right:0px;
}
`;

const ContactLayout = () => {
      const themeContext = useContext(ThemeContext);
      const isDark = themeContext.theme==="dark";
      return (
            <Container theme={themeContext.theme} id="contact">
                  <Heading>Contact</Heading>
                  <Wrapper>
                        <Info theme={themeContext.theme}>
                              <InfoWrapper>
                                    <img alt='email-icon' style={{fill:"white"}} width="35px" height="auto" src={isDark ? EmailDark : EmailIcon} />
                                    <InfoText>vineetkme.99@gmail.com</InfoText>
                              </InfoWrapper>
                              <InfoWrapper>
                                    <img alt='phone-icon' width="35px" height="auto" src={isDark ? PhoneDark : Phone} />
                                    <InfoText>+91 9513126054</InfoText>
                              </InfoWrapper>
                              <InfoWrapper style={{alignItems:"flex-start"}}>
                                    <img alt='home-icon' width="35px" height="auto" src={isDark ? HomeDark : Home} />
                                    <InfoText>Saraswathipuram, Tumakuru,
                                    Karnataka - 572105</InfoText>
                              </InfoWrapper>
                        </Info>
                  
                        <SocialWrapper>
                              <SocialLink href="https://github.com/vineetk13"><SocialImg src={isDark ? GithubDark : Github} /></SocialLink>
                              <SocialLink href="https://www.linkedin.com/in/vineetk13699/"><SocialImg src={isDark ? LinkedinDark : Linkedin} /></SocialLink>
                              <SocialLink href="https://twitter.com/Vineetkme"><SocialImg src={isDark ? TwitterDark : Twitter} /></SocialLink>
                              <SocialLink href="https://www.behance.net/vineetk1"><SocialImg src={isDark ? BehanceDark : Behance} /></SocialLink>
                        </SocialWrapper>
                  </Wrapper>
            </Container>
      )
}

export default ContactLayout;