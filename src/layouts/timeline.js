import React from 'react';
import styled from 'styled-components';

import TimelineElement from '../components/timeline';
import timelineData from '../utils/timelineData';

const Container = styled.div`
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
            z-index:-1;
         }
    }
`;

const Heading = styled.p`
    font-weight:bold;
    font-size:40px;
    color:#192A56;
    padding:20px 80px;
    @media (max-width: 600px) {
        font-size:30px;
        padding-left:20px;
        padding-right:20px;
     }
`;

const Timeline = () => {
    return (
        <div id="education">
        <Heading>Education & Experience</Heading>
        <Container>
            {timelineData.map((data) => <TimelineElement data={data} />)}
        </Container>
        </div>
    )
}

export default Timeline;