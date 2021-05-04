import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

import CommentIcon from '../assets/illustrations/comment-regular.svg';

const Container = styled.div`
      // border:1px solid blue;
      font-family: 'Nunito', sans-serif;
      border: 1px solid #d0d0d0;
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
`;
const Description = styled.div`
      padding:10px 0;
      
`;
const Title = styled.p`
      margin:0;
      padding:0;
      font-family: 'Poppins', sans-serif;
      font-weight:600;
      font-size:18px;
      // border:1px solid blue;
      width:calc(100% - 60px);
      // line-height:2px;
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
      const { title, desc, date, reactions, link, comments } = props;
      return (
            <Container>
                  <div>
                        <TopSection>
                              <Title><a href={link} style={{color:"initial",textDecoration:"none"}} target="_blank">{title}</a></Title>
                              <Date>{date}</Date>
                        </TopSection>
                        <Description>{desc}</Description>
                  </div>
                  <BottomSection>
                        <FontAwesomeIcon style={{color:"#F0142F"}} icon={faHeart} />&ensp;{reactions}&emsp;
                        <img src={CommentIcon} alt="comment icon" width="15px" height="15px" />&ensp;{comments}
                  </BottomSection>
            </Container>
      )
}