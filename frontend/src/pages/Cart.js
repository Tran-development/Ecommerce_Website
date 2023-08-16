import React, { useState } from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import { AiTwotoneDelete } from 'react-icons/ai'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Cart.scss'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { deleteCartProduct, getUserCart, updateCartProduct } from '../features/user/userSlice'

const Cart = () => {

    const [prodUpdateDetail, setProdUpdateDetail] = useState(null)
    const [totalAmount, setTotalAmount] = useState(null)
    const dispatch = useDispatch()
    const userCartState = useSelector((state) => state?.auth?.cartProducts)

    useEffect(() => {
        dispatch(getUserCart())
    }, [])

    useEffect(() => {
        if (prodUpdateDetail !== null) {
            dispatch(updateCartProduct({ cartItemId: prodUpdateDetail?.cartItemId, quantity: prodUpdateDetail?.quantity }))
            setTimeout(() => {
                dispatch(getUserCart())
            }, 200)
        }
    }, [prodUpdateDetail])

    const deleteACartProd = (id) => {
        dispatch(deleteCartProduct(id))
        setTimeout(() => {
            dispatch(getUserCart())
        }, 200)
    }

    useEffect(() => {
        let sum = 0;
        for (let index = 0; index < userCartState?.length; index++) {
            sum = sum + (Number(userCartState[index].quantity) * userCartState[index].productId.price)
            setTotalAmount(sum)
        }
    }, [userCartState])

    return (
        <>
            <Meta title={"Cart"} />
            <BreadCrum title="Your Shopping Cart" />
            <Container class1='cart-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <Link to='/product' className='d-flex align-items-center back-prod-link'><FaArrowLeft className='me-2 fs-6' />Continue To Shopping</Link>

                        <div className='cart-header py-3 d-flex justify-content-between'>
                            <h4 className='cart-col-1'>Product</h4>
                            <h4 className='cart-col-2'>Price</h4>
                            <h4 className='cart-col-3'>Quantity</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>
                        {
                            userCartState && userCartState?.map((item, index) => {
                                return (
                                    <div key={index} className='cart-data mb-2 py-3 d-flex justify-content-between align-items-center'>
                                        <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                            <div className='w-25'>
                                                <img src={item?.productId?.images[0]?.url} className='img-fluid item-cart' />
                                            </div>
                                            <div className='w-75'>
                                                <div className='w-75'>
                                                    <h5>{item?.productId.title}</h5>
                                                    {/* <p>Size: ssad</p> */}
                                                    <p className='d-flex gap-3'>Color: <ul className='colors ps-0'>
                                                        <li style={{ backgroundColor: item?.title }}></li>
                                                    </ul></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='cart-col-2'>
                                            <h5 className='price'>$ {item?.productId?.price}</h5>
                                        </div>
                                        <div className='cart-col-3 d-flex align-items-center gap-10'>
                                            <div>
                                                <input
                                                    type='number'
                                                    className='form-control'
                                                    name=''
                                                    min={1}
                                                    max={50}
                                                    id=''
                                                    value={prodUpdateDetail?.quantity ? prodUpdateDetail?.quantity : item?.quantity}
                                                    onChange={(e) => setProdUpdateDetail({ cartItemId: item?._id, quantity: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <AiTwotoneDelete
                                                    className='text-danger fs-4 btn-delete'
                                                    onClick={() => deleteACartProd(item?._id)}
                                                />
                                            </div>
                                        </div>
                                        <div className='cart-col-4'>
                                            <h5 className='price'>$ {item?.productId?.price * item?.quantity}</h5>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className='col-12 py-2 mt-4'>
                            <div className='d-flex justify-content-between align-items-baseline'>
                                <div className='d-flex gap-10'>
                                    <input
                                        type='text'
                                        placeholder='Coupon code'
                                        className='coupon'
                                    />
                                    <Link className='button'>
                                        Apply coupon
                                    </Link>
                                </div>
                                {
                                    (totalAmount !== null || totalAmount !== 0) &&
                                    <div className='d-flex flex-column align-items-center'>
                                    <h4>SubTotal: $ {totalAmount}</h4>
                                    <p>Taxes and shipping calculated at checkout</p>
                                    <Link to='/checkout' className='button'>
                                        Checkout
                                    </Link>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Cart