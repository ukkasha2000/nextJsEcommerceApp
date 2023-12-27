'use client'
import React, {useState,useEffect} from 'react';
import { Drawer } from 'antd';
import style from './style.module.css';
import CartCard from './cartCard';
import { notification } from 'antd';
import { TiDelete } from "react-icons/ti";


const CartDrawer = ({ visibility, setVisible}) => {
  const [totalPrice, setTotalPrice] =useState(0);

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visibility}>  
      <h4 style={{color:"red"}}>Your Cart Is Empty</h4>
        <div>
          <h5 className='mt-3'>Sub Total: <span style={{float:'right'}}>Rs: {totalPrice.toString()}/- </span></h5>
          <button className={style.placeOrderButton}  onClick={() => placeOrderFunc()}>Continue To Checkout</button>
        </div>
      </Drawer>

    </>
  )
}

export default CartDrawer;