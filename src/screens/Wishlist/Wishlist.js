

import React,{useState} from 'react';

import Footer from '../../components/Footer/Footer';
import styled from 'styled-components';
import Header from '../../components/banner/Header';


import "./Wishlist.css"
import {FaShoppingCart, FaHeart} from 'react-icons/fa';


 function Wishlist() {

  const [data] = useState([
    {
      item: 'Golf shirt',
      price: 'R242.00',
      range: 'Summer Gear',
      image:"https://cdn1.brandability.co.za/2015/12/12094323/Mens-Basic-Pique-Golf-Shirt-Black-510x510.jpg",
      availabilty:'in stock',
      
    },
   {

     item: 'Jacket',
    price: 'R242.00',
    range: 'Summer Gear',
    image:"https://elevationstore.fr/8454-home_default/pack-2-tee-shirts-col-rond.jpg",
    availabilty:'in stock',
  },
  {
    item: 'Formal skirt',
      price: 'R242.00',
      range: 'Summer Gear',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMqUvBHX9Qw96UjEcrykJRI1kXjOWV_uoeAA&usqp=CAU",
    availabilty:'in stock',
  
  },
 
   
  ])
  
  return (
    <div>
     <Banner>
        <Header/>
    </Banner>
      <h1>Wishlist page</h1>
      <br></br>
        <p>Table</p>
        
       
          <table className='styled-table'>
                  <thead>
                    <tr>
                    <th style={{textAlign:"center"}}>NO.</th>
                    <th style={{textAlign:"center"}}>Item.</th>
                    <th style={{textAlign:"center"}}>Price.</th>
                    <th style={{textAlign:"center"}}>Range.</th>
                    <th style={{textAlign:"center"}}>Availabilty.</th>
                    <th style={{textAlign:"center"}}>icon.</th>
                  
                    </tr>
                  </thead>
                  <br></br>
                  <tbody>
                    {Object.keys(data).map((id, index)=>{
                
                      return(
                        <tr key={id}> 
                         <td><img src={data[id].image} style={{width:"50px",height:"50px",borderRadius:"10px"}}/> </td>
                           <td>{data[id].item}</td>
                           <td>{data[id].price}</td>
                           <td>{data[id].range}</td>
                           <td>{data[id].availabilty}</td>
                           
                           <td >{data[id].icon}<FaShoppingCart/></td>
                           
                        </tr>
                
                      )
                    })}
                  </tbody> 
                </table>
                
          
    </div>
  )
}
export default Wishlist
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`


