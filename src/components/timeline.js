import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    position:relative;
    border-radius:5px;
    margin-left:20px;
    margin-right:20px;
    padding:15px 20px;
    // border: 1px solid #d0d0d0;
    transition: background-color 250ms;
    background-color:${props => props.theme==="light" ? "#ffffff" : "#242629"};
    color:${props => props.theme=="dark" ? "#fffffe" : "black"};
    // font-weight:${props => props.theme=="dark" ? "400" : "bold"};
    // max-width:70%;
    width:450px;
    box-shadow: 0 0 5px rgba(0,0,0,0.4);
    &::after{
        content:'';
        position:absolute;
        top:calc(50% - 7.5px);
        right:-31px;
        background-color:white;
        z-index:99;
        width:15px;
        border-radius:50%;
        border:4px solid #FF1A1A;
        height:15px;
        @media (max-width: 600px) {
            display:none;
         }
    }
    @media (max-width: 600px) {
        margin-left:0px;
        margin-right:0px;
        text-align:left;
        width:80%;
        padding:10px 15px;
     }
`;
const Container = styled.div`
    // border:1px solid blue;
    display:flex;
    justify-content:flex-end;
    // padding-right:20px;
    // background-color:#ffffff;
    margin:10px 0;
    width:50%;
    &:nth-child(odd){
        align-self:flex-end;
        justify-content:flex-start;
        padding-right:0px;
        // padding-left:20px;
        @media (max-width: 600px) {
            width:100%;
            justify-content:center;
            // background-color:white;
         }
    }
    &:nth-child(even){
        text-align:right;
       
    }
    &:nth-child(odd) ${Content}::after{
        right:auto;
        left:-31px;
    }
    @media (max-width: 600px) {
        width:100%;
        justify-content:center;
        // background-color:white;
        z-index:2;
     }
`;

const Title = styled.p`
    font-weight:bold;
    font-size:22px;
    margin-bottom:6px;
    // font-family: 'Nunito', sans-serif;
    // border:1px solid red;
    @media (max-width: 600px) {
       font-size:18px;
    }
`;
const Location = styled.p`
    font-weight:500;
    font-size:18px;
    // color:#2B2B52;
    @media (max-width: 600px) {
        font-size:16px;
        // margin-top:5px;
     }
`;
const Desc = styled.p`
    color:white;
    font-family: 'Nunito', sans-serif;
    background-color:#6AB04A;
    padding:10px;
    border-radius:5px;
    font-weight:bold;
    margin:10px 0;
    display:inline-block;
    @media (max-width: 600px){
        font-size:14px;
        padding:5px 7px;
    }
`;
const Period = styled.p`
    // color:;
    font-weight:450;
    color:${props => props.theme=="dark" ? "#32B4D3" : "#2B2B52"};
    @media (max-width: 600px){
        font-size:14px;
    }
`;
const Ul = styled.ul`
    margin:0;
   
    & li{
        margin-left:0;
        padding-left:0;
        // border:1px solid blue;

    }
`;


const TimelineElement = (props) => {
    const {data, theme} = props;
    return (
        <Container key={data.id}>
            <Content theme={theme}>
                <Title>{data.title}</Title>
                <Location>{data.location}</Location>
                <Desc>{data.type!=="work" ? data.description : (
                    <Ul>
                    {data.description.points.map((p,i) => <li key={i}>{p}</li>)}
                    </Ul>
                )}</Desc>
                <Period theme={theme}>{data.period}</Period>
            </Content>
        </Container>
    )
}

export default TimelineElement;