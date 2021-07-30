import React from 'react';
import styled from 'styled-components';
import {skills} from '../Data/skills';
import {Fade} from 'react-reveal';

const Skills = () => {
    return (
        <Wrapper>
            <Fade cascade>
            <div className="info">
                <h2  >Skills</h2>
                <p>Languages and Technologies that I use for my projects.</p>
            </div>
            <div className="skills">
                {skills.map((skill,index)=>(
                    <SkillWrapper key={index} >
                        <Fade bottom cascade>
                        <img src={skill.image} alt={skill.name} className="skillImg" />
                        <p className="skillName">{skill.name} </p>
                        </Fade>
                    </SkillWrapper>
                )) }
            </div>
            </Fade>
        </Wrapper>
    )
}

export default Skills

const Wrapper = styled.div`
    width:80%;
    margin:auto;
    .info{
        text-align: center;
        padding:50px 0;
        h2{
            font-size:32px;
        }
        p{
            font-size: 20px;
            font-weight:500;
            color:#16151591;
            padding:10px 0;
        }
    }
    .skills{
        display:flex;
        flex-wrap: wrap;
        gap: 57px 100px;
        justify-content: space-evenly;
        align-items: center;
    }
`
const SkillWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    .skillImg{
        width: 120px;
        height: 120px;
        object-fit: contain;
        /* border:2px solid black; */
    }
    .skillName{
        font-size: 17px;
        font-weight: 500;
        padding:20px 0;
    }

`