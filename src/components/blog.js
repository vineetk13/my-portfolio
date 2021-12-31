import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

import CommentIcon from '../assets/illustrations/comment-regular.svg';
import CommentDark from '../assets/illustrations/comment-dark.svg';

const Container = styled.div`
      font-family: 'Nunito', sans-serif;
      background-color:#ffffff;
      max-width:350px;
      padding:15px 20px;
      box-shadow: 0 0 5px rgba(0,0,0,0.4);
      border-radius:5px;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
`;
const TopSection = styled.div`
      display:flex;
      justify-content:space-between;
      align-items:baseline;
      border-bottom: 1px solid #d0d0d0;
      padding-bottom:15px;
      & p,& a{
            color:${props => props.theme=="dark" ? "#fffffe" : "black"};
            font-weight:${props => props.theme=="dark" ? "400" : "600"};
      }
      &+div{
            color:${props => props.theme=="dark" ? "#94a1b2" : "#000000"};
           
      }
`;
const Description = styled.div`
      padding:10px 0;
      
`;
const Title = styled.a`
      margin:0;
      padding:0;
      font-family: 'Poppins', sans-serif;
      font-size:18px;
      text-decoration:none;
      &:hover{
            text-decoration:underline;
            font-weight:900;
            cursor:pointer;
      }
`; 
const ReactionCount = styled.span`
      font-size: 12px;
`;
const BottomSection = styled.div`
      display:flex;
      align-items:center;
      justify-content:space-between;
      & ${ReactionCount} {
            color:${props => props.theme==="dark" ? "#fffffe" : "#192A56"};
            font-weight: ${props => props.theme==="dark" ? 400 : 900};
      }
      & p{
            color:${props => props.theme=="dark" ? "#94a1b2" : "black"};
      }
      @media (max-width:760px){
            width:40%;
      }
`;
const Date = styled.p`
      padding:0;
      margin:0;
      // width:55px;
      // border:1px solid red;
      font-size: 12px
`;


export const BlogComponent = (props) => {
      const { title, desc, date, reactions, link, comments, theme } = props;
      return (
            <Container>
                  <div>
                        <TopSection theme={theme}>
                              <Title href={link} target="_blank">{title}</Title>
                             
                        </TopSection>
                        <Description>{desc}</Description>
                  </div>
                  <BottomSection theme={theme}>
                        <div>
                              <FontAwesomeIcon style={{color:"#F0142F"}} icon={faHeart} />&ensp;<ReactionCount>{reactions}</ReactionCount>&emsp;
                              <FontAwesomeIcon style={{color:theme=="dark" ? "#94a1b2" : "black"}} icon={faComment} />
                              &ensp;<ReactionCount>{comments}</ReactionCount>
                        </div>
                        <Date>{date}</Date>
                  </BottomSection>
            </Container>
      )
}