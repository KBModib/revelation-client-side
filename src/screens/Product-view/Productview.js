import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Sdata from '../../screens/Sales/Sdata';
import {TbBackspace} from 'react-icons/tb'
import './Product.css'
import { BsFillCartFill, BsFillHeartFill } from "react-icons/bs";

const productview = () => {

  // const {id} = useParams()
  //   const [item, setItem] = useState(null)

  //   useEffect(() => {
  //       let item = Sdata.find((item) => item.id === parseInt(id))

  //       if(item){
  //           setItem(item)
  //       }

  //   }, [id] )


  return (
    <>
      
        <div className='Container'>
        <Link to='/sales' className=''>
                <TbBackspace size={50}/>
            </Link>
            <h1 className='heading'>Product View</h1>
            <hr className='line'></hr>
            <br></br>
            <div className='image'>
            <img src={"https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/jbCgVcPdRXZC1YRI2oZ3_3qKeFvWGRbQ3wreRhIVc_58x_clear.png?auto=format&fm=jpg&fit=fill&w=300&h=300&bg=f0f0f0&fill=solid&fill-color=f0f0f0&dpr=1&q=70"} alt='product-img' className='productImageView'></img>
            </div>
            <div className='info'>
            <h2 className='heading2'>About Product</h2>
            
            <p className='name'>MASSDROP X SENNHEISER HD 6XX HEADPHONES</p>
            <h4 className='heading4'>Description</h4>
            <p className='desc'>ihuhljhijkjonjojnojonjijnmnuoujpiunoujoinnjhiuobinouobno</p>
            <h4 className='heading4'>Delivery Infomation</h4>
            <p className='desc'>ihuhljhijkjonjojnojonjijnmnuoujpiunoujoinnjhiuobinouobno</p>
            
            <h4 className='AvailS'>Available Sizes</h4>
            <div className='Sizebtn'>
            <button className='btnSize'>  XS  </button> 
            <button className='btnSize'>  S  </button>
            <button className='btnSize'>  M  </button>
            <button className='btnSize'>  L  </button>
            <button className='btnSize'>  XL  </button>
            <button className='btnSize'>  XXL  </button>
            </div>
            
            <h4 className='AvailC'>Available Colours</h4>
            <div className='Colorbtn'>
            <button className='btnRed'>  Red  </button> 
            <button className='btnBlue'>  Blue  </button>
            <button className='btnOrange'>  Orange  </button>
            <button className='btnGreen'>  Green  </button>
            <button className='btnBlack'>  Black  </button>
           
            </div>
            <div className='Addbtn'>
            <button className='btnWish'>Add to Wishlist<BsFillHeartFill size={30} className='icon'/></button>
            <button className='btnAdd'> Add to Cart <BsFillCartFill size={30} className='icon'/></button>
            

            </div>
            
            </div>
           
               
        </div>
      
    </>
  )
}

export default productview