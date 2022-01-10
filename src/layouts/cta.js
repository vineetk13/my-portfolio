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
    text-align:center;
    color:#192A56;
`;
const Email = styled.input`
      // border: 1px solid #C4C4C4;
      border-radius:6px;
      padding:8px 8px;
      font-size:16px;
      outline:blue;
      margin-bottom:20px;
      font-family: 'Nunito', sans-serif;
      width:380px;
      letter-spacing:1px;
      &:focus{
            border: 1px solid blue;
            box-shadow: 0 0 2px blue;
      }
      &:invalid{
            border: 1px solid red;
            box-shadow: 0 0 3px red;
      }
      @media (max-width:600px){
            width:calc(100% - 16px);
      }
`;
const Message = styled.textarea`
      // border: 1px solid #C4C4C4;
      border-radius:6px;
      padding:8px 8px;
      font-size:16px;
      outline:none;
      resize:none;
      width:380px;
      height:150px;
      font-family: 'Nunito', sans-serif;
      margin-bottom:20px;
      &:focus{
            border: 1px solid blue;
            box-shadow: 0 0 2px blue;
      }
      @media (max-width:600px){
            width:calc(100% - 16px);
      }
`;
const Wrapper = styled.div`
      display:flex;
      justify-content:space-between;
      margin-top:25px;
      @media (max-width:600px){
            flex-direction:column;
           
      }
`;
const InputWrapper = styled.div`
      // border:1px solid red;
      box-sizing:border-box;
      text-align:center;
      @media (max-width:600px){
            order:-1;
            margin-bottom:25px;
      }
      &>input,&>textarea{
            transition: background-color 250ms;
            background-color:${props => props.theme==="light" ? "#ffffff" : "#242629"};
            border:${props => props.theme==="light" ? "1px solid #C4C4C4" : "none"};
            color:${props => props.theme==="light" ? "black" : "#fffffe"};
      }
`;
const Button = styled.button`
      cursor:pointer;
      border:none;
      background-color:#192A56;
      font-size:18px;
      border-radius:40px;
      padding:8px 15px;
      width:100px;
      color:#ffffff;
      letter-spacing:1px;
      &:disabled{
            opacity:0.6;
      }
`;
const Info = styled.div`
      
      width:50%;
      border-right:1px solid #C4C4C4;
      @media (max-width:600px){
            border:none;
            border-top:1px solid #C4C4C4;
            // border:1px solid red;
            padding-top:20px;
            width:100%;
      }
      & div p{
            color:${props => props.theme=="dark" ? "#94a1b2" : "#000000"};
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
// const InfoIcon = styled.im
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

const CtaLayout = () => {
      const [email, setEmail] = useState("");
      const [msg, setMsg] = useState("");
      const themeContext = useContext(ThemeContext);
      const isDark = themeContext.theme==="dark";
      return (
            <Container theme={themeContext.theme} id="contact">
                  <Heading>Contact me</Heading>
                  <Wrapper>
                        <Info theme={themeContext.theme}>
                              <InfoWrapper>
                                    <img style={{fill:"white"}} width="35px" height="auto" src={isDark ? EmailDark : EmailIcon} />
                                    <InfoText>vineetkme.99@gmail.com</InfoText>
                              </InfoWrapper>
                              <InfoWrapper>
                                    <img width="35px" height="auto" src={isDark ? PhoneDark : Phone} />
                                    <InfoText>+91 9513126054</InfoText>
                              </InfoWrapper>
                              <InfoWrapper style={{alignItems:"flex-start"}}>
                                    <img width="35px" height="auto" src={isDark ? HomeDark : Home} />
                                    <InfoText>Saraswathipuram, Tumakuru,
                                    Karnataka - 572105</InfoText>
                              </InfoWrapper>
                              <InfoWrapper style={{marginTop:"40px"}}>
                                    <SocialLink href="https://github.com/vineetk13"><SocialImg src={isDark ? GithubDark : Github} /></SocialLink>
                                    <SocialLink href="https://www.linkedin.com/in/vineetk13699/"><SocialImg src={isDark ? LinkedinDark : Linkedin} /></SocialLink>
                                    <SocialLink href="https://twitter.com/Vineetkme"><SocialImg src={isDark ? TwitterDark : Twitter} /></SocialLink>
                                    <SocialLink href="https://www.behance.net/vineetk1"><SocialImg src={isDark ? BehanceDark : Behance} /></SocialLink>
                                    {/*<SocialImg src={Facebook} />*/}
                              </InfoWrapper>
                        </Info>
                        <InputWrapper theme={themeContext.theme}>
                              <Email placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" /><br/>
                              <Message value={msg} placeholder="Your message" onChange={(e) => setMsg(e.target.value)} /><br/>
                              <Button disabled={email==="" || msg===""}><a target="_blank" style={{color:"#ffffff",textDecoration:"none"}} href={(email!=="" && msg!=="") && `https://mail.google.com/mail/?view=cm&fs=1&su=MAIL FROM PORTFOLIO by ${email}&to=vineetkme.99@gmail.com&body=${msg}`}>Send</a></Button>
                        </InputWrapper>
                  </Wrapper>
            </Container>
      )
}

export default CtaLayout;