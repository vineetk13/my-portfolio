import React, { useContext } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import { ThemeContext } from '../App';
import Moon from '../assets/illustrations/moon.svg';
import Sun from '../assets/illustrations/sun.svg';

const Ul = styled.ul`
    list-style-type:none;
    display:flex;
    // align-content:center;
    box-sizing:border-box;
   
    margin:0;
    & li a {
      color:${props => props.theme=="dark" ? "#fffffe" : "black"};
    }
    @media (max-width: 768px) {
      background-color:${props => props.theme==="light" ? "#ffffff" : "#242629"};
      display:none;
      .toggle > & {
        position:absolute;
        // border:2px dashed green;
        top:49px;
        
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
    background-color:${props => props.theme==="dark" ? "#ffffff" : "black"};
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
  // color:${props => props.theme=="dark" ? "#fffffe" : "black"};
  // ==="light" ? "#000000" : "#fffffe"
  &:hover{
    color:#32B4D3;
  }
`;
const SliderRound = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  // background-color: #242629;
  border-radius: 14px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  &:before {
    position: absolute;
    border-radius: 50%;
    text-align:center;
    content: url(${props => props.theme==="dark" ? Moon : Sun});
    height: ${(props) => {
      if (props.size === "large") return "20px";
      else if (props.size === "medium") return "16px";
      else return "12px";
    }};
    width: ${(props) => {
      if (props.size === "large") return "20px";
      else if (props.size === "medium") return "16px";
      else return "12px";
    }};
    left: 4px;
    bottom: 4px;
    background-color: #16161a;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;
const ToggleInput = styled.input`
  &:hover + ${SliderRound} {
    background-color: #89abff;
  }
  &:checked + ${SliderRound} {
    background-color: #5A607F;
    // #242629
    // opacity:0.6;
  }
  
  &:focus + ${SliderRound} {
    box-shadow: 0 0 1px #1e5eff;
  }
  &:checked + ${SliderRound}:before {
    -webkit-transform: translateX(
      ${(props) => {
        if (props.size === "large") return "20px";
        else if (props.size === "medium") return "20px";
        else return "20px";
      }}
    );
    -ms-transform: translateX(
      ${(props) => {
        if (props.size === "large") return "20px";
        else if (props.size === "medium") return "20px";
        else return "20px";
      }}
    );
    transform: translateX(
      ${(props) => {
        if (props.size === "large") return "20px";
        else if (props.size === "medium") return "20px";
        else return "9px";
      }}
    );
  }
`;


const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: ${(props) => {
    if (props.size === "large") return "48px";
    else if (props.size === "medium") return "44px";
    else return "28px";
  }};
  height: ${(props) => {
    if (props.size === "large") return "28px";
    else if (props.size === "medium") return "24px";
    else return "20px";
  }};
  & ${ToggleInput} {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;
const ToggleTheme = styled.div`
  display:inline-block;
  @media (max-width: 768px) {
    margin-right:15px;
    
  }
`;


const Navig = (props) => {
    const onToggleNav = () => {
      const burger = document.querySelector(".burger");
      burger.classList.toggle("toggle");
    }
    const hash = props.location.hash;
    const themeContext = useContext(ThemeContext);
    // console.log(props);
    return (
        <div className="burger" style={{position:"relative",display:"flex",alignItems:"center"}}>
            <Ul theme={themeContext.theme}  className="nav-links" onClick={onToggleNav}>
                <Li><CustmLink href="#education" style={{color:hash==="#education" && "#32B4D3"}} >Education & Experience</CustmLink></Li>
                <Li><CustmLink href="#skills" style={{color:hash==="#skills" && "#32B4D3"}}>Skills</CustmLink></Li>
                <Li><CustmLink href="#projects" style={{color:hash==="#projects" && "#32B4D3"}}>Projects</CustmLink></Li>
                <Li><CustmLink  href="#blogs" style={{color:hash==="#blogs" && "#32B4D3"}}>Blogs</CustmLink></Li>
                <Li><CustmLink href="#contact" style={{color:hash==="#contact" && "#32B4D3"}}>Contact</CustmLink></Li>
            </Ul>
            <ToggleTheme>
              <ToggleSwitch size="large">
                <ToggleInput onChange={(e) => themeContext.toggle(e.target.checked)} size="large" type="checkbox" />
                <SliderRound theme={themeContext.theme} size="large"></SliderRound>
              </ToggleSwitch>
            </ToggleTheme>

            <Burger theme={themeContext.theme} onClick={onToggleNav}>
                <Line1></Line1>
                <Line2></Line2>
                <Line3></Line3>
            </Burger>
        </div>
    )
}

export default withRouter(Navig);