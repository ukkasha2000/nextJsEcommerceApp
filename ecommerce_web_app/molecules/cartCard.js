'use client'
import React from 'react';
import { Card, notification } from 'antd';
import style from './style.module.css';

const CartCard = ({ itemData }) => {
  const { cart } = useSelector((state) => state.shopReducer);


  const increaseFunc = (id) => {
    console.log(id);
  }
  const decreaseFunc = (id) => {
    console.log(id);
  }
  const deleteFunc = (id) => {
    notification.open({
      message: 'Item Removed From Cart',
      placement:'topLeft'
  });
  }
  
  let x =itemData.qtyInCart.toString();
  return (
    <>
        <Card>
          <div className="row" style={{position:'relative'}}>
          <button className={style.deleteCartButton} onClick={() => deleteFunc(itemData.id)}>x</button>
            <div className="col-5">
              <img src={itemData.imgsrc} className={style.CartCardImage} />
            </div>
            <div className="col-6">
              <p className={style.CartCardTitle}>{itemData.productTitle}</p>
              <p className={style.CartCardPrice}>Rs: {itemData.productPrice}</p>
              <div className={style.CartCardQuantityDiv}>
                 <button onClick={() => decreaseFunc(itemData.id)}>-</button>
                 <p className={style.CartCardQuantity}>{x}</p>
                 <button onClick={() => increaseFunc(itemData.id)}>+</button>
              </div>
            </div>
          </div>
        </Card>
    </>
  )
}

export default CartCard;