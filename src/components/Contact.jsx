import React from 'react';
import styled from 'styled-components';
import {Fade} from 'react-reveal';

const Contact = () => {
    return (
        <Wrapper>
            <Fade cascade>
            <Heading>
                <h2 className="title">Contact Me</h2>
                <p className="subTitle">Call or send me an email.</p>
            </Heading>
            <MainSection>
                <a href="mailto:aviiwithu@gmail.com" className='email' >Email: aviiwithu@gmail.com</a>
                <a href="tel:+91 8468846290" className='phone' >Phone: +91 8468846290</a>
            </MainSection>
            </Fade>
            {/* <ContactForm>
                <h2 className="title">Please fill the details below to get in touch</h2>
                <form action="http://localhost:3001/contact" method="post">
                    Name:<input className="name" type="text" name="name" placeholder="Your name" required />
                    Email:<input className="email" type="email" name="email" placeholder="Your email" required />
                    Please<textarea name="description" required/>
                    <button className="btn" type="submit">Submit Now</button>
                </form>
            </ContactForm> */}
        </Wrapper>
    )
}

export default Contact

const Wrapper = styled.div`
    padding:15px 0;
`
const Heading = styled.div`
    text-align:center;
    .title{
        font-size: 28px;
    }
    .subTitle{
        font-size:18px;
        font-weight: 500;
        color:gray;
        padding:10px 0;
    }
`
const MainSection = styled.div`
    padding:20px 0;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    a{
        text-decoration:none;
        font-size: 20px;
        color:black;
        padding:9px;
        margin: 17px 35px;
        font-weight: 600;
    }
`

// const ContactForm = styled.div`
//  form{
//      display:flex;
//      flex-direction:column;
//      width:60%;
//      margin:auto;
//  }
//  input,textarea{
//      padding:8px;
//      margin:15px;
//      border:1px solid lightgray;
//      border-radius: 8px;
//  }
//  .btn{
//      padding:10px 12px;
//      border-radius:8px;
//      width:30%;
//      margin: auto;
//      cursor: pointer;
//  }
// `