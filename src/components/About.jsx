import React from "react";
import styled from "styled-components";
import {Fade} from 'react-reveal';

const About = () => {
  return (
    <Wrapper>
      <Fade>
      <Heading>
        <h2 className="title">About Me</h2>
        <p className="subTitle">Have a look about me</p>
      </Heading>
      <Fade>
      <MainSection>
        <Image src="/image/dp.png" />
        <AboutText>
          <Fade >
          <h3 className="title">Hey!</h3>
          <p className="description">
            I am a full stack developer who lives in Faridabad, India. 
            I work on React Js and Node Js as primary language for web development.
            Apart from that I work on MongoDB, Bootstrap, Material UI and many other popular technologies.
          </p>
          <p className="description">
            I started coding recently during Covid-19 lockdown and found it
            exciting, later got myself enrolled in online course on Udemy( a
            Online learning and teaching marketplace).
          </p>
          <p className="description">
            I started Learning HTML, CSS and JavaScript. Later i picked React JS
            as a front end library and started doing projects. Later on I turned
            into full stack development with MERN (MongoDB Express React Node) stack.
          </p>
          <p className="description">
            I always look for learning as much as I can with new and scalable
            technologies. Keep trying problem solving and look for new ideas
            into development.
          </p>
          <p className="description">
            However, at the moment I am looking to work with commitment in a company to gain
            more experience into Front End / Full Stack development. I really
            want to work on big projects, fix bugs and grow with the team.
          </p>
          <p className="description">
            My goal in the future is to learn and work on different
            technologies with time, then start helping others to grow.
          </p>
          </Fade>
        </AboutText>
      </MainSection>
      </Fade>
      </Fade>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  width: 80%;
  margin: 10px auto;
  @media only screen and (max-width: 900px) {
      width:100%;
  }
`;
const Heading = styled.div`
  text-align: center;
  padding: 15px 0;
  .title {
    font-size: 30px;
    padding: 10px;
  }
  .subTitle {
    font-size: 18px;
    font-weight: 500;
    color: grey;
  }
`;
const Image = styled.img`
  width: 340px;
  border-radius: 12px;
  object-fit: cover;
`;
const MainSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap:20px;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    width:100%;
  }
`;
const AboutText = styled.div`
  width: 50%;
  padding: 0 10px;
  .title {
    font-size: 28px;
  }
  .description {
    padding: 10px 0;
    font-size: 17px;
    line-height: 1.3;
    font-style: italic;
    color: #161616e0;
  }
  @media only screen and (max-width: 720px) {
      width:90%;
  }
`;
