import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

import CommentIcon from '../assets/illustrations/comment-regular.svg';
import CommentDark from '../assets/illustrations/comment-dark.svg';

const Container = styled.div`
      // border:1px solid blue;
      font-family: 'Nunito', sans-serif;
      // border: 1px solid #d0d0d0;
      background-color:#ffffff;
      // width:70vw;
      max-width:350px;
      // box-sizing:border-box;
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
      // font-weight:600;
      font-size:18px;
      text-decoration:none;
      // border:1px solid blue;
      width:calc(100% - 60px);
      // line-height:2px;
      // color:${props => props.theme=="dark" ? "#fffffe" : "#000000"};
      &:hover{
            text-decoration:underline;
            font-weight:900;
            cursor:pointer;
            // border-bottom:2px solid black;
      }
`; 
const BottomSection = styled.div`
      display:flex;
      // border:1px solid red;
      // width:25%;
      align-items:center;
      // justify-content:space-between;
      color:${props => props.theme=="dark" ? "#fffffe" : "#192A56"};
      @media (max-width:760px){
            width:40%;
      }
`;
const Date = styled.p`
      padding:0;
      margin:0;
      width:55px;
      // border:1px solid red;
`;

export const BlogComponent = (props) => {
      const { title, desc, date, reactions, link, comments, theme } = props;
      return (
            <Container>
                  <div>
                        <TopSection theme={theme}>
                              <Title href={link} target="_blank">{title}</Title>
                              <Date>{date}</Date>
                        </TopSection>
                        <Description>{desc}</Description>
                  </div>
                  <BottomSection theme={theme}>
                        <FontAwesomeIcon style={{color:"#F0142F"}} icon={faHeart} />&ensp;{reactions}&emsp;
                        <FontAwesomeIcon style={{color:theme=="dark" ? "#94a1b2" : "black"}} icon={faComment} />
      {/*<img src={theme=="dark" ? CommentDark : CommentIcon} alt="comment icon" width="15px" height="15px" />*/}&ensp;{comments}
                  </BottomSection>
            </Container>
      )
}