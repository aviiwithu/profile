import React,{useState} from 'react';
import styled from 'styled-components';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';

const Dashboard = () => {

    const [content, setContent] = useState(0);

    return (
        <Wrapper>
            
            <Heading>
                <li onClick={()=>setContent(0)} className={content===0?'active':null} >projects</li>
                <li onClick={()=>setContent(1)} className={content===1?'active':null} >skills</li>
                <li onClick={()=>setContent(2)} className={content===2?'active':null} >about</li>
                <li onClick={()=>setContent(3)} className={content===3?'active':null} >contact</li>
            </Heading>
                
            <Content>
                {content===0 && <Projects/>}
                {content===1 && <Skills/>}
                {content===2 && <About/>}
                {content===3 && <Contact/>}
            </Content>
            
        </Wrapper>
    )
}

export default Dashboard

const Wrapper = styled.div`
margin:0 auto;

`
const Heading = styled.div`
    display:flex;
    justify-content: space-between;
    list-style:none;
    width:80%;
    margin:auto;
    li{
        padding: 10px 25px;
        text-transform: uppercase;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        :hover{
            background-color:#d5d5d573;
            border-radius: 3px 3px 0px 0px;
            border-bottom: 3px solid black;
        }
    }
    .active{
        border-bottom: 3px solid black;
    }
    @media only screen and (max-width: 600px) {
        width:100%;
    }
`
const Content = styled.div`
    width:100%;
    margin:auto;
`