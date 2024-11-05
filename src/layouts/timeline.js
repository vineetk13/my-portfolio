import React, { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../App';
import TimelineElement from '../components/timeline';
import timelineData from '../utils/timelineData';

const Wrapper = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    &::after{
        background-color: #FF1A1A;
        content:'';
        position:absolute;
        left:calc(50% - 2px);
        width:4px;
        height:100%;
        @media (max-width: 600px) {
            z-index:0;
         }
    }
`;
const Container = styled.div`

&,&>div{
    transition: background-color 250ms;
background-color:${props => props.theme==="light" ? "#ffffff" : "#16161a"};
}
`;

const Heading = styled.p`
    font-weight:bold;
    font-size:40px;
    // color:#192A56;
    color:${props => props.theme=="dark" ? "#fffffe" : "#192A56"};
    padding:20px 80px;
    padding-bottom:30px;
    @media (max-width: 600px) {
        font-size:30px;
        padding-left:20px;
        padding-right:20px;
     }
`;

const Timeline = () => {
    const themeContext = useContext(ThemeContext);
    return (
        <Container theme={themeContext.theme} id="education">
            <Heading theme={themeContext.theme}>🦍Education & Experience</Heading>
            <Wrapper>
                {timelineData.map((data) => <TimelineElement theme={themeContext.theme} data={data} />)}
            </Wrapper>
        </Container>
    )
}

export default Timeline;