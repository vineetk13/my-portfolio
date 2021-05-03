import React, {useState, useEffect} from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const Ul = styled.ul`
    list-style-type:none;
    display:flex;
    // align-content:center;
    box-sizing:border-box;
    margin:0;
    @media (max-width: 768px) {
      display:none;
      .toggle > & {
        position:absolute;
        // border:2px dashed green;
        top:49px;
        background-color:#ffffff;
        width:100vw;
        height:calc(100vh - 70px);
        right:-25px;
        display:flex;
        flex-direction:column;
        justify-content:space-evenly;
        align-items:flex-end;
      }
    }
`

const Li = styled.li`
    // float:left;
    font-family: 'Nunito', sans-serif;
    font-size:18px;
    display:block;
    text-align:right;
    padding:0px 15px;
    // border:1px solid blue;
    &:hover{
        cursor:pointer;
        color:#32B4D3;
    }
    @media (max-width: 768px){
      padding-right:30px;
      font-size:22px;
    }
`;
const Burger = styled.div`
  display: none;
  & div {
    // display:;
    width: 25px;
    height: 3px;
    background-color: black;
    margin: 5px 0;
  }
  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    
  }
`;
// const burgerLines = styled.keyfr
const Line1Animate = keyframes`
  from{
    transform: rotate(0deg) translate(0px, opx);
  }
  to {
    transform: rotate(-45deg) translate(-5px, 6px);
  }
`;
const Line3Animate = keyframes`
  from{
    transform: rotate(0deg) translate(0px, opx);
  }
  to {
    transform: rotate(45deg) translate(-5px, -6px);
  }
`;
const Line1 = styled.div`
  .toggle & {
    // transform: rotate(-45deg) translate(-5px, 6px);
    animation:${Line1Animate} 0.2s linear;
    animation-fill-mode: forwards; 
  }
`;
const Line2 = styled.div`
  .toggle & {
    opacity: 0;
  }
`;
const Line3 = styled.div`
  .toggle & {
    animation:${Line3Animate} 0.2s linear;
    animation-fill-mode: forwards; 
  }
`;
const CustmLink = styled.a`
  text-decoration:none;
  color:initial;
  // &:link{
  //   color:black;
  // }
  // &:visited{
  //   color:#32B4D3;
  // }
  &:hover{
    color:#32B4D3;
  }
  // &:active{
  //   color:#32B4D3;
  // }
`;


const Navig = (props) => {
    const onToggleNav = () => {
      const burger = document.querySelector(".burger");
      burger.classList.toggle("toggle");
    }
    const hash = props.location.hash;
    // console.log(props);
    return (
        <div className="burger" style={{position:"relative"}}>
            <Ul className="nav-links" onClick={onToggleNav}>
                <Li><CustmLink href="#education" style={{color:hash==="#education" && "#32B4D3"}} >Education & Experience</CustmLink></Li>
                <Li><CustmLink href="#skills" style={{color:hash==="#skills" && "#32B4D3"}}>Skills</CustmLink></Li>
                <Li><CustmLink href="#projects" style={{color:hash==="#projects" && "#32B4D3"}}>Projects</CustmLink></Li>
                <Li><CustmLink href="#blogs" style={{color:hash==="#blogs" && "#32B4D3"}}>Blogs</CustmLink></Li>
                <Li><a>Contact</a></Li>
            </Ul>
            <Burger onClick={onToggleNav}>
                <Line1></Line1>
                <Line2></Line2>
                <Line3></Line3>
            </Burger>
        </div>
    )
}

export default withRouter(Navig);