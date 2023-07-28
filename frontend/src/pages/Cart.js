import React from 'react'
import BreadCrum from '../components/BreadCrum'
import Meta from '../components/Meta'
import { AiTwotoneDelete } from 'react-icons/ai'
import {FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Cart.scss'
import Container from '../components/Container'

const Cart = () => {
    return (
        <>
            <Meta title={"Cart"} />
            <BreadCrum title="Your Shopping Cart" />
            <Container class1='cart-wrapper home-wrapper-2 py-5'>
                    <div className='row'>
                        <div className='col-12'>
                            <Link to='/product' className='d-flex align-items-center back-prod-link'><FaArrowLeft className='me-2 fs-6'/>Continue To Shopping</Link>
                            
                            <div className='cart-header py-3 d-flex justify-content-between'>
                                <h4 className='cart-col-1'>Product</h4>
                                <h4 className='cart-col-2'>Price</h4>
                                <h4 className='cart-col-3'>Quantity</h4>
                                <h4 className='cart-col-4'>Total</h4>
                            </div>
                            <div className='cart-data mb-2 py-3 d-flex justify-content-between align-items-center'>
                                <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                    <div className='w-25'>
                                        <img src='images/cabbage.jpg' className='img-fluid' />
                                    </div>
                                    <div className='w-75'>
                                        <div className='w-75'>
                                            <h5>Cabbage</h5>
                                            <p>Size: ssad</p>
                                            <p>Color: ssd</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='cart-col-2'>
                                    <h5 className='price'>$ 100</h5>
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
                                        />
                                    </div>
                                    <div>
                                        <AiTwotoneDelete className='text-danger fs-4' />
                                    </div>
                                </div>
                                <div className='cart-col-4'>
                                    <h5 className='price'>$ 100</h5>
                                </div>
                            </div>
                            <div className='cart-data mb-2 py-3 d-flex justify-content-between align-items-center'>
                                <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                    <div className='w-25'>
                                        <img src='images/cabbage.jpg' className='img-fluid' />
                                    </div>
                                    <div className='w-75'>
                                        <h5>Cabbage</h5>
                                        <p>Size: ssad</p>
                                        <p>Color: ssd</p>
                                    </div>
                                </div>
                                <div className='cart-col-2'>
                                    <h5 className='price'>$ 100</h5>
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
                                        />
                                    </div>
                                    <div>
                                        <AiTwotoneDelete className='text-danger fs-4' />
                                    </div>
                                </div>
                                <div className='cart-col-4'>
                                    <h5 className='price'>$ 100</h5>
                                </div>
                            </div>
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
                                    <div className='d-flex flex-column align-items-center'>
                                        <h4>SubTotal: $ 100</h4>
                                        <p>Taxes and shipping calculated at checkout</p>
                                        <Link to='/checkout' className='button'>
                                            checkout
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default Cart