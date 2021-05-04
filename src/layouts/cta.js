import React,{ useState } from 'react';
import styled from 'styled-components';

import EmailIcon from '../assets/illustrations/email.svg';
import Phone from '../assets/illustrations/phone.svg';
import Home from '../assets/illustrations/home.svg';
import Github from '../assets/illustrations/github.svg';
import Linkedin from '../assets/illustrations/linkedin.svg';
import Twitter from '../assets/illustrations/twitter.svg';
import Facebook from '../assets/illustrations/facebook.svg';

const Container = styled.div`
      // border:2px dashed green;
      padding:40px 100px;
      @media (max-width:760px){
            padding:20px;
      }
`;
const Heading = styled.p`
    font-weight:bold;
    font-size:40px;
    text-align:center;
    color:#192A56;
`;
const Email = styled.input`
      border: 1px solid #C4C4C4;
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
      border: 1px solid #C4C4C4;
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
      // border:1px solid red;
      width:50%;
      border-right:1px solid #C4C4C4;
      @media (max-width:600px){
            border:none;
            border-top:1px solid #C4C4C4;
            padding-top:20px;
            width:100%;
      }
`;
const InfoWrapper = styled.div`
      display:flex;
      align-items:center;
      margin-bottom:15px;
      @media (max-width:600px){
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
      return (
            <Container id="contact">
                  <Heading>Contact me</Heading>
                  <Wrapper>
                        <Info>
                              <InfoWrapper>
                                    <img width="35px" height="auto" src={EmailIcon} />
                                    <InfoText>vineetkme.99@gmail.com</InfoText>
                              </InfoWrapper>
                              <InfoWrapper>
                                    <img width="35px" height="auto" src={Phone} />
                                    <InfoText>+91 9513126054</InfoText>
                              </InfoWrapper>
                              <InfoWrapper style={{alignItems:"flex-start"}}>
                                    <img width="35px" height="auto" src={Home} />
                                    <InfoText>Saraswathipuram, Tumakuru,
                                    Karnataka - 572105</InfoText>
                              </InfoWrapper>
                              <InfoWrapper style={{marginTop:"40px"}}>
                                    <SocialLink href="https://github.com/vineetk13"><SocialImg src={Github} /></SocialLink>
                                    <SocialLink href="https://www.linkedin.com/in/vineetk13699/"><SocialImg src={Linkedin} /></SocialLink>
                                    <SocialLink href="https://twitter.com/Vineetkme"><SocialImg src={Twitter} /></SocialLink>
                                    {/*<SocialImg src={Facebook} />*/}
                              </InfoWrapper>
                        </Info>
                        <InputWrapper>
                              <Email placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" /><br/>
                              <Message value={msg} placeholder="Your message" onChange={(e) => setMsg(e.target.value)} /><br/>
                              <Button disabled={email==="" || msg===""}><a target="_blank" style={{color:"#ffffff",textDecoration:"none"}} href={(email!=="" && msg!=="") && `https://mail.google.com/mail/?view=cm&fs=1&su=MAIL FROM PORTFOLIO by ${email}&to=vineetkme.99@gmail.com&body=${msg}`}>Send</a></Button>
                        </InputWrapper>
                  </Wrapper>
            </Container>
      )
}

export default CtaLayout;