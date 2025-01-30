import React, {useContext} from 'react'
import styled from 'styled-components';
import { ThemeContext } from '../App';
import GitHubCalendar from 'react-github-calendar';

const Container = styled.div`
padding:40px 0px;
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

const Opensource = () => {
    const themeContext = useContext(ThemeContext);
    return (
        <Container theme={themeContext.theme} id="opensource">
            <Heading theme={themeContext.theme}>🌐 Open source</Heading>
            <div style={{display:"flex",justifyContent:"center"}}>
                <GitHubCalendar username="vineetk13" />
            </div>
        </Container>
    )
}

export default Opensource;