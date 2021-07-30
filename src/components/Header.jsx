import React from 'react';
import styled from 'styled-components';
import {Fade} from 'react-reveal';
import GitHubIcon from '@material-ui/icons/GitHub';

const Header = () => {
    return (
        <Wrapper>
            <Fade >
            <LeftSection>
                <p><a href="/"> Avinash Kumar</a></p>
            </LeftSection>
            <RightSection>
            <a href="http://github.com/aviiwithu/" target="_blank" rel="noreferrer" >
                <li>
                     <GitHubIcon/> GithHub
                </li>
                </a>
                
            </RightSection>
            </Fade>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    padding: 20px 25px;
    
`
const LeftSection = styled.div`
    a{
        text-decoration:none;
        color:inherit;
    }
    font-size:30px;
    font-weight:700;
    color: var(--mainColor);
`
const RightSection = styled.div`
    a{
        text-decoration:none;
        color:inherit;
    }
    display:flex;
    align-items: center;
    li{
        list-style:none;
        padding:5px 10px;
        display: flex;
        align-items: center;
        gap: 5px;
    }
`