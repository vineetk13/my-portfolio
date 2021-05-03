import React from 'react';
import styled from 'styled-components';

import Navig from '../components/navigation';
import Logo from '../assets/illustrations/logo2.svg';

const Container = styled.nav`
    padding:0 25px;
    height:70px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    box-shadow: 0px 1px 10px #999;
    position:sticky;
    z-index:100;
    top:0;
    left:0;
    background-color:#ffffff;
    width:calc(100% - 50px);
    // border:1px solid red;
`;

const Navbar = () => {
    return (
        <Container>
            <img src={Logo} width="40" height="auto" />
            <Navig />
            
        </Container>
    )
}

export default Navbar;