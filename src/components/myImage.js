import React from 'react';
import styled from 'styled-components';

import Image from '../utils/Casual pic.jpg';
import Bitmoji from '../utils/bitmoji.jpg';

const Container = styled.div`
    padding:45px 0px;
    width:250px;
    // border:1px solid red;
    flex:1;
    @media (max-width:760px){
        padding:20px 0;
    }
`;
const Img = styled.img`
    width: 300px;
    height:300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    @media (max-width:760px){
        width: 220px;
        height:220px;
    }
`;

const MyImage = () => {
    return (
        <Container>
            <Img src={Image} alt="Profile Image" />
        </Container>
    )
}

export default MyImage;