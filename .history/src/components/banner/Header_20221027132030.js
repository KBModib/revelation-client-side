import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {GiHearts} from 'react-icons/gi';
import {HiShoppingCart} from 'react-icons/hi';
import {CgProfile} from 'react-icons/cg';
import img from '../images/logo.png';
import {Link} from 'react-router-dom';
import {
    collection,
    getDocs,
  } from "firebase/firestore";
import { db } from '../config/Firebase';
  
const Header = () => {
    const [bar, setBar ] = useState(false);
    const [prodList,setprodList] =useState([])
    window.localStorage.setItem('prodList', JSON.stringify(prodList));
    
  useEffect(() => {
    
    
    getDocs(collection(db, "inventorystock/")).then((res) => {
      
      res.forEach((doc) => {
        // console.log("GET DATA: ", doc.data())
        getDocs(collection(db, "inventorystock/", doc.id, 'colours')).then((response) => {
          // doc.data() is never undefined for query doc snapshots
          let coloursList = [];
          
          response.forEach((e) => {
            // prodList.push(doc.data(), e.data());
            // setProductList(prodList)

            // console.log('Colours 3: ', prodList)

            coloursList.push(e.data())
            // getInventoryStock.push(
            //   doc.id
            // )
            // console.log(e.id, " => ", e.data());
            // setStock(getInventoryStock)

          })
          // console.log("GET DATA: ", doc.data())
          
          setprodList(item=>[...item,Object.assign(doc.data(), {coloursList: coloursList})]);
          
          
          
          console.log('Colours: ', prodList)
        },[]);
  
       
      });
      console.log('Colours:test ', prodList)
      setprodList(prodList)
    
    });
  }, []);

  return (
    <Content bar={bar}>
        
        <Logo id='home'>
            
        <img src={img} alt="" width="70" height="70" />
        </Logo>
        
        <Nav bar={bar}>
             
        <a href><Link to='/'>Home</Link></a>
                <a href><Link to='/sales'>Sale</Link></a>
                <a href><Link to='/summer'>Summer</Link></a>
                <a href><Link to='/winter'>Winter</Link></a>
                <a href><Link to='/accessories'>Accessories</Link></a>
                <a href><Link to='/about'>About Us</Link></a>
                <a href><Link to='/wishlist'><GiHearts size={20}/></Link></a>
                <a href><Link to='/cart'><HiShoppingCart size={20}/></Link></a>
                <a href><Link to='/profile'><CgProfile size={20}/></Link></a>

                {
                    
              prodList.map((id )=>{
                console.log(id.prodName)
                  console.log("===========",id);
                  
                <div key={id}>
                    <h3>{id.prodName}</h3>
                    <img src={id.image}  alt="Product Image" style={{ width: "100%", height: "100%", margin: "auto", display: "flex", alignItems: "center", marginTop: "-18px" }} />
                <h3>hi</h3>
                </div>
                
                
                })}
        </Nav>
        
        <div className='shadow'></div>
    <Bar bar={bar} onClick={() => setBar(!bar)}>
        <span className='active'></span>
    </Bar>
    </Content>
  )
}

export default Header

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0;
    .shadow{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: #0000009e;
        z-index: 1;
        display: ${props => props.bar ? "block" : "none"};
    }
`
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span{
        font-size: 1.8rem;
        color: #01be96;
    }
    h1{
        font-weight: 600;
        font-size: 1.2rem;
    }
`
const Nav = styled.div`
    a{
        margin-left: 1rem;
        text-decoration: none;
        color: #fff;
        font-weight: 400;
        position: relative;
        font-size: 1.4rem;
        :before{
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            right: 0;
            background-color: #F79489;
            height: 2px;
            transform: scale(0);
            transform-origin: right;
            transition: transform 400ms ease-in-out;
        }
        
        :hover{
            opacity: 0.6;
            color: #F79489;
        }
        :hover:before{
            transform: scale(1);
            transform-origin: left;
        }
    }
    @media(max-width:650px){
        background-color: #EED6D3;
        position: absolute;
        display: relative;
        flex-direction: column;
        gap: 5rem;
        top:${props => props.bar ? "90px" : "-20rem"};
        padding:${props => props.bar ? "1rem 0" : "0"};
        left: 5%;
        right: 5%;
        transition: all 400ms ease-in-out;
        z-index: 10000;
    }
    z-index: 10000;
   
        
`
const Bar = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    display: none;
    z-index: 100;
    @media(max-width:650px){
        display: flex;
        
    }
    span{
        position: absolute;
        width: 80%;
        height: 2px;
        background-color: ${props => props.bar ? "transparent" : `#fff`};
        border-radius: 5px;
        transition: all 400ms ease-in-out;
        :before, :after{
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #fff;
            border-radius: 5px;
        }
        :before{
            transform: ${props => props.bar ? `rotate(-45deg)` : `translateY(8px)`};
            transition: all 400ms ease-in-out;
        }
        :after{
            transform: ${props => props.bar ? `rotate(45deg)` : `translateY(-8px)`};
            transition: all 400ms ease-in-out;
        }
    }
`