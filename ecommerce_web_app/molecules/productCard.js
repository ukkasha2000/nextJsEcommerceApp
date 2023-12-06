import React from 'react';
import style from './style.module.css'
import { Card, Button } from '@/atoms';
// import { useDispatch } from 'react-redux';
// import { addToCart } from '../../redux/actions/cartActions';
// import { notification } from 'antd';
// import { FcApproval } from "react-icons/fc";


const ProductCard = ({data}) => {
    // const dispatch = useDispatch();
    // const addingFunc = (v) => {
    //     notification.open({
    //         message: 'Item Added To Cart Successfully',
    //         icon: <FcApproval />,
    //         placement:'topLeft'
    //     });
    //     dispatch(addToCart(v));
    // }
    return (
        <>
            <Card className={style.ProductMaincard} cover={<img alt="example" src={data?.imgsrc} className={style.imgcard} />}>
                <h5 className={style.productTitle}>{data?.productTitle}</h5>
                <p className={`${style.productPrice} mt-3`}> Rs: {data?.productPrice}</p>
                <span className={`${style.productButtonMainSpan}`}>
                    <Button className={style.productButton} onClick={() => addingFunc(data)}>
                        <span className={style.productButtonSpan}>Add To Cart</span>
                        <span className={style.productButtonSpanTwo}>+</span>
                    </Button>
                </span>

            </Card>
        </>
    )
}

export default ProductCard;