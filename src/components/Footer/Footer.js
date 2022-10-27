import React from 'react'
import styled from 'styled-components';
import {MdAlternateEmail} from "react-icons/md";
import {CgProfile} from "react-icons/cg";
import {HiOutlineMailOpen} from "react-icons/hi";
import {AiFillGithub, AiFillLinkedin, AiOutlineArrowUp} from "react-icons/ai";
import {BsFacebook, BsSlack} from "react-icons/bs";
import {FiMail, FiPhoneCall} from "react-icons/fi";
import { useForm, ValidationError } from '@formspree/react';
import { Slide } from 'react-awesome-reveal';

const Footer = () => {
    const [state, handleSubmit] = useForm("xeqdorro");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>
    }

    const scrollHandler = () => {
        window.scroll({
            top: 0,
            behavior : "smooth"
        })
    }
  return (
    <Container id='portfolio'>
        <Wrapper>
            <Profile>
                {/* <Slide left><h1>Portfolio</h1></Slide> */}
                <Slide>
                <div className="address">
                    <h1>Address:</h1>
                    <p>1834 Vuzane Street, Dobsonville(SA), 1863</p>
                </div>
                </Slide>
                <Slide>
                <div className="links">
                    <h1>Contact us Directly:</h1>
                    <div >
                        <span><FiPhoneCall size={20}/></span>
                        <a href="tel:+27101091750">(010)109 1750</a>
                    </div>
                    <div>
                        <span><HiOutlineMailOpen size={20}/></span>
                        <a href="lebo@faithrevelation.co.za">lebo@faithrevelation.co.za</a>
                    </div>
                </div>
                <div className="links">
                    <h1>Check our Profiles:</h1>
                    <div className="icons">
                            <span><a href="#github"><AiFillGithub size={20}/></a></span>
                            <span><a href="#fb"><BsFacebook size={20}/></a></span>
                            <span><a href="#slack"><BsSlack size={20}/></a></span>
                            <span><a href="#linkedIn"><AiFillLinkedin size={20}/></a></span>
                        </div>
                </div>
                </Slide>
                    <Slide>
                    {/* <div className="profile">
                        <h1>Check our Profiles:</h1>
                        <div className="icons">
                            <span><a href="#github"><AiFillGithub size={20}/></a></span>
                            <span><a href="#fb"><BsFacebook size={20}/></a></span>
                            <span><a href="#slack"><BsSlack size={20}/></a></span>
                            <span><a href="#linkedIn"><AiFillLinkedin size={20}/></a></span>
                        </div>
                    </div> */}
                    </Slide>
                    <ArrowUp
                    onClick={scrollHandler}
                    ><AiOutlineArrowUp/></ArrowUp>
            </Profile>
            <Form>
                <Slide ><h1>Contact <span className="green">Us</span></h1></Slide>
                <Slide>
                <form onSubmit={handleSubmit}>
                    <div className="name">
                        <div><CgProfile/></div>
                        <input 
                        id='name' name='name'
                        type="text" placeholder='Fullname...' />
                    </div>
                    <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                    />
                    <div className="email">
                        <div><MdAlternateEmail/></div>
                        <input 
                        id="email" name='email'
                        type="email" placeholder='Email...' />
                    </div>
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    <div className="message">
                        <div className='messageIcon'><FiMail/></div>
                        <textarea
                        id='message' name='message'
                        cols="30" rows="10" placeholder='Message...' ></textarea>
                    </div>
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <button type='submit'>Submit</button>
                </form>
                </Slide>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Footer;

const Container = styled.div`
    background:  linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    margin-top: 2rem;
    position: relative;
`
const Wrapper = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    @media(max-width : 970px){
        width: 90%;
    }
    @media(max-width : 650px){
        flex-direction: column;
        gap: 3rem;
    }
`
const Profile = styled.div`
    flex: 1;
    .address{
        padding: 1rem 0;
        h1{
            font-size: 2.2rem;
        }
        p{
            width: 60%;
            font-size: 1.7rem;
            padding-top: 1.5rem;
            @media(max-width : 650px){
                width: 100%;
            }
        }
    }
    .links{
        h1{
            font-size: 2.2rem;
            margin-bottom: 0.5rem;
        }
        div{
            display: flex;
            align-items: center;
            gap:0.5rem;
            a{
                text-decoration: none;
                color: lightgray;
                font-size: 1.7rem;
                
            }
        }
    }
    .profile{
        h1{
            font-size: 2.2rem;
           
        }
        .icons{
            display: flex;
            align-items: center;
            
            span{
                
                width: 3rem;
                height: 3rem;
                margin-right: 0.1rem ;
                border-radius: 50px;
                a{
                    margin-top: 0.2rem;
                    color: white;
                }
            }
        }
    }
`
const Form = styled.div`
    flex: 1;
    h1{
        font-size: 2.3rem;
        padding-bottom: 0.7rem;
    }
    form {
        border-radius: 5px;
        background-color: #191923;
        padding: 0.8rem;
        .name, .email, .message {
            display: flex;
            border: 1px solid gray;
            margin-bottom: 0.5rem;
            input, textarea{
                width: 100%;
                border: none;
                outline: none;
                color: white;
                background-color: transparent;
                border: none;
                padding: 1rem 0.5rem;
            }
            div{
                background-color: #3e3e3e;
                width: 3rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .messageIcon{
                align-items: flex-start;
                padding-top: 0.5rem;
            }
        }
        button{
            width: 5rem;
            height: 2.8rem;
            cursor: pointer;
            background-color: #F8AFA6;
            border: none;
            border-radius: 5px;
            filter: drop-shadow(0px 4px 5px #F79489);
            :hover{
                filter: drop-shadow(0px 6px 9px #F79489);
            }
        }
    }
`
const ArrowUp = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: #F8AFA6;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: 700;
    font-size: 2.3rem;
    position: absolute;
    bottom: 3rem;
    @media(max-width: 650px){
        top: 40%;
        right: 1rem;
    }
`