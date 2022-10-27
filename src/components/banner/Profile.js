import React from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import {BsInstagram, BsFacebook, BsTwitter} from 'react-icons/bs';
import banner from '../images/banner.jfif';
import { Link } from 'react-router-dom';

const ProfileComp = () =>{
  return (
    <Content>
        <Fade left>
            <Texts>
                <h4>Hello <span className='#F8AFA6' >We are</span></h4>
                <h1 className='#F8AFA6'>Revelation</h1>
                <Link to='/about'>Know More About Us</Link>
                <Social>
                    <p>Follow us On</p>
                    <div className='social-icons'>
                        <span><a href='#instagram'><BsInstagram size={20}/></a></span>
                        <span><a href='#facebook'><BsFacebook size={20}/></a></span>
                        <span><a href='#twitter'><BsTwitter size={20}/></a></span>
                    </div>
                </Social>
            </Texts>
        </Fade>
        <Fade right>
            <Profile>
                <img src={banner} width='70' height='400' alt='' />
            </Profile>
        </Fade>
    </Content>
   
  )
}

export default ProfileComp;

const Content = styled.div`
    display: flex;
    gap: 2rem;
    padding-top: 3rem;
    z-index: 99999;
    @media(max-width:1100px){
        padding: 1.5rem 0;
    }
    @media(max-width:650px){
        flex-direction: column;
    }
`
const Texts = styled.div`
    flex: 1;
    h4{
        padding: 1.5rem 0;
        font-weight: 500;
        font-size: 3.3rem;
    }
    h1{
        font-size: 5.3rem;
        font-family: 'Secular One', sans-serif;
        letter-spacing: 2px;
        color: #F8AFA6;
    }
    h3{
        font-weight: 500;
        font-size: 1.9rem;
        padding-bottom: 1.2rem;
        text-transform: capitalize;
    }
    p{
        font-weight: 600;
        font-size: 1.5rem;
        color: #fff;
    }
    button{
        margin-top: 3rem;
        padding: 0.7rem 2rem;
        cursor: pointer;
        background-color: #F8AFA6;
        border: none;
        border-radius: 5px;
        color: #fff;
        font-weight: 500;
        font-size: 1.8rem;
        filter: drop-shadow(0px 10px 10px #F79489);
        &:hover{
            filter: drop-shadow(0px 10px 15px #F79489);
        }
    }
`
const Profile = styled.div`
    img{
        
        filter: brightness(120%);
        filter: contrast(100%);
        filter: drop-shadow(0px 10px 10px #F79489);
        width: 25rem;
        transition: transform 400ms ease-in-out;
        @media(max-width:810px){
            width: 20rem;
        }
        @media(max-width:671px){
            width: 19rem;
        }
        @media(max-width:650px){
            width: 100%;
        }
    }
    :hover img{
        transform: translateY(-10px);
    }
`

const Social = styled.div`
    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    p{
        font-size: 1.9rem;
        @media(max-width:700px){
            font-size: 0.8rem;
        }
    }
    .social-icons{
        display: flex;
        align-items: center;
        gap: 1rem;
        span{
            width: 3.3rem;
            height: 3.5rem;
            clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
            position: relative;
            background-color: #F8AFA6;
            transition: transform 400ms ease-in-out;
            :hover{
                transform: rotate(360deg);
            }
            a{
                color: #fff;
                position: absolute;
                top: 55%;
                left: 50%;
                transform: translate(-50%, -50%);
                
            }
        }
    }
`