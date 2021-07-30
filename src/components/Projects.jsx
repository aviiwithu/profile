import React from 'react';
import styled from 'styled-components';
import {projects} from '../Data/projects';
import {Button} from './Button';
import {Fade} from 'react-reveal';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Projects = () => {
        
    return (
        <Wrapper>
            <Fade cascade>
            <div className="projectIntro">
                <h2 className='projectHeading'>Projects</h2>
                <p className="projectInfo">Have a look at some of my projects.</p>
            </div>
            {projects.map((project,index)=>(
                <ProjectWrapper key={index} >
                    <Image src={project.image} />
                    <Info>
                        <h2 className="title">{project.title}</h2>
                        <p className="description">{project.description}</p>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                >
                                <FeaturesHeading>
                                    <p>Features</p>
                                </FeaturesHeading>
                            </AccordionSummary>
                            <AccordionDetails className="featuresDetails">
                                {project.features.map((feat,i)=>(
                                    <li key={i} > ⭐ {feat} </li>
                                ))}
                                
                            </AccordionDetails>
                        </Accordion>
                        <div className="techUsed">Tech used:{project.techUsed.map((tech,index)=> (
                            <p key={index} className="tech" >{'#'+tech} </p>) ) }
                        </div>
                        <div className="links">
                            <a href={ptoject.link.github} target="_blank" rel="noreferrer" ><Button color='white' bgColor='var(--mainColor)' > GitHub</Button></a>  
                            <a href={project.link.site} target="_blank" rel="noreferrer" ><Button color='var(--mainColor)' bgColor='white' >Website</Button></a> 
                        </div>
                    </Info>
                </ProjectWrapper>
            ) ) }
            </Fade>
        </Wrapper>
    )
}

export default Projects

const Wrapper = styled.div`
        margin: 8px auto;
        width:100%;
    a{
        text-decoration:none;
        color:inherit;
    }
    .projectIntro{
        text-align: center;
        margin:15px 0;
        padding:20px;
        
        .projectHeading{
            font-size: 32px;
        }
        .projectInfo{
            font-size: 20px;
            font-weight: 500;
            color: #808080bf;
        }
    }
`
const ProjectWrapper = styled.div`
    display:flex;
    gap:20px 30px;
    /* border:2px solid yellow; */
    margin:18px 0;
    flex-wrap: wrap;
    justify-content: center;
`
const Image = styled.img`
    height:300px;
    border: 4px solid #e85b3037;
    border-radius: 8px;
    @media only screen and (max-width: 600px) {
        width:90%;
        object-fit: cover;
        
    }
`
const Info = styled.div`
display:flex;
flex-direction: column;
gap:18px;
padding:8px 12px;
width:min-content;
.title{
    font-size: 34px;
}
.description{
    font-size: 20px;
    font-weight: 500;
    color: gray;
}
.techUsed{
    font-weight: 700;
    display:flex;
    gap:2px;
    flex-wrap: wrap;
    font-size: 20px;
    color: #000000d6;
    .tech{
        border-right:2px solid var(--mainColor);
        font-weight: 500;
        color: #524d4d;
        padding: 0 8px;
        }
    }
.links{
    display:flex;
    a{
        border:none;
        margin:8px 12px;
    }
}
.MuiAccordion-root{
    box-shadow:none;
    
}
.MuiAccordionSummary-root{
    border-radius: 4px;
    :hover{
        background-color: lightgray;
        
    }
}
.featuresDetails{
    display:block;
    li{
        list-style: none;
        padding:10px 0;
        text-transform: capitalize;
        border-bottom: 1px solid #80808045;
    }
}
`
const FeaturesHeading = styled.div`
    p{
        font-size: 22px;
        font-weight: 500;
        color: #716565;
    }
    
`