import React from 'react';
import styled from 'styled-components';
import {Button} from './Button';
import {Fade, Zoom} from 'react-reveal';

const Intro = () => {
    return (
        <Wrapper>
            <Fade>
                <Zoom >
            <Pic src='/image/dp2.jpg' />
            </Zoom >
            <AboutText>
                <p>Hey,</p>
                <h2 className='name'>I'm Avinash Kumar</h2>
                <p className='description'>I'm a Full stack developer, I enjoy 
                coding and making web applications. Love working with React JS, NodeJs and other latest technologies.
                </p>
            </AboutText>
            <Links  >
                <a href="http://github.com/aviiwithu" target="_blank" rel="noopener noreferrer"><Button color='white' bgColor='var(--mainColor)' > Github</Button></a>
                <a href="http://localhost:3001/resume"><Button color='var(--mainColor)' bgColor='white' > Resume</Button></a>
                
                
            </Links>          
            </Fade>
        </Wrapper>
    )
}

export default Intro

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    justify-content: center;
    margin:3rem auto;
    @media only screen and (max-width: 600px) {
        width:90%;
    }
`
const Pic = styled.img`
width:200px;
height:200px;
border-radius: 50%;
`
const AboutText = styled.div`
.name{
    color: var(--mainColor);
    font-size: 35px;
}
.description{
    font-size: 18px;
    color: #6e6e6eb8;
    font-weight: 500;
    padding:15px 0;
}
`
const Links = styled.div`
    a{
        border:none;
        margin:8px 12px;
    }
    display:flex;
    width:100%;
    justify-content: center;
    
`