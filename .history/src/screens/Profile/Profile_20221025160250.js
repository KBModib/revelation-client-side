import React,{useState} from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";
import './Profile.css';
import {Routes, Route, useNavigate} from 'react-router-dom';

import Footer from '../../components/Footer/Footer';
import styled from 'styled-components';
import Header from '../../components/banner/Header';
import { Link } from 'react-router-dom';

import { login, logout, signup, useAuth } from '../../Firebase';


const Profile = () => {

	const navigate = useNavigate();

  const AccountDetails = () => {
    navigate('/accountdetails');
  };

  const PendingOrders = () => {
    navigate('/pendingorder');
  };

  const OrderHistory = () => {
	navigate('/orderhistory');
	  };

   const Wishlist = () => {
	navigate('/wishlist');
	  };

	const Cart = () => {
	navigate('/cart');
	  };

	// const Logout = () => {
	// navigate('/login');
	//   };
	const currentUser = useAuth()
	const[loading, setLoading] = useState(false)
  
	async function handleLogOut(){
	  setLoading(true)
	  try{
		await logout()
	  }catch{
		alert("Error")
	  }
	  setLoading(false)
	}

  return (
	
    <>
	<Container>
    <Banner>
        <Header/>
		
    </Banner>
	
			<h1 className='h1'>My Profile</h1>
			<div className='profile'>
				<div className='image-card'>
					<img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
					<h2 className='ans'>Name</h2>
					<h2 className='ans'>Email</h2>
				</div>
				<div className='button-card'>
					<div>

					<button className='btn'>Account Details <AiOutlineArrowRight /></button>
					<button className='btn'>Pending Orders <AiOutlineArrowRight /></button>
					<button className='btn'>Order History <AiOutlineArrowRight /></button>
					

					<button className='btn' onClick={AccountDetails}>Account Details <AiOutlineArrowRight /></button>
					<button className='btn'onClick={PendingOrders}>Pending Orders <AiOutlineArrowRight /></button>
					<button className='btn'onClick={OrderHistory}>Order History <AiOutlineArrowRight /></button>

					</div>
					<div className='btn-btm'>
					<button className='btn-sec'onClick={Cart}>Cart <BsFillCartFill size={45} className='icon' /></button>
					<button className='btn-sec'onClick={Wishlist}>Wishlist <BsFillHeartFill size={45} className='icon' /></button>
					</div>

				<Routes>
					<Route path="/accountdetails" element={<AccountDetails />} />
					<Route path="/pendingorder" element={<PendingOrders />} />
					<Route path="/orderhistory" element={<OrderHistory />} />
					<Route path="/wishlist" element={<Wishlist />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
				</div>
				
				 <div>Current loged in user: {currentUser?.email}</div>
    <button disabled={loading || !currentUser}onClick={handleLogOut}>Sign out</button>
			</div>
			<Footer/>
</Container>
		</>	
  )
}

export default Profile;

const Container = styled.div`
`
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`