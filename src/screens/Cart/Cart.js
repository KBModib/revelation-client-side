

import React from 'react';
import Footer from '../../components/Footer/Footer';
import styled from 'styled-components';
import Header from '../../components/banner/Header';
import { AiFillCloseCircle } from "react-icons/ai";
import './Cart.css';

const cart = () => {
  return (
    <>


    <Container>
    <Banner>
        <Header/>
    </Banner>
    <h1 className='heading'>Cart page</h1>

      <table className='cart-table' width={5}>
        <thead className='cart-header'>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className='cart-row'>
            <th scope='row'><img src='' alt='item'/></th>
            <td className='text'>Name</td>
            <td className='text'><button className='qty-btn'>+</button>Quantity<button className='qty-btn'>-</button></td>
            <td className='text'>Price</td>
            <td className='text'><button><AiFillCloseCircle size={20} color='red'/></button></td>
          </tr>
        </tbody>
      </table>
      <div className='total'>
        <h4>Total: R0</h4>
      </div>
      <div>
        <button className='cart-checkout'>Checkout</button>
      </div>

    
    <Footer/>
</Container>
</>
    
      
  )
}


export default cart;


const Container = styled.div`
`
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`




